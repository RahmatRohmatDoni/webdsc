"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/members", label: "Anggota" },
  { href: "/events", label: "Event" },
  { href: "/news", label: "Berita" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/feedback", label: "Feedback" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "backdrop-blur-xl bg-white/80 dark:bg-[#1C1917]/80 border-b border-[#E7E5E4] dark:border-[#292524] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-2.5 select-none group">
            <div className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
              <Image
                src="/logo-dsc.png"
                width={36}
                height={36}
                alt="DSC Logo"
                preload
              />
            </div>
            <span className="text-lg font-semibold tracking-tight text-[#1C1917] dark:text-[#E7E5E4] transition-colors duration-300">
              Developer Student Club
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-0.5">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive(href)
                      ? "nav-link-active text-[#1C1917] dark:text-[#E7E5E4]"
                      : "text-[#78716C] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#E7E5E4]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex md:hidden items-center justify-center rounded-lg p-2 text-[#78716C] dark:text-[#A8A29E] hover:bg-[#F5F5F4] dark:hover:bg-[#292524] transition-colors duration-200"
              aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={mobileOpen}
            >
              <svg
                className="h-5 w-5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ transform: mobileOpen ? "rotate(90deg)" : "none" }}
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className="md:hidden grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            gridTemplateRows: mobileOpen ? "1fr" : "0fr",
            opacity: mobileOpen ? 1 : 0,
          }}
        >
          <div className="overflow-hidden">
            <ul className="flex flex-col gap-1 pt-2 pb-4">
              {navLinks.map(({ href, label }, i) => (
                <li
                  key={href}
                  style={{
                    transform: mobileOpen ? "none" : "translateY(-8px)",
                    opacity: mobileOpen ? 1 : 0,
                    transition: `all 0.3s cubic-bezier(0.22, 1, 0.36, 1) ${mobileOpen ? i * 50 : 0}ms`,
                  }}
                >
                  <Link
                    href={href}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive(href)
                        ? "text-[#1C1917] dark:text-[#E7E5E4] bg-[#F5F5F4] dark:bg-[#292524]"
                        : "text-[#78716C] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#E7E5E4] hover:bg-[#F5F5F4] dark:hover:bg-[#292524]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
