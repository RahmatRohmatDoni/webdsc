import Image from "next/image";
import Link from "next/link";

import { events } from "@/data/events";
import { news } from "@/data/news";

const divisions = [
  { name: "Web Development", focus: "Frontend & backend modern — React, Next.js, Node, API design" },
  { name: "Mobile Development", focus: "Android & cross-platform — Kotlin, Flutter, React Native" },
  { name: "UI/UX Design", focus: "Research, wireframing, prototyping, design systems di Figma" },
  { name: "Data Science", focus: "Analisis data, machine learning, visualisasi, Python & TensorFlow" },
  { name: "Cloud Computing", focus: "Infrastructure, DevOps, GCP, container orchestration" },
  { name: "Game Development", focus: "Unity, Godot, game design, physics, dan interactive media" },
] as const;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function statusLabel(status: "completed" | "ongoing" | "upcoming") {
  const map = {
    completed: "Selesai",
    ongoing: "Berlangsung",
    upcoming: "Akan Datang",
  } as const;
  return map[status];
}

export default function HomePage() {
  const latestEvents = [...events].reverse().slice(0, 3);
  const sortedNews = [...news].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const featuredNews = sortedNews[0];
  const sideNews = sortedNews.slice(1, 4);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:px-12 lg:px-20 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left — copy */}
            <div className="lg:col-span-7">
              <p className="text-sm font-medium tracking-widest text-stone-500 uppercase dark:text-stone-400">
                Developer Student Club
              </p>

              <h1 className="mt-5 text-5xl leading-[1.08] font-bold tracking-tight text-stone-900 sm:text-6xl lg:text-7xl dark:text-stone-100">
                Satu Komunitas,{" "}
                <br />
                Sejuta <span className="text-[#D42B2B]">Baris Kode.</span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-600 dark:text-stone-400">
                Komunitas mahasiswa yang menulis kode bukan cuma buat nilai —
                tapi buat produk, eksperimen, dan portfolio yang bisa dibanggakan.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/events"
                  className="inline-flex h-12 items-center rounded-lg bg-[#D42B2B] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#b82424]"
                >
                  Lihat Event
                </Link>
                <Link
                  href="/feedback?tab=daftar"
                  className="inline-flex h-12 items-center rounded-lg border border-stone-300 px-7 text-sm font-semibold text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-50 dark:border-stone-700 dark:text-stone-300 dark:hover:border-stone-500 dark:hover:bg-stone-800/40"
                >
                  Gabung Sekarang
                </Link>
              </div>
            </div>

            {/* Right — logo */}
            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <Image
                src="/logo-dsc.png"
                alt="Logo DSC"
                width={380}
                height={380}
                preload
                className="w-64 sm:w-80 lg:w-[380px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="border-t border-stone-200 px-6 py-24 md:px-12 lg:px-20 lg:py-32 dark:border-stone-800">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
              {/* Left — narrow label column */}
              <div className="lg:col-span-4">
                <span className="text-xs font-semibold tracking-widest text-[#E87A2F] uppercase">
                  Tentang Kami
                </span>
                <h2 className="mt-4 text-3xl font-bold leading-snug text-stone-900 sm:text-4xl dark:text-stone-100">
                  Bukan sekadar klub coding.
                </h2>
              </div>

              {/* Right — long-form editorial */}
              <div className="space-y-6 text-base leading-relaxed text-stone-600 lg:col-span-8 lg:text-lg dark:text-stone-400">
                <p>
                  DSC dimulai dari sekelompok kecil mahasiswa yang muak dengan
                  tugas kuliah tanpa konteks dunia nyata. Kami mulai ngobrol
                  tentang teknologi, lalu bikin project bareng, lalu tanpa sadar
                  sudah jadi komunitas.
                </p>
                <p>
                  Sekarang, DSC jadi tempat di mana kamu bisa belajar stack baru
                  lewat workshop, adu ide di hackathon, atau cuma nongkrong sambil
                  review pull request orang lain. Tidak ada hierarki — yang ada
                  cuma orang-orang yang sama-sama mau berkembang.
                </p>
                <p className="font-medium text-stone-800 dark:text-stone-200">
                  Kamu tidak perlu jago dulu untuk gabung. Kamu perlu gabung supaya
                  bisa jago.
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* ─── DIVISIONS ─── */}
      <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl dark:text-stone-100">
              6 Divisi, Satu Tujuan
            </h2>
            <p className="mt-3 max-w-md text-stone-500 dark:text-stone-400">
              Pilih jalurmu. Pindah kapan saja. Kolaborasi lintas divisi
              didorong, bukan cuma diizinkan.
            </p>

            <hr className="my-10 border-stone-200 dark:border-stone-800" />

          <div className="divide-y divide-stone-200 dark:divide-stone-800">
            {divisions.map((div, i) => (
              <div
                key={div.name}
                className="grid items-baseline gap-2 py-5 sm:grid-cols-12 sm:gap-6"
              >
                <span className="text-sm tabular-nums text-stone-400 sm:col-span-1 dark:text-stone-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-semibold text-stone-900 sm:col-span-4 dark:text-stone-100">
                  {div.name}
                </span>
                <span className="text-stone-500 sm:col-span-7 dark:text-stone-400">
                  {div.focus}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EVENTS ─── */}
      <section className="bg-[#0C0A09] px-6 py-24 text-[#E7E5E4] md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs font-semibold tracking-widest text-[#F4B740] uppercase">
                  Event
                </span>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  Yang Terjadi &amp; Akan Datang
                </h2>
              </div>
              <Link
                href="/events"
                className="self-start text-sm font-medium text-[#E87A2F] underline underline-offset-4 transition-colors hover:text-[#F4B740] sm:self-auto"
              >
                Semua event &rarr;
              </Link>
            </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestEvents.map((ev) => (
              <article
                key={ev.id}
                className="flex flex-col justify-between rounded-lg border border-stone-800 p-6"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs text-stone-500">
                    <time dateTime={ev.date}>{formatDate(ev.date)}</time>
                    <span
                      className={`rounded-sm px-1.5 py-0.5 font-medium ${
                        ev.status === "upcoming"
                          ? "bg-[#D42B2B]/20 text-[#D42B2B]"
                          : ev.status === "ongoing"
                            ? "bg-[#F4B740]/20 text-[#F4B740]"
                            : "bg-stone-800 text-stone-500"
                      }`}
                    >
                      {statusLabel(ev.status)}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-white">
                    {ev.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-stone-500">{ev.location}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWS ─── */}
      <section className="border-t border-stone-200 px-6 py-24 md:px-12 lg:px-20 lg:py-32 dark:border-stone-800">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold tracking-widest text-stone-400 uppercase dark:text-stone-500">
              Berita &amp; Tulisan
            </span>
            <h2 className="mt-3 text-3xl font-bold text-stone-900 sm:text-4xl dark:text-stone-100">
              Dari Dalam Komunitas
            </h2>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Featured — large card */}
            <div className="lg:col-span-7">
              <Link href={`/news/${featuredNews.slug}`} className="group block">
                <div className="aspect-[16/9] overflow-hidden rounded-lg bg-stone-100 dark:bg-stone-800">
                  <Image
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    width={800}
                    height={450}
                    preload
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <span className="mt-5 inline-block text-xs font-medium tracking-wide text-[#E87A2F] uppercase">
                  {featuredNews.category}
                </span>
                <h3 className="mt-2 text-2xl font-bold leading-snug text-stone-900 group-hover:text-[#D42B2B] sm:text-3xl dark:text-stone-100 dark:group-hover:text-[#D42B2B]">
                  {featuredNews.title}
                </h3>
                <p className="mt-3 max-w-lg text-stone-500 dark:text-stone-400">
                  {featuredNews.excerpt}
                </p>
                <p className="mt-3 text-sm text-stone-400 dark:text-stone-600">
                  {featuredNews.author} · {formatDate(featuredNews.date)}
                </p>
              </Link>
            </div>

            {/* Side list — smaller items */}
            <div className="lg:col-span-5">
              <div className="divide-y divide-stone-200 dark:divide-stone-800">
                {sideNews.map((article) => (
                  <Link
                    key={article.id}
                    href={`/news/${article.slug}`}
                    className="group block py-6 first:pt-0"
                  >
                    <span className="text-xs font-medium tracking-wide text-stone-400 uppercase dark:text-stone-600">
                      {article.category}
                    </span>
                    <h3 className="mt-1.5 text-lg font-semibold leading-snug text-stone-900 group-hover:text-[#D42B2B] dark:text-stone-100 dark:group-hover:text-[#D42B2B]">
                      {article.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-stone-500 dark:text-stone-400">
                      {article.excerpt}
                    </p>
                    <p className="mt-2 text-xs text-stone-400 dark:text-stone-600">
                      {article.author} · {formatDate(article.date)}
                    </p>
                  </Link>
                ))}
              </div>

              <Link
                  href="/news"
                  className="mt-8 inline-block text-sm font-medium text-[#D42B2B] underline underline-offset-4 hover:text-[#b82424]"
                >
                  Semua tulisan &rarr;
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA JOIN ─── */}
      <section className="border-t border-stone-200 px-6 py-24 md:px-12 lg:px-20 lg:py-32 dark:border-stone-800">
        <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold text-stone-900 sm:text-5xl dark:text-stone-100">
              Mulai dari sini.
            </h2>
            <p className="mt-4 max-w-md text-lg text-stone-500 dark:text-stone-400">
              Isi formulir singkat, pilih divisi, dan langsung masuk ke grup —
              tidak ada tes, tidak ada interview panjang.
            </p>
            <Link
              href="/feedback?tab=daftar"
              className="mt-8 inline-flex h-12 items-center rounded-lg bg-[#D42B2B] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#b82424]"
            >
              Daftar Sekarang
            </Link>
        </div>
      </section>
    </>
  );
}
