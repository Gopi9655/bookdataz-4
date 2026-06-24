// Captcha abstraction so the contact backend can switch between "off" (no
// verification, current state) and "recaptcha" (server-side Google verify)
// purely via the CONTACT_CAPTCHA_MODE env var — no code change required later.

export function getCaptchaMode() {
  const mode = (process.env.CONTACT_CAPTCHA_MODE || "off").toLowerCase();
  return mode === "recaptcha" ? "recaptcha" : "off";
}

/**
 * Verify a captcha token according to the active mode.
 * Returns { ok, success, hostname, error }.
 * - mode "off": always ok, success=false (no captcha was performed).
 * - mode "recaptcha": requires a token and a valid Google response.
 */
export async function verifyCaptcha(token, remoteIp) {
  const mode = getCaptchaMode();

  if (mode === "off") {
    return { ok: true, success: false, hostname: null, mode };
  }

  // mode === "recaptcha"
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return { ok: false, error: "Captcha is not configured", mode };
  }
  if (!token) {
    return { ok: false, error: "Captcha verification required", mode };
  }

  try {
    const params = new URLSearchParams();
    params.append("secret", secret);
    params.append("response", token);
    if (remoteIp) params.append("remoteip", remoteIp);

    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    const data = await res.json();

    if (!data.success) {
      return { ok: false, error: "Captcha verification failed", mode };
    }
    return {
      ok: true,
      success: true,
      hostname: data.hostname ?? null,
      mode,
    };
  } catch (err) {
    return { ok: false, error: "Captcha verification error", mode };
  }
}
