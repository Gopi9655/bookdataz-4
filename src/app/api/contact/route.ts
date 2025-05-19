import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.NEON_DB_URL);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get IP address (App Router/Edge compatible)
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "";

    // Use geo API to get country
    let country = "";
    if (ip && ip !== "127.0.0.1" && ip !== "::1") {
      try {
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
        const geoData = await geoRes.json();
        country = geoData.country_name || "";
      } catch (geoErr) {
        country = "";
      }
    }

    await sql`
      INSERT INTO enquiries (name, email, subject, message, country)
      VALUES (${name}, ${email}, ${subject || ""}, ${message}, ${country})
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error inserting enquiry:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
