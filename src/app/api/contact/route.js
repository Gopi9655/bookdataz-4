import { NextResponse } from "next/server";
import { Pool } from "pg";
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // from .env.local
  ssl: {
    rejectUnauthorized: false, // required for Neon or other SSL-only connections
  },
});

export async function POST(request) {
  try {
    // 1. Parse incoming form data
    const { name, email, subject, message } = await request.json();

    // 2. (Optional) Capture the IP address for your DB
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // 3. Insert the submission into the "messages" table in your Neon DB
    const queryText = `
      INSERT INTO messages (name, email, subject, message, ip_address)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id;
    `;
    const values = [name, email, subject, message, ipAddress];
    const result = await pool.query(queryText, values);

    // 4. Return a success response
    return NextResponse.json({ success: true, id: result.rows[0].id });
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json(
      { success: false, error: "Database error" },
      { status: 500 }
    );
  }
}
