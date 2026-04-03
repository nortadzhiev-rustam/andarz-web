"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-indigo-600">{SITE_NAME}</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-gray-100" />
            <Link
              href="/login"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-50"
              onClick={() => setMenuOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-500"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
