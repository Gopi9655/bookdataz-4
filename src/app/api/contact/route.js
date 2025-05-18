import { NextResponse } from "next/server";
import pkg from "pg";

const { Pool } = pkg;
const connectionString = process.env.NEON_DB_URL;




const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Extract headers
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;
    const userAgent = request.headers.get("user-agent") || null;

    // Fetch geolocation info
    let geo = {
      city: null,
      region: null,
      country_name: null,
    };

    try {
      if (ip && ip !== "127.0.0.1" && ip !== "::1") {
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
        if (geoRes.ok) {
          const data = await geoRes.json();
          geo.city = data.city || null;
          geo.region = data.region || null;
          geo.country_name = data.country_name || null;
        }
      }
    } catch (err) {
      console.warn("Geolocation lookup failed:", err.message);
    }

    const client = await pool.connect();
    try {
      const query = `
        INSERT INTO contacts (name, email, subject, message, ip_address, country, region, city, user_agent)
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
    } catch (err) {
      console.error("Database insert error:", err);
      return NextResponse.json(
        { success: false, error: "Database error" },
        { status: 500 }
      );
    } finally {
      client.release();
    }
  } catch (err) {
    console.error("Unhandled error:", err);
    return NextResponse.json(
      { success: false, error: "Request error" },
      { status: 400 }
    );
  }
}

export const config = {
  runtime: 'nodejs',
};

