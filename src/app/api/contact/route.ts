import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.NEON_DB_URL!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Get IP address from request headers (works on Vercel)
    let ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      undefined;

    // For local dev fallback
    if (!ip || ip === "::1" || ip.startsWith("127.")) {
      ip = ""; // ipapi.co will use the caller's IP if blank
    }

    // Fetch country from ipapi.co
    let country = null;
    try {
      const geoRes = await fetch(`https://ipapi.co/${ip}/country_name/`);
      if (geoRes.ok) {
        country = await geoRes.text();
        country = country.trim();
        if (country === "") country = null;
      }
    } catch (err) {
      country = null; // fallback if API fails
    }

    await sql`
      INSERT INTO enquiries (name, email, subject, message, country)
      VALUES (${name}, ${email}, ${subject || ""}, ${message}, ${country || ""})
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error inserting enquiry:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
