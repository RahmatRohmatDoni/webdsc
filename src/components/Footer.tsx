import Link from "next/link";

const navigasi = [
  { href: "/", label: "Beranda" },
  { href: "/members", label: "Anggota" },
  { href: "/events", label: "Event" },
  { href: "/news", label: "Berita" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/feedback", label: "Feedback" },
] as const;

const divisi = [
  "Web Development",
  "Mobile Development",
  "Machine Learning",
  "UI/UX Design",
  "Cyber Security",
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-[#E7E5E4] dark:border-[#292524] bg-[#FAFAF9] dark:bg-[#1C1917]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand — wider column */}
          <div className="lg:col-span-5">
            <h2 className="text-lg font-semibold tracking-tight text-[#1C1917] dark:text-[#E7E5E4]">
              Developer Student Club
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#78716C] dark:text-[#A8A29E] max-w-sm">
              Komunitas mahasiswa yang berfokus pada pengembangan teknologi,
              kolaborasi proyek, dan berbagi pengetahuan di bidang software
              engineering.
            </p>
          </div>

          {/* Navigasi */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-[#1C1917] dark:text-[#E7E5E4]">
              Navigasi
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {navigasi.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#78716C] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#E7E5E4] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisi */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-[#1C1917] dark:text-[#E7E5E4]">
              Divisi
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {divisi.map((nama) => (
                <li
                  key={nama}
                  className="text-sm text-[#78716C] dark:text-[#A8A29E]"
                >
                  {nama}
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-[#1C1917] dark:text-[#E7E5E4]">
              Kontak
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <a
                  href="mailto:dsc@university.ac.id"
                  className="text-sm text-[#78716C] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#E7E5E4] transition-colors"
                >
                  dsc@university.ac.id
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/dsc.university"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#78716C] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#E7E5E4] transition-colors"
                >
                  @dsc.university
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <hr className="mt-10 mb-6 border-[#E7E5E4] dark:border-[#292524]" />
        <p className="text-xs text-[#A8A29E] dark:text-[#78716C]">
          &copy; 2026 Developer Student Club. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
