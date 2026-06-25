import { createHash } from "node:crypto";
import { cookies } from "next/headers";

// Lightweight, server-only admin gate. We never store the raw password in the
// cookie — instead a salted hash of it, which we recompute to verify. The
// password and salt live in server env vars and are never sent to the client.

export const ADMIN_COOKIE = "bdz_admin";

// Normalise a secret coming from an env var. Vercel (and copy/paste) commonly
// introduce two problems we defend against here:
//   1. Stray leading/trailing whitespace or newlines.
//   2. A value accidentally saved WITH wrapping quotes, e.g. "p@ss" or 'p@ss'.
// We trim, then strip exactly one matching surrounding quote pair, then trim
// again so the inner value is clean.
function normalizeSecret(raw) {
  let value = (raw ?? "").trim();
  if (value.length >= 2) {
    const first = value[0];
    const last = value[value.length - 1];
    if ((first === '"' && last === '"') || (first === "'" && last === "'")) {
      value = value.slice(1, -1).trim();
    }
  }
  return value;
}

// The configured dashboard password, server-side only and fully normalised.
export function getConfiguredPassword() {
  return normalizeSecret(process.env.ADMIN_DASHBOARD_PASSWORD);
}

export function isAdminPasswordConfigured() {
  return getConfiguredPassword().length > 0;
}

function getSalt() {
  return normalizeSecret(process.env.ADMIN_IP_HASH_SALT) || "bdz-admin";
}

function tokenForSecret(secret) {
  return createHash("sha256").update(`${getSalt()}:${secret}`).digest("hex");
}

// Cookie token for the currently-configured password. The login flow stores
// exactly this value, so verification is a constant-string comparison.
export function expectedToken() {
  return tokenForSecret(getConfiguredPassword());
}

// True when the supplied input (trimmed) matches the configured password.
// Returns false when no password is configured, so callers can distinguish the
// "wrong password" case from the "not configured" case via isAdminPasswordConfigured().
export function passwordMatches(input) {
  const configured = getConfiguredPassword();
  if (!configured) return false;
  const candidate = (input ?? "").toString().trim();
  return candidate === configured;
}

export async function isAdminAuthenticated() {
  // No configured password ⇒ never authenticated (and no false "logged in").
  if (!isAdminPasswordConfigured()) return false;
  const store = await cookies();
  const value = store.get(ADMIN_COOKIE)?.value;
  if (!value) return false;
  return value === expectedToken();
}
