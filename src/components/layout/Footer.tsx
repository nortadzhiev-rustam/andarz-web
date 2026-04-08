"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/IMG_7393.png"
                alt={t.siteName}
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-white">{t.siteName}</span>
            </Link>
            <p className="mt-3 text-sm text-gray-400 max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.navigationHeading}
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.legalHeading}
            </h3>
            <ul className="mt-4 space-y-2">
              {t.footer.legal.map((label) => (
                <li key={label}>
                  <span className="text-sm text-gray-500 cursor-default">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} {t.siteName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
