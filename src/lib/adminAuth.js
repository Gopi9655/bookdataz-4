import { createHash } from "node:crypto";
import { cookies } from "next/headers";

// Lightweight, server-only admin gate. We never store the raw password in the
// cookie — instead a salted hash of it, which we recompute to verify. The
// password and salt live in server env vars and are never sent to the client.

export const ADMIN_COOKIE = "bdz_admin";

function expectedToken() {
  const password = process.env.ADMIN_DASHBOARD_PASSWORD || "";
  const salt = process.env.ADMIN_IP_HASH_SALT || "bdz-admin";
  return createHash("sha256").update(`${salt}:${password}`).digest("hex");
}

export function tokenForPassword(password) {
  const salt = process.env.ADMIN_IP_HASH_SALT || "bdz-admin";
  return createHash("sha256").update(`${salt}:${password}`).digest("hex");
}

export function passwordMatches(password) {
  const configured = process.env.ADMIN_DASHBOARD_PASSWORD || "";
  return Boolean(configured) && password === configured;
}

export async function isAdminAuthenticated() {
  const store = await cookies();
  const value = store.get(ADMIN_COOKIE)?.value;
  if (!value) return false;
  return value === expectedToken();
}
