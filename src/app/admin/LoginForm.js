"use client";

import { useActionState } from "react";
import { loginAction } from "./actions";

const initialState = { error: null };

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-6">
      <div className="w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
          Admin Access
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
          Contact submissions
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Enter the dashboard password to continue.
        </p>

        <form action={formAction} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[color:var(--accent)] focus:bg-white focus:ring-4 focus:ring-[color:var(--accent-tint)]"
              placeholder="••••••••"
            />
          </div>

          {state?.error && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-full bg-[image:var(--accent-grad)] px-6 py-3 font-semibold text-[color:var(--accent-contrast)] shadow-lg shadow-[rgba(var(--shadow-rgb),0.25)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--accent-tint)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
