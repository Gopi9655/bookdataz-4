import { neon } from "@neondatabase/serverless";

// Single shared SQL client. @neondatabase/serverless is HTTP-based and safe to
// reuse across serverless invocations. We resolve the connection string lazily
// so importing this module never throws at build time when DATABASE_URL is
// absent (e.g. during `next build`).
let sqlClient = null;
let tableReady = null;

function getSql() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured");
  }
  if (!sqlClient) {
    sqlClient = neon(databaseUrl);
  }
  return sqlClient;
}

// Create the table on first use. The promise is cached so concurrent requests
// share a single CREATE TABLE round-trip rather than racing.
export async function ensureContactTable() {
  if (tableReady) return tableReady;
  const sql = getSql();
  tableReady = sql`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      name text NOT NULL,
      email text NOT NULL,
      subject text,
      message text NOT NULL,
      status text NOT NULL DEFAULT 'new',
      captcha_success boolean NOT NULL DEFAULT false,
      captcha_mode text NOT NULL DEFAULT 'off',
      captcha_hostname text,
      submitter_country text,
      submitter_region text,
      submitter_city text,
      submitter_ip_hash text,
      user_agent text,
      created_at timestamptz NOT NULL DEFAULT now()
    )
  `.then(() => true);

  try {
    await tableReady;
  } catch (err) {
    // Reset so a transient failure can be retried on the next request.
    tableReady = null;
    throw err;
  }
  return tableReady;
}

export async function insertSubmission(data) {
  await ensureContactTable();
  const sql = getSql();
  const rows = await sql`
    INSERT INTO contact_submissions (
      name, email, subject, message,
      captcha_success, captcha_mode, captcha_hostname,
      submitter_country, submitter_region, submitter_city,
      submitter_ip_hash, user_agent
    ) VALUES (
      ${data.name}, ${data.email}, ${data.subject ?? null}, ${data.message},
      ${data.captchaSuccess ?? false}, ${data.captchaMode ?? "off"}, ${data.captchaHostname ?? null},
      ${data.country ?? null}, ${data.region ?? null}, ${data.city ?? null},
      ${data.ipHash ?? null}, ${data.userAgent ?? null}
    )
    RETURNING id
  `;
  return rows[0]?.id;
}

export async function listSubmissions(limit = 200) {
  await ensureContactTable();
  const sql = getSql();
  return sql`
    SELECT
      id, name, email, subject, message, status,
      captcha_success, captcha_mode, captcha_hostname,
      submitter_country, submitter_region, submitter_city,
      user_agent, created_at
    FROM contact_submissions
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;
}

const ALLOWED_STATUSES = ["new", "read", "archived"];

export async function updateSubmissionStatus(id, status) {
  if (!ALLOWED_STATUSES.includes(status)) {
    throw new Error("Invalid status");
  }
  await ensureContactTable();
  const sql = getSql();
  await sql`
    UPDATE contact_submissions
    SET status = ${status}
    WHERE id = ${id}
  `;
}
