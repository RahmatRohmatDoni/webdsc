import Link from "next/link";
import { events } from "@/data/events";
import type { Event } from "@/data/events";

/* ── Helpers ── */

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function statusLabel(status: Event["status"]) {
  const map = {
    completed: "Selesai",
    ongoing: "Berlangsung",
    upcoming: "Akan Datang",
  } as const;
  return map[status];
}

function statusDotColor(status: Event["status"]) {
  if (status === "ongoing") return "bg-green-500";
  if (status === "upcoming") return "bg-orange-400";
  return "bg-stone-500 dark:bg-stone-600";
}

/* ── Derived lists ── */

const activeEvents = events.filter(
  (e) => e.status === "upcoming" || e.status === "ongoing"
);
const completedEvents = events.filter((e) => e.status === "completed");

/* ── Attendee Bar ── */

function AttendeeBar({
  attendees,
  max,
}: {
  attendees: number;
  max: number;
}) {
  const pct = max > 0 ? Math.min((attendees / max) * 100, 100) : 0;

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-xs text-[#78716C] dark:text-[#A8A29E]">
        <span>{attendees} / {max} peserta</span>
        <span>{Math.round(pct)}%</span>
      </div>
      <div className="mt-1.5 h-1 w-full rounded-full bg-stone-200 dark:bg-stone-800">
        <div
          className="h-full rounded-full bg-[#D42B2B]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/* ── Page ── */

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-8">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-left">
          Event
        </h1>
        <p className="mt-4 text-lg text-[#57534E] dark:text-[#A8A29E] max-w-xl">
          Workshop, hackathon, study group — semua kegiatan DSC dari yang
          akan datang sampai yang sudah selesai.
        </p>
      </section>

      {/* ──────────────────────────────────────
          UPCOMING & ONGOING
         ────────────────────────────────────── */}
      {activeEvents.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 pt-10 pb-20">
            <h2 className="text-2xl font-semibold text-left mb-10">
              Akan Datang &amp; Berlangsung
            </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeEvents.map((ev) => {
              const dateObj = new Date(ev.date);
              const day = dateObj.getDate();
              const month = dateObj.toLocaleDateString("id-ID", {
                month: "short",
              });

              return (
                <Link
                  key={ev.id}
                  href={`/events/${ev.id}`}
                  className="group block rounded-lg border border-[#D6D3D1] dark:border-[#292524] p-6 transition-colors hover:border-[#D42B2B] dark:hover:border-[#D42B2B]"
                >
                  {/* Top row: date block + status */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-5">
                      {/* Date block */}
                      <div className="flex flex-col items-center leading-none">
                        <span className="text-3xl font-bold tabular-nums text-[#1C1917] dark:text-[#FAFAF9]">
                          {day}
                        </span>
                        <span className="mt-0.5 text-xs font-medium uppercase tracking-wider text-[#78716C] dark:text-[#A8A29E]">
                          {month}
                        </span>
                      </div>

                      {/* Title & location */}
                      <div className="min-w-0">
                        <h3 className="text-xl font-semibold leading-snug text-[#1C1917] dark:text-[#FAFAF9] group-hover:text-[#D42B2B] dark:group-hover:text-[#D42B2B]">
                          {ev.title}
                        </h3>
                        <p className="mt-1 text-sm text-[#78716C] dark:text-[#A8A29E]">
                          {ev.location}
                        </p>
                      </div>
                    </div>

                    {/* Status dot + label */}
                    <div className="flex items-center gap-1.5 shrink-0 mt-1">
                      <span
                        className={`w-2 h-2 rounded-full ${statusDotColor(ev.status)}`}
                      />
                      <span className="text-xs font-medium text-[#78716C] dark:text-[#A8A29E]">
                        {statusLabel(ev.status)}
                      </span>
                    </div>
                  </div>

                  {/* Time */}
                  <p className="mt-4 text-sm text-[#57534E] dark:text-[#A8A29E]">
                    {ev.time}
                  </p>

                  {/* Description snippet */}
                  <p className="mt-3 text-sm leading-relaxed text-[#78716C] dark:text-[#A8A29E] line-clamp-2">
                    {ev.description}
                  </p>

                  {/* Attendee bar */}
                  <AttendeeBar attendees={ev.attendees} max={ev.maxAttendees} />
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <hr className="max-w-5xl mx-auto" />

      {/* ──────────────────────────────────────
          COMPLETED — compact list
         ────────────────────────────────────── */}
      {completedEvents.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-semibold text-left mb-8">
              Sudah Selesai
            </h2>

          {/* Column headers */}
          <div className="hidden sm:grid sm:grid-cols-12 gap-4 text-xs font-medium uppercase tracking-wider text-[#78716C] dark:text-[#A8A29E] pb-3 border-b border-[#E7E5E4] dark:border-[#292524]">
            <span className="sm:col-span-3">Tanggal</span>
            <span className="sm:col-span-5">Kegiatan</span>
            <span className="sm:col-span-2">Lokasi</span>
            <span className="sm:col-span-2 text-right">Peserta</span>
          </div>

          <div className="divide-y divide-[#E7E5E4] dark:divide-[#292524]">
            {completedEvents.map((ev) => (
              <Link
                key={ev.id}
                href={`/events/${ev.id}`}
                className="group block py-4 sm:grid sm:grid-cols-12 sm:gap-4 sm:items-baseline"
              >
                {/* Date */}
                <span className="text-sm tabular-nums text-[#78716C] dark:text-[#A8A29E] sm:col-span-3">
                  {formatDate(ev.date)}
                </span>

                {/* Title */}
                <span className="block mt-1 sm:mt-0 text-base font-medium text-[#1C1917] dark:text-[#FAFAF9] group-hover:text-[#D42B2B] dark:group-hover:text-[#D42B2B] sm:col-span-5">
                  {ev.title}
                </span>

                {/* Location */}
                <span className="block mt-1 sm:mt-0 text-sm text-[#78716C] dark:text-[#A8A29E] sm:col-span-2">
                  {ev.location}
                </span>

                {/* Attendees */}
                <span className="block mt-1 sm:mt-0 text-sm tabular-nums text-[#78716C] dark:text-[#A8A29E] sm:col-span-2 sm:text-right">
                  {ev.attendees} / {ev.maxAttendees}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
