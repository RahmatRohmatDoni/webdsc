import { members } from "@/data/members";
import type { Member } from "@/data/members";


/* ── Helpers ── */

const coreTeam = members.filter((m) => m.division === "Core Team");
const heads = members.filter((m) => m.role === "Head of Division");
const staff = members.filter((m) => m.role === "Staff");

const roleLabelMap: Record<string, string> = {
  Ketua: "Ketua",
  "Wakil Ketua": "Wakil Ketua",
  Sekretaris: "Sekretaris",
  Bendahara: "Bendahara",
};

/** Deterministic bg tones per index so each avatar feels slightly different. */
const avatarBgs = [
  "bg-stone-200 dark:bg-stone-800",
  "bg-stone-300 dark:bg-stone-700",
  "bg-amber-100 dark:bg-amber-900/40",
  "bg-orange-100 dark:bg-orange-900/30",
  "bg-red-100 dark:bg-red-900/20",
  "bg-yellow-100 dark:bg-yellow-900/30",
];

function avatarBg(index: number) {
  return avatarBgs[index % avatarBgs.length];
}

/* ── Social Icons (inline SVG, small) ── */

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 fill-current"
      aria-label="GitHub"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.09.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 fill-current"
      aria-label="Instagram"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6zm4.75-2.25a.75.75 0 110 1.5.75.75 0 010-1.5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 fill-current"
      aria-label="LinkedIn"
    >
      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function SocialLinks({ socials }: { socials: Member["socials"] }) {
  return (
    <span className="inline-flex items-center gap-3 text-[#78716C] dark:text-[#A8A29E]">
      {socials.github && (
        <a
          href={`https://github.com/${socials.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#1C1917] dark:hover:text-[#FAFAF9] transition-colors"
        >
          <GitHubIcon />
        </a>
      )}
      {socials.instagram && (
        <a
          href={`https://instagram.com/${socials.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#1C1917] dark:hover:text-[#FAFAF9] transition-colors"
        >
          <InstagramIcon />
        </a>
      )}
      {socials.linkedin && (
        <a
          href={`https://linkedin.com/in/${socials.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#1C1917] dark:hover:text-[#FAFAF9] transition-colors"
        >
          <LinkedInIcon />
        </a>
      )}
    </span>
  );
}

/* ── Avatar ── */

function Avatar({
  name,
  size = "md",
  index = 0,
}: {
  name: string;
  size?: "lg" | "md" | "sm";
  index?: number;
}) {
  const sizeClasses = {
    lg: "w-24 h-24 text-2xl",
    md: "w-14 h-14 text-base",
    sm: "w-10 h-10 text-sm",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${avatarBg(index)} rounded-full flex items-center justify-center font-medium text-[#57534E] dark:text-[#D6D3D1] select-none shrink-0`}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

/* ── Page ── */

export default function MembersPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-8">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-left">
          Anggota
        </h1>
        <p className="mt-4 text-lg text-[#57534E] dark:text-[#A8A29E] max-w-xl">
          Orang-orang di balik Developer Student Club — dari inti organisasi
          sampai kontributor di setiap divisi.
        </p>
      </section>

      {/* ──────────────────────────────────────
          TIM INTI
         ────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pt-10 pb-20">
          <h2 className="text-2xl font-semibold text-left mb-10">Tim Inti</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreTeam.map((m, i) => (
            <div
              key={m.id}
              className={`border border-[#D6D3D1] dark:border-[#292524] rounded-lg p-6 ${
                i === 0
                  ? "md:col-span-2 md:flex md:items-start md:gap-8"
                  : ""
              }`}
            >
              <Avatar
                name={m.name}
                size={i === 0 ? "lg" : "md"}
                index={i}
              />
              <div className={i === 0 ? "mt-0" : "mt-4"}>
                <h3 className="text-xl font-semibold">{m.name}</h3>
                <p className="text-sm text-[#D42B2B] dark:text-[#E87A2F] font-medium mt-1">
                  {roleLabelMap[m.role] ?? m.role}
                </p>
                <p className="text-sm text-[#57534E] dark:text-[#A8A29E] mt-3 leading-relaxed max-w-prose">
                  {m.bio}
                </p>
                <div className="mt-4">
                  <SocialLinks socials={m.socials} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="max-w-5xl mx-auto" />

      {/* ──────────────────────────────────────
          KEPALA DIVISI
         ────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-semibold text-left mb-10">
            Kepala Divisi
          </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {heads.map((m, i) => (
            <div
              key={m.id}
              className="flex items-start gap-4"
            >
              <Avatar name={m.name} size="md" index={i + 4} />
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-[#78716C] dark:text-[#A8A29E]">
                  {m.division}
                </p>
                <h3 className="text-base font-semibold mt-0.5 truncate">
                  {m.name}
                </h3>
                <p className="text-sm text-[#57534E] dark:text-[#A8A29E] mt-1.5 leading-relaxed line-clamp-2">
                  {m.bio}
                </p>
                <div className="mt-2">
                  <SocialLinks socials={m.socials} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="max-w-5xl mx-auto" />

      {/* ──────────────────────────────────────
          STAF
         ────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-semibold text-left mb-8">Staf</h2>

        <div className="divide-y divide-[#E7E5E4] dark:divide-[#292524]">
          {staff.map((m, i) => (
            <div
              key={m.id}
              className="flex items-center gap-4 py-4"
            >
              <Avatar name={m.name} size="sm" index={i + 10} />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-medium">{m.name}</h3>
                <p className="text-sm text-[#78716C] dark:text-[#A8A29E]">
                  {m.division}
                </p>
              </div>
              <SocialLinks socials={m.socials} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
