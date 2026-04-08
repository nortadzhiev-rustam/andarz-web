"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const SERVICE_ICONS = ["👩‍🏫", "📋", "📊", "🔬", "📚", "🤝"] as const;

export default function HomeServicesSection() {
  const { t } = useLanguage();
  const { services, cta } = t.home;

  return (
    <>
      {/* Services section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
            {services.title}
          </h2>
          <p className="mt-2 text-center text-gray-600">{services.subtitle}</p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {services.items.map((name, idx) => (
              <div
                key={name}
                className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100"
              >
                <span className="text-3xl">{SERVICE_ICONS[idx]}</span>
                <span className="mt-2 text-sm font-medium text-gray-700">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white">{cta.title}</h2>
          <p className="mt-4 text-lg text-blue-100">{cta.subtitle}</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow hover:bg-blue-50 transition-colors"
          >
            {cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
