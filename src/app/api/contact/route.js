import { NextResponse } from "next/server";
import pkg from "pg";
import { z } from "zod";

// 1. Setup PostgreSQL connection pool (singleton-safe for serverless)
const { Pool } = pkg;
const connectionString = process.env.NEON_DB_URL;

let pool;
if (!global.pgPool) {
  global.pgPool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
}
pool = global.pgPool;

// 2. Zod schema for validation
const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

// 3. POST handler
export async function POST(request) {
  let body = {};

  try {
    try {
      body = await request.json();
    } catch (jsonErr) {
      console.error("Invalid JSON body:", jsonErr.message);
      return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
    }

    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: parsed.error.errors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;

    // 4. Get IP and User-Agent
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;
    const userAgent = request.headers.get("user-agent") || null;

    // 5. Geolocation fetch
    const geo = { city: null, region: null, country_name: null };
    try {
      if (ip && ip !== "127.0.0.1" && ip !== "::1") {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 2000); // 2s timeout

        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`, {
          signal: controller.signal,
        });

        clearTimeout(timeout);

        if (geoRes.ok) {
          const data = await geoRes.json();
          geo.city = data.city || null;
          geo.region = data.region || null;
          geo.country_name = data.country_name || null;
        }
      }
    } catch (geoErr) {
      console.warn("Geolocation lookup failed:", geoErr.message);
    }

    // 6. Database insert
    const client = await pool.connect();
    try {
      const query = `
        INSERT INTO contacts 
        (name, email, subject, message, ip_address, country, region, city, user_agent)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING id
      `;
      const values = [
        name,
        email,
        subject || null,
        message,
        ip,
        geo.country_name,
        geo.region,
        geo.city,
        userAgent,
      ];

      const result = await client.query(query, values);
      return NextResponse.json({ success: true, id: result.rows[0].id });
    } catch (dbErr) {
      console.error("Database error:", dbErr);
      return NextResponse.json({ success: false, error: "Database error" }, { status: 500 });
    } finally {
      client.release();
    }
  } catch (err) {
    console.error("Unhandled error:", err);
    return NextResponse.json(
      { success: false, error: "Unhandled request error" },
      { status: 500 }
    );
  }
}

// 7. Vercel Node.js runtime config
export const config = {
  runtime: "nodejs",
};
