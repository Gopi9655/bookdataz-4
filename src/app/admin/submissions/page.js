import { isAdminAuthenticated } from "../../../lib/adminAuth";
import { listSubmissions } from "../../../lib/contactDb";
import LoginForm from "./LoginForm";
import { logoutAction, setStatusAction } from "./actions";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const metadata = {
  title: "Contact submissions — Admin",
  robots: { index: false, follow: false },
};

const statusStyles = {
  new: "border-orange-200 bg-orange-50 text-orange-700",
  read: "border-blue-200 bg-blue-50 text-blue-700",
  archived: "border-slate-200 bg-slate-100 text-slate-600",
};

function formatDate(value) {
  try {
    return new Date(value).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return String(value ?? "");
  }
}

function locationLabel(row) {
  const parts = [row.submitter_city, row.submitter_region, row.submitter_country]
    .map((p) => (p || "").trim())
    .filter(Boolean);
  return parts.length ? parts.join(", ") : "—";
}

export default async function AdminSubmissionsPage() {
  if (!(await isAdminAuthenticated())) {
    return <LoginForm />;
  }

  let submissions = [];
  let loadError = null;
  try {
    submissions = await listSubmissions(200);
  } catch (err) {
    loadError = "Unable to load submissions. Check the database configuration.";
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] px-4 py-10 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              Admin
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
              Contact submissions
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              {submissions.length} {submissions.length === 1 ? "entry" : "entries"}
              , newest first.
            </p>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Sign out
            </button>
          </form>
        </div>

        {loadError && (
          <p className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {loadError}
          </p>
        )}

        {!loadError && submissions.length === 0 && (
          <p className="mt-10 rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center text-slate-500">
            No submissions yet.
          </p>
        )}

        {submissions.length > 0 && (
          <div className="mt-8 space-y-4">
            {submissions.map((row) => (
              <div
                key={row.id}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-semibold text-slate-950">
                        {row.name}
                      </h2>
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize ${
                          statusStyles[row.status] || statusStyles.new
                        }`}
                      >
                        {row.status}
                      </span>
                    </div>
                    <a
                      href={`mailto:${row.email}`}
                      className="mt-0.5 block break-all text-sm text-blue-700 hover:underline"
                    >
                      {row.email}
                    </a>
                  </div>
                  <time className="shrink-0 text-xs font-medium text-slate-500">
                    {formatDate(row.created_at)}
                  </time>
                </div>

                {row.subject && (
                  <p className="mt-3 text-sm font-semibold text-slate-800">
                    {row.subject}
                  </p>
                )}
                <p className="mt-1 whitespace-pre-wrap break-words text-sm leading-6 text-slate-600">
                  {row.message}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-slate-500">
                  <span>📍 {locationLabel(row)}</span>
                  {row.user_agent && (
                    <span className="max-w-full truncate" title={row.user_agent}>
                      🖥 {row.user_agent}
                    </span>
                  )}
                  <span>
                    🛡 captcha: {row.captcha_mode}
                    {row.captcha_success ? " ✓" : ""}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                  {["new", "read", "archived"].map((status) => (
                    <form key={status} action={setStatusAction}>
                      <input type="hidden" name="id" value={row.id} />
                      <input type="hidden" name="status" value={status} />
                      <button
                        type="submit"
                        disabled={row.status === status}
                        className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-semibold capitalize text-slate-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 disabled:cursor-default disabled:opacity-40 disabled:hover:border-slate-300 disabled:hover:bg-white disabled:hover:text-slate-700"
                      >
                        Mark {status}
                      </button>
                    </form>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
