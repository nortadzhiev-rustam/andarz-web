"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

function navLinkClass(scrolled: boolean, isActive: boolean): string {
  if (scrolled) {
    return isActive
      ? "bg-white/25 text-white shadow-inner shadow-white/10"
      : "text-white/75 hover:bg-white/15 hover:text-white";
  }
  return isActive
    ? "bg-blue-600/10 text-blue-700"
    : "text-gray-700 hover:bg-gray-200/70 hover:text-gray-900";
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 0);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#0c1a4f] shadow-lg shadow-black/20 backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className={`text-2xl font-bold drop-shadow-sm transition-colors duration-300 ${
                scrolled ? "text-white" : "text-gray-900"
              }`}
            >
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop: iOS liquid glass tab bar */}
          <nav className="hidden md:flex items-center">
            <div
              className={`flex items-center gap-1 rounded-2xl border px-2 py-1.5 shadow-lg backdrop-blur-2xl backdrop-saturate-200 transition-all duration-300 ${
                scrolled
                  ? "border-white/25 bg-white/10 shadow-black/10"
                  : "border-gray-300/60 bg-gray-100/60 shadow-black/5"
              }`}
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative rounded-xl px-4 py-1.5 text-sm font-medium transition-all duration-200 ${navLinkClass(scrolled, isActive)}`}
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
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-white/80 hover:text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Log in
            </Link>
            <Link
              href="/register"
              className={`rounded-xl px-4 py-2 text-sm font-semibold shadow-md transition-all duration-300 hover:-translate-y-px ${
                scrolled
                  ? "border border-white/30 bg-white/15 text-white shadow-black/10 backdrop-blur-sm hover:bg-white/25"
                  : "border border-blue-600/30 bg-blue-600/10 text-blue-700 hover:bg-blue-600/20"
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden rounded-xl border p-2 backdrop-blur-sm transition-all duration-300 ${
              scrolled
                ? "border-white/25 bg-white/10 text-white hover:bg-white/20"
                : "border-gray-300/60 bg-gray-100/60 text-gray-700 hover:bg-gray-200/70"
            }`}
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
        <div
          className={`md:hidden border-t px-4 pb-5 pt-3 backdrop-blur-2xl backdrop-saturate-200 ${
            scrolled
              ? "border-white/10 bg-[#0c1a4f]/90"
              : "border-gray-200 bg-white/95"
          }`}
        >
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
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${navLinkClass(scrolled, isActive)}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div
              className={`mt-2 h-px ${scrolled ? "bg-white/15" : "bg-gray-200"}`}
            />
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                scrolled
                  ? "text-white/75 hover:bg-white/15 hover:text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              Log in
            </Link>
            <Link
              href="/register"
              onClick={() => setMenuOpen(false)}
              className={`rounded-xl px-4 py-2.5 text-center text-sm font-semibold backdrop-blur-sm transition-all ${
                scrolled
                  ? "border border-white/30 bg-white/15 text-white hover:bg-white/25"
                  : "border border-blue-600/30 bg-blue-600/10 text-blue-700 hover:bg-blue-600/20"
              }`}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
