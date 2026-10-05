import { news } from "@/data/news";
import Link from "next/link";
import { notFound } from "next/navigation";


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

/* ── Page ── */

export default async function NewsDetailPage(
  props: PageProps<"/news/[slug]">
) {
  const { slug } = await props.params;

  const article = news.find((n) => n.slug === slug);
  if (!article) notFound();

  const related = news
    .filter((n) => n.category === article.category && n.id !== article.id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const paragraphs = article.content.split("\n\n");

  return (
    <main className="min-h-screen">
      <article className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        {/* Back link */}
        <Link
          href="/news"
          className="inline-flex items-center gap-1.5 text-sm text-[#78716C] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#FAFAF9] transition-colors mb-10"
        >
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M9.78 4.22a.75.75 0 010 1.06L7.06 8l2.72 2.72a.75.75 0 11-1.06 1.06L5.47 8.53a.75.75 0 010-1.06l3.25-3.25a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
          Kembali ke Berita
        </Link>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
          {article.title}
        </h1>

        {/* Meta row */}
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <span className="font-medium text-[#1C1917] dark:text-[#FAFAF9]">
            {article.author}
          </span>
          <span className="text-[#A8A29E] dark:text-[#57534E]" aria-hidden="true">
            &middot;
          </span>
          <time
            dateTime={article.date}
            className="text-[#78716C] dark:text-[#A8A29E]"
          >
            {formatTanggal(article.date)}
          </time>
          <span className="text-[#A8A29E] dark:text-[#57534E]" aria-hidden="true">
            &middot;
          </span>
          <span
            className={`border-l-2 ${categoryBorder[article.category]} pl-2 text-xs font-medium uppercase tracking-wider text-[#78716C] dark:text-[#A8A29E]`}
          >
            {categoryLabel[article.category]}
          </span>
        </div>

        {/* Image placeholder */}
        <div className="mt-10 aspect-[16/9] rounded-lg bg-[#E7E5E4] dark:bg-[#1C1917] flex items-center justify-center">
          <span className="text-sm text-[#A8A29E] dark:text-[#57534E] select-none">
            {article.image}
          </span>
        </div>

        {/* Content */}
          <div className="mt-12 space-y-5 text-[#292524] dark:text-[#D6D3D1] leading-relaxed text-base sm:text-lg">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

        {/* Related articles */}
        {related.length > 0 && (
          <>
            <hr className="my-16 border-[#E7E5E4] dark:border-[#292524]" />

              <h2 className="text-xl font-semibold mb-8">
                Artikel Terkait
              </h2>

              <div className="space-y-6">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/news/${r.slug}`}
                    className="group flex items-baseline justify-between gap-4 py-2"
                  >
                    <h3 className="text-base font-medium group-hover:text-[#D42B2B] dark:group-hover:text-[#E87A2F] transition-colors">
                      {r.title}
                    </h3>
                    <time
                      dateTime={r.date}
                      className="text-sm text-[#78716C] dark:text-[#A8A29E] shrink-0"
                    >
                      {formatTanggal(r.date)}
                    </time>
                  </Link>
                ))}
              </div>
          </>
        )}
      </article>
    </main>
  );
}
