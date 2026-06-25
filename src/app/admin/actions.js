"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

import {
  ADMIN_COOKIE,
  passwordMatches,
  expectedToken,
  isAdminPasswordConfigured,
  isAdminAuthenticated,
} from "../../lib/adminAuth";
import { updateSubmissionStatus } from "../../lib/contactDb";

const ADMIN_PATH = "/admin";

export async function loginAction(_prevState, formData) {
  const password = (formData.get("password") || "").toString().trim();

  // Distinguish "server not configured" from "wrong password" so the admin
  // gets an actionable message instead of an endless incorrect-password loop.
  if (!isAdminPasswordConfigured()) {
    return {
      error:
        "Admin password is not configured on the server. Set ADMIN_DASHBOARD_PASSWORD in the environment.",
    };
  }

  const store = await cookies();

  if (!passwordMatches(password)) {
    // Clear any stale/invalid auth cookie so a bad token can't linger.
    store.delete(ADMIN_COOKIE);
    return { error: "Incorrect password" };
  }

  store.set(ADMIN_COOKIE, expectedToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });
  revalidatePath(ADMIN_PATH);
  return { error: null };
}

export async function logoutAction() {
  const store = await cookies();
  store.delete(ADMIN_COOKIE);
  revalidatePath(ADMIN_PATH);
}

export async function setStatusAction(formData) {
  if (!(await isAdminAuthenticated())) return;
  const id = (formData.get("id") || "").toString();
  const status = (formData.get("status") || "").toString();
  if (!id) return;
  await updateSubmissionStatus(id, status);
  revalidatePath(ADMIN_PATH);
}
