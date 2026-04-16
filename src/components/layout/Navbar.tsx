"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

const NAV_KEYS = ["home", "blog", "about", "contact"] as const;
const NAV_HREFS: Record<(typeof NAV_KEYS)[number], string> = {
  home: "/",
  blog: "/blog",
  about: "/about",
  contact: "/contact",
};

function desktopNavLinkClass(scrolled: boolean, isActive: boolean): string {
  if (scrolled) {
    return isActive ? "text-white" : "text-white/75 hover:text-white";
  }

  return isActive ? "text-blue-700" : "text-gray-700 hover:text-gray-900";
}

function mobileNavLinkClass(scrolled: boolean, isActive: boolean): string {
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
  const [desktopIndicatorStyle, setDesktopIndicatorStyle] = useState<{
    width: number;
    x: number;
    ready: boolean;
  }>({ width: 0, x: 0, ready: false });
  const desktopNavRef = useRef<HTMLDivElement | null>(null);
  const desktopLinkRefs = useRef<
    Partial<Record<(typeof NAV_KEYS)[number], HTMLSpanElement | null>>
  >({});
  const { t } = useLanguage();

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

  useEffect(() => {
    const updateDesktopIndicator = () => {
      const activeKey = NAV_KEYS.find((key) => {
        const href = NAV_HREFS[key];
        return href === "/" ? pathname === "/" : pathname.startsWith(href);
      });

      const container = desktopNavRef.current;
      const activeLink = activeKey ? desktopLinkRefs.current[activeKey] : null;

      if (!container || !activeLink) {
        setDesktopIndicatorStyle((current) =>
          current.ready
            ? { ...current, ready: false }
            : current,
        );
        return;
      }

      setDesktopIndicatorStyle((current) => {
        const nextStyle = {
          width: activeLink.offsetWidth,
          x: activeLink.offsetLeft,
          ready: true,
        };

        if (
          current.ready
          && current.width === nextStyle.width
          && current.x === nextStyle.x
        ) {
          return current;
        }

        return nextStyle;
      });
    };

    updateDesktopIndicator();
    window.addEventListener("resize", updateDesktopIndicator);

    return () => window.removeEventListener("resize", updateDesktopIndicator);
  }, [pathname, t]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#0c1a4f] shadow-lg shadow-black/20 backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="w-full px-10">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src={scrolled ? "/IMG_7393.png" : "/IMG_7394.png"}
              alt={t.siteName}
              width={36}
              height={36}
              className="object-contain"
            />
            <span
              className={`text-2xl font-bold drop-shadow-sm transition-colors duration-300 ${
                scrolled ? "text-white" : "text-gray-900"
              }`}
            >
              {t.siteName}
            </span>
          </Link>

          {/* Desktop: iOS liquid glass tab bar */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 md:flex md:items-center">
            <div
              ref={desktopNavRef}
              className={`relative flex items-center gap-1 rounded-3xl border px-2 py-1.5 shadow-lg backdrop-blur-2xl backdrop-saturate-200 transition-all duration-300 ${
                scrolled
                  ? "border-white/25 bg-white/10 shadow-black/10"
                  : "border-gray-300/60 bg-gray-100/60 shadow-black/5"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute inset-y-1.5 left-0 rounded-2xl transition-[transform,width,background-color,box-shadow] duration-300 ease-out ${
                  scrolled
                    ? "bg-white/25 shadow-inner shadow-white/10"
                    : "bg-blue-600/10"
                } ${desktopIndicatorStyle.ready ? "opacity-100" : "opacity-0"}`}
                style={{
                  width: desktopIndicatorStyle.width,
                  transform: `translateX(${desktopIndicatorStyle.x}px)`,
                }}
              />
              {NAV_KEYS.map((key) => {
                const href = NAV_HREFS[key];
                const isActive =
                  href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(href);
                return (
                  <span
                    key={href}
                    ref={(element) => {
                      desktopLinkRefs.current[key] = element;
                    }}
                  >
                    <Link
                      href={href}
                      className={`relative z-10 block rounded-2xl px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${desktopNavLinkClass(scrolled, isActive)}`}
                    >
                      {t.nav[key]}
                    </Link>
                  </span>
                );
              })}
            </div>
          </nav>

          {/* Auth buttons + Language Switcher */}
          <div className="hidden shrink-0 items-center gap-3 md:flex">
            <LanguageSwitcher scrolled={scrolled} />
            <Link
              href="/login"
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-white/80 hover:text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {t.nav.login}
            </Link>
            <Link
              href="/register"
              className={`rounded-3xl px-4 py-2 text-sm font-semibold shadow-md transition-all duration-300 hover:-translate-y-px ${
                scrolled
                  ? "border border-white/30 bg-white/15 text-white shadow-black/10 backdrop-blur-sm hover:bg-white/25"
                  : "border border-blue-600/30 bg-blue-600/10 text-blue-700 hover:bg-blue-600/20"
              }`}
            >
              {t.nav.getStarted}
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
            {NAV_KEYS.map((key) => {
              const href = NAV_HREFS[key];
              const isActive =
                href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${mobileNavLinkClass(scrolled, isActive)}`}
                >
                  {t.nav[key]}
                </Link>
              );
            })}
            <div
              className={`mt-2 h-px ${scrolled ? "bg-white/15" : "bg-gray-200"}`}
            />
            <div className="px-1 py-1">
              <LanguageSwitcher scrolled={scrolled} />
            </div>
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                scrolled
                  ? "text-white/75 hover:bg-white/15 hover:text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {t.nav.login}
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
              {t.nav.getStarted}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
