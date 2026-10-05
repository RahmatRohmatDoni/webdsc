import { leaderboard } from "@/data/leaderboard";


/* ── Helpers ── */

const top3 = leaderboard.filter((e) => e.rank <= 3);
const rest = leaderboard.filter((e) => e.rank > 3);

const podiumOrder = [
  top3.find((e) => e.rank === 2)!,
  top3.find((e) => e.rank === 1)!,
  top3.find((e) => e.rank === 3)!,
];

const medalColors: Record<number, { ring: string; bg: string; text: string; label: string }> = {
  1: {
    ring: "ring-[#F4B740]",
    bg: "bg-[#F4B740]/10",
    text: "text-[#F4B740]",
    label: "text-[#F4B740]",
  },
  2: {
    ring: "ring-[#A8A29E]",
    bg: "bg-[#A8A29E]/10",
    text: "text-[#A8A29E]",
    label: "text-[#A8A29E]",
  },
  3: {
    ring: "ring-[#E87A2F]",
    bg: "bg-[#E87A2F]/10",
    text: "text-[#E87A2F]",
    label: "text-[#E87A2F]",
  },
};

function Avatar({
  name,
  rank,
  size = "md",
}: {
  name: string;
  rank?: number;
  size?: "lg" | "md" | "sm";
}) {
  const sizeClasses = {
    lg: "w-20 h-20 text-2xl",
    md: "w-14 h-14 text-lg",
    sm: "w-10 h-10 text-sm",
  };

  const medal = rank && rank <= 3 ? medalColors[rank] : null;

  return (
    <div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-semibold select-none shrink-0 ${
        medal
          ? `${medal.bg} ${medal.text} ring-2 ${medal.ring}`
          : "bg-stone-200 dark:bg-stone-800 text-[#57534E] dark:text-[#D6D3D1]"
      }`}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

/* ── Page ── */

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-8">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-left">
          Leaderboard
        </h1>
        <p className="mt-4 text-lg text-[#57534E] dark:text-[#A8A29E] max-w-xl">
          Peringkat anggota berdasarkan poin, partisipasi event, dan kontribusi
          terhadap komunitas.
        </p>
      </section>

      {/* ──────────────────────────────────────
          TOP 3 — PODIUM
         ────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pt-10 pb-20">
          <h2 className="text-2xl font-semibold text-left mb-12">
            3 Besar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {podiumOrder.map((entry) => {
              const medal = medalColors[entry.rank];
              const isFirst = entry.rank === 1;

              return (
                <div
                  key={entry.memberId}
                  className={`border border-[#D6D3D1] dark:border-[#292524] rounded-lg p-6 ${
                    isFirst ? "md:-mt-6 md:pb-10" : ""
                  }`}
                >
                  {/* Rank number */}
                  <p
                    className={`text-5xl font-black tabular-nums ${medal.text} ${
                      isFirst ? "text-6xl" : ""
                    }`}
                  >
                    {entry.rank}
                  </p>

                  <div className="mt-5 flex items-center gap-4">
                    <Avatar
                      name={entry.name}
                      rank={entry.rank}
                      size={isFirst ? "lg" : "md"}
                    />
                    <div className="min-w-0">
                      <h3
                        className={`font-semibold truncate ${
                          isFirst ? "text-xl" : "text-lg"
                        }`}
                      >
                        {entry.name}
                      </h3>
                      <p className={`text-2xl font-bold mt-1 ${medal.label}`}>
                        {entry.points.toLocaleString("id-ID")}{" "}
                        <span className="text-sm font-medium text-[#78716C] dark:text-[#A8A29E]">
                          poin
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-5 flex gap-6 text-sm text-[#78716C] dark:text-[#A8A29E]">
                    <div>
                      <p className="text-xs uppercase tracking-wider mb-0.5">
                        Event
                      </p>
                      <p className="font-semibold text-base text-[#1C1917] dark:text-[#FAFAF9]">
                        {entry.eventsAttended}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider mb-0.5">
                        Kontribusi
                      </p>
                      <p className="font-semibold text-base text-[#1C1917] dark:text-[#FAFAF9]">
                        {entry.contributions}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
      </section>

      <hr className="max-w-5xl mx-auto border-stone-200 dark:border-stone-800" />

      {/* ──────────────────────────────────────
          RANK 4-10 — TABLE
         ────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-semibold text-left mb-10">
            Peringkat 4 — 10
          </h2>

          {/* Table header */}
          <div className="hidden sm:grid sm:grid-cols-12 gap-4 px-4 pb-3 text-xs font-medium uppercase tracking-wider text-[#78716C] dark:text-[#A8A29E] border-b border-stone-200 dark:border-stone-800">
            <div className="col-span-1">#</div>
            <div className="col-span-4">Nama</div>
            <div className="col-span-3 text-right">Poin</div>
            <div className="col-span-2 text-right">Event Dihadiri</div>
            <div className="col-span-2 text-right">Kontribusi</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-stone-100 dark:divide-stone-800/60">
            {rest.map((entry, i) => (
              <div
                key={entry.memberId}
                className={`grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center px-4 py-4 ${
                  i % 2 === 0
                    ? "bg-stone-50/50 dark:bg-stone-900/30"
                    : ""
                }`}
              >
                {/* Rank */}
                <div className="sm:col-span-1">
                  <span className="text-lg font-bold tabular-nums text-[#78716C] dark:text-[#A8A29E]">
                    {entry.rank}
                  </span>
                </div>

                {/* Name + avatar */}
                <div className="sm:col-span-4 flex items-center gap-3">
                  <Avatar name={entry.name} size="sm" />
                  <span className="font-medium truncate">{entry.name}</span>
                </div>

                {/* Points */}
                <div className="sm:col-span-3 sm:text-right">
                  <span className="text-lg font-bold tabular-nums text-[#1C1917] dark:text-[#FAFAF9]">
                    {entry.points.toLocaleString("id-ID")}
                  </span>
                  <span className="sm:hidden text-xs text-[#78716C] dark:text-[#A8A29E] ml-1">
                    poin
                  </span>
                </div>

                {/* Events */}
                <div className="sm:col-span-2 sm:text-right text-sm text-[#57534E] dark:text-[#A8A29E]">
                  <span className="sm:hidden text-xs uppercase tracking-wider mr-1">
                    Event:
                  </span>
                  {entry.eventsAttended}
                </div>

                {/* Contributions */}
                <div className="sm:col-span-2 sm:text-right text-sm text-[#57534E] dark:text-[#A8A29E]">
                  <span className="sm:hidden text-xs uppercase tracking-wider mr-1">
                    Kontribusi:
                  </span>
                  {entry.contributions}
                </div>
              </div>
            ))}
          </div>
      </section>
    </main>
  );
}
