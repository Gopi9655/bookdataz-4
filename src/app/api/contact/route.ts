import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.NEON_DB_URL!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await sql`
      INSERT INTO enquiries (name, email, subject, message)
      VALUES (${name}, ${email}, ${subject || ""}, ${message})
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
