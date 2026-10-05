import Link from "next/link";
import { notFound } from "next/navigation";
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

/* ── Page ── */

export default async function EventDetailPage(
  props: PageProps<"/events/[id]">
) {
  const { id } = await props.params;
  const event = events.find((e) => e.id === parseInt(id, 10));

  if (!event) notFound();

  const pct =
    event.maxAttendees > 0
      ? Math.min((event.attendees / event.maxAttendees) * 100, 100)
      : 0;

  return (
    <main className="min-h-screen">
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        {/* Back link */}
        <Link
          href="/events"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#78716C] dark:text-[#A8A29E] hover:text-[#D42B2B] dark:hover:text-[#D42B2B] transition-colors"
        >
          <svg
            viewBox="0 0 16 16"
            className="w-4 h-4 fill-current"
            aria-hidden="true"
          >
            <path d="M7.78 12.53a.75.75 0 01-1.06 0L3.22 9.03a.75.75 0 010-1.06l3.5-3.5a.75.75 0 111.06 1.06L5.56 7.75H12a.75.75 0 010 1.5H5.56l2.22 2.22a.75.75 0 010 1.06z" />
          </svg>
          Kembali ke Event
        </Link>

        {/* Image placeholder */}
        <div className="mt-8 aspect-[16/9] w-full rounded-lg bg-stone-200 dark:bg-stone-800" />

        {/* Title */}
        <h1 className="mt-10 text-4xl sm:text-5xl font-bold tracking-tight">
          {event.title}
        </h1>

        {/* Metadata row */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#57534E] dark:text-[#A8A29E]">
          <time dateTime={event.date}>{formatDate(event.date)}</time>
          <span>{event.time}</span>
          <span>{event.location}</span>

          {/* Status */}
          <span className="inline-flex items-center gap-1.5">
            <span
              className={`w-2 h-2 rounded-full ${statusDotColor(event.status)}`}
            />
            {statusLabel(event.status)}
          </span>
        </div>

        <hr className="my-10" />

        {/* Description */}
        <div className="max-w-prose text-base leading-relaxed text-[#57534E] dark:text-[#A8A29E] space-y-4">
          <p>{event.description}</p>
        </div>

        <hr className="my-10" />

        {/* Attendee progress */}
        <div className="max-w-sm">
          <p className="text-sm font-medium text-[#1C1917] dark:text-[#FAFAF9]">
            Peserta
          </p>
          <div className="mt-3 flex items-center justify-between text-sm text-[#78716C] dark:text-[#A8A29E]">
            <span>
              {event.attendees} / {event.maxAttendees} peserta
            </span>
            <span>{Math.round(pct)}%</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full rounded-full bg-stone-200 dark:bg-stone-800">
            <div
              className="h-full rounded-full bg-[#D42B2B]"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
