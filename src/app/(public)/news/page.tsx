import { news } from "@/data/news";
import Link from "next/link";


/* ── Helpers ── */

const categoryBorder: Record<string, string> = {
  Announcement: "border-l-[#D42B2B]",
  Recap: "border-l-[#E87A2F]",
  Tutorial: "border-l-[#F4B740]",
  Achievement: "border-l-[#22C55E]",
};

const categoryLabel: Record<string, string> = {
  Announcement: "Pengumuman",
  Recap: "Rekap",
  Tutorial: "Tutorial",
  Achievement: "Pencapaian",
};

function formatTanggal(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/* sort newest first */
const sorted = [...news].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
const featured = sorted[0];
const rest = sorted.slice(1);

/* ── Page ── */

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-8">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-left">
          Berita
        </h1>
        <p className="mt-4 text-lg text-[#57534E] dark:text-[#A8A29E] max-w-xl">
          Pengumuman, rekap kegiatan, tutorial, dan pencapaian dari komunitas
          Developer Student Club.
        </p>
      </section>

      {/* ──────────────────────────────────────
          ARTIKEL UTAMA
         ────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pt-6 pb-16">
          <Link
            href={`/news/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Image placeholder */}
            <div className="lg:col-span-8 aspect-[16/9] rounded-lg bg-[#E7E5E4] dark:bg-[#1C1917] flex items-center justify-center overflow-hidden">
              <span className="text-sm text-[#A8A29E] dark:text-[#57534E] select-none">
                {featured.image}
              </span>
            </div>

            {/* Text */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <span
                className={`text-xs font-medium uppercase tracking-wider text-[#78716C] dark:text-[#A8A29E] border-l-2 ${categoryBorder[featured.category]} pl-2`}
              >
                {categoryLabel[featured.category]}
              </span>

              <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight group-hover:text-[#D42B2B] dark:group-hover:text-[#E87A2F] transition-colors">
                {featured.title}
              </h2>

              <p className="mt-4 text-[#57534E] dark:text-[#A8A29E] leading-relaxed line-clamp-3">
                {featured.excerpt}
              </p>

              <div className="mt-6 flex items-center gap-3 text-sm text-[#78716C] dark:text-[#A8A29E]">
                <span className="font-medium text-[#1C1917] dark:text-[#FAFAF9]">
                  {featured.author}
                </span>
                <span aria-hidden="true">&middot;</span>
                <time dateTime={featured.date}>
                  {formatTanggal(featured.date)}
                </time>
              </div>
            </div>
          </Link>
      </section>

      <hr className="max-w-5xl mx-auto border-[#E7E5E4] dark:border-[#292524]" />

      {/* ──────────────────────────────────────
          ARTIKEL LAINNYA — horizontal rows
         ────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-left mb-10">
            Artikel Lainnya
          </h2>

        <div className="space-y-0 divide-y divide-[#E7E5E4] dark:divide-[#292524]">
          {rest.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.slug}`}
              className="group flex flex-col sm:flex-row gap-5 sm:gap-8 py-8 first:pt-0"
            >
              {/* Thumbnail */}
              <div className="sm:w-56 sm:shrink-0 aspect-[16/10] rounded-md bg-[#E7E5E4] dark:bg-[#1C1917] flex items-center justify-center overflow-hidden">
                <span className="text-xs text-[#A8A29E] dark:text-[#57534E] select-none">
                  {article.image}
                </span>
              </div>

              {/* Text */}
              <div className="flex-1 flex flex-col justify-center min-w-0">
                <span
                  className={`text-xs font-medium uppercase tracking-wider text-[#78716C] dark:text-[#A8A29E] border-l-2 ${categoryBorder[article.category]} pl-2 w-fit`}
                >
                  {categoryLabel[article.category]}
                </span>

                <h3 className="mt-2 text-xl font-semibold tracking-tight group-hover:text-[#D42B2B] dark:group-hover:text-[#E87A2F] transition-colors">
                  {article.title}
                </h3>

                <p className="mt-2 text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="mt-3 flex items-center gap-3 text-sm text-[#78716C] dark:text-[#A8A29E]">
                  <span className="font-medium text-[#1C1917] dark:text-[#FAFAF9]">
                    {article.author}
                  </span>
                  <span aria-hidden="true">&middot;</span>
                  <time dateTime={article.date}>
                    {formatTanggal(article.date)}
                  </time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
