import Link from "next/link";
import { notFound } from "next/navigation";
import DashboardLoading from "../../loading";
import LoginLoading from "../../login/loading";
import HistoryLoading from "../../history/loading";
import ReportsLoading from "../../reports/loading";
import PaymentsLoading from "../../payments/loading";
import SettingsLoading from "../../settings/loading";
import StaffLoading from "../../staff/loading";
import NewStaffLoading from "../../staff/new/loading";
import EditStaffLoading from "../../staff/[id]/loading";
import ShiftLoading from "../../shifts/[id]/loading";
import ShiftFormLoading from "../../shifts/new/loading";

export const metadata = { title: "Skeletons" };

// Dev only: each route's loading state, held on screen so you can look at
// it properly. Real loads swap it out too fast to see.
const screens = {
  dashboard: DashboardLoading,
  login: LoginLoading,
  history: HistoryLoading,
  reports: ReportsLoading,
  payments: PaymentsLoading,
  settings: SettingsLoading,
  staff: StaffLoading,
  "staff-new": NewStaffLoading,
  "staff-edit": EditStaffLoading,
  shift: ShiftLoading,
  "shift-form": ShiftFormLoading,
} as const;

type Screen = keyof typeof screens;

export default async function SkeletonsPage({
  searchParams,
}: PageProps<"/dev/skeletons">) {
  if (process.env.NODE_ENV === "production") notFound();

  const { screen } = await searchParams;
  const current: Screen =
    typeof screen === "string" && screen in screens
      ? (screen as Screen)
      : "dashboard";
  const Skeleton = screens[current];

  return (
    <div className="pt-4">
      <nav className="mb-4 flex flex-wrap gap-2">
        {(Object.keys(screens) as Screen[]).map((name) => (
          <Link
            key={name}
            href={`/dev/skeletons?screen=${name}`}
            className={`microlabel rounded-[4px] px-3 py-1.5 ${
              name === current
                ? "bg-secondary text-on-secondary"
                : "bg-surface-container-high text-on-surface-variant"
            }`}
          >
            {name}
          </Link>
        ))}
      </nav>
      {/* key remounts the skeleton, so its fade-in plays on every switch */}
      <div key={current} className="border-t border-dashed border-outline-variant">
        <Skeleton />
      </div>
    </div>
  );
}
