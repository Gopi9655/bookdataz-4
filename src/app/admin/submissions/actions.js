"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

import {
  ADMIN_COOKIE,
  passwordMatches,
  tokenForPassword,
  isAdminAuthenticated,
} from "../../../lib/adminAuth";
import { updateSubmissionStatus } from "../../../lib/contactDb";

const ADMIN_PATH = "/admin/submissions";

export async function loginAction(_prevState, formData) {
  const password = (formData.get("password") || "").toString();
  if (!passwordMatches(password)) {
    return { error: "Incorrect password" };
  }
  const store = await cookies();
  store.set(ADMIN_COOKIE, tokenForPassword(password), {
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
