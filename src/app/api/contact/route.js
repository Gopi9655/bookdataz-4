import { NextResponse } from "next/server";
import { createHash } from "node:crypto";

import { insertSubmission } from "../../../lib/contactDb";
import { verifyCaptcha, getCaptchaMode } from "../../../lib/captcha";

// This route writes to a database, so it must run on the Node.js runtime and
// never be statically cached.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort in-memory rate limit. On serverless this only covers a single
// warm instance, so it's a light spam dampener rather than a hard guarantee.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const rateBuckets = new Map();

function isRateLimited(key) {
  if (!key) return false;
  const now = Date.now();
  const hits = (rateBuckets.get(key) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  hits.push(now);
  rateBuckets.set(key, hits);
  return hits.length > RATE_LIMIT_MAX;
}

function hashIp(ip) {
  if (!ip) return null;
  const salt = process.env.ADMIN_IP_HASH_SALT || "";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

function getClientIp(req) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "";
}

export async function POST(req) {
  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Invalid request body" },
        { status: 400 }
      );
    }

    const name = (body.name ?? "").toString().trim();
    const email = (body.email ?? "").toString().trim();
    const subject = (body.subject ?? "").toString().trim();
    const message = (body.message ?? "").toString().trim();
    const honeypot = (body.company ?? "").toString().trim(); // hidden field
    const captchaToken = body.captchaToken ?? body.recaptchaToken ?? null;

    // Honeypot: real users never fill this. Pretend success to not tip off bots.
    if (honeypot) {
      return NextResponse.json({ ok: true, id: null });
    }

    // Validation
    if (!name) {
      return NextResponse.json(
        { ok: false, error: "Name is required" },
        { status: 400 }
      );
    }
    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { ok: false, error: "A valid email is required" },
        { status: 400 }
      );
    }
    if (!message) {
      return NextResponse.json(
        { ok: false, error: "Message is required" },
        { status: 400 }
      );
    }

    const ip = getClientIp(req);
    const ipHash = hashIp(ip);

    if (isRateLimited(ipHash || ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again shortly." },
        { status: 429 }
      );
    }

    // Captcha (off by default; recaptcha when CONTACT_CAPTCHA_MODE=recaptcha)
    const captcha = await verifyCaptcha(captchaToken, ip);
    if (!captcha.ok) {
      return NextResponse.json(
        { ok: false, error: captcha.error || "Captcha verification failed" },
        { status: 400 }
      );
    }

    const id = await insertSubmission({
      name,
      email,
      subject: subject || null,
      message,
      captchaSuccess: captcha.success,
      captchaMode: captcha.mode ?? getCaptchaMode(),
      captchaHostname: captcha.hostname ?? null,
      country: req.headers.get("x-vercel-ip-country") || null,
      region: req.headers.get("x-vercel-ip-country-region") || null,
      city: req.headers.get("x-vercel-ip-city") || null,
      ipHash,
      userAgent: req.headers.get("user-agent") || null,
    });

    return NextResponse.json({ ok: true, id });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
