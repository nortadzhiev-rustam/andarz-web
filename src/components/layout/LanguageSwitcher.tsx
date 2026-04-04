"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LANGUAGES } from "@/lib/translations";

interface LanguageSwitcherProps {
  scrolled: boolean;
}

export default function LanguageSwitcher({ scrolled }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Select language"
        aria-expanded={open}
        className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
          scrolled
            ? "border border-white/25 bg-white/10 text-white hover:bg-white/20"
            : "border border-gray-300/60 bg-gray-100/60 text-gray-700 hover:bg-gray-200/70"
        }`}
      >
        <span>{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute right-0 mt-2 w-40 rounded-xl border shadow-lg backdrop-blur-xl backdrop-saturate-200 z-50 overflow-hidden ${
            scrolled
              ? "border-white/20 bg-[#0c1a4f]/90"
              : "border-gray-200 bg-white/95"
          }`}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              role="menuitem"
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 px-4 py-2.5 text-sm text-left transition-colors duration-150 ${
                language === lang.code
                  ? scrolled
                    ? "bg-white/20 text-white font-medium"
                    : "bg-blue-600/10 text-blue-700 font-medium"
                  : scrolled
                    ? "text-white/75 hover:bg-white/10 hover:text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
