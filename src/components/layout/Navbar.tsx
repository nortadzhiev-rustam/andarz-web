"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1e1b4b]/80 shadow-lg shadow-black/20 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white drop-shadow-sm">
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop: iOS liquid glass tab bar */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center gap-1 rounded-2xl border border-white/25 bg-white/10 px-2 py-1.5 shadow-lg shadow-black/10 backdrop-blur-2xl backdrop-saturate-200">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative rounded-xl px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-white/25 text-white shadow-inner shadow-white/10"
                        : "text-white/75 hover:bg-white/15 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="rounded-xl border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-black/10 backdrop-blur-sm transition-all hover:bg-white/25 hover:-translate-y-px"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-xl border border-white/25 bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu — liquid glass drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#1e1b4b]/90 px-4 pb-5 pt-3 backdrop-blur-2xl backdrop-saturate-200">
          <nav className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white/25 text-white shadow-inner shadow-white/10"
                      : "text-white/75 hover:bg-white/15 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 h-px bg-white/15" />
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-white/75 hover:bg-white/15 hover:text-white transition-all"
            >
              Log in
            </Link>
            <Link
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl border border-white/30 bg-white/15 px-4 py-2.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/25"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
