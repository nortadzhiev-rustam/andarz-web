"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 0,
    badge: "👩‍🏫 Professional Development",
    headline: ["Elevating", "Education Quality", "in Tajikistan"],
    accentIdx: 1,
    description:
      "Practical seminars for school leaders, teachers, educators, and parents — building professional competencies that drive real academic results.",
  },
  {
    id: 1,
    badge: "🔬 STEM Programs",
    headline: ["Science of", "the Future", "for Every School"],
    accentIdx: 1,
    description:
      "International-standard STEM curriculum taught in English with a spiral methodology and digital integration — localised for Tajikistan's schools.",
  },
  {
    id: 2,
    badge: "📊 Digital Ecosystem",
    headline: ["Smart Analytics", "for Modern", "Education"],
    accentIdx: 1,
    description:
      "Digital testing, knowledge assessment, and data-driven analytics help identify learning gaps and provide meaningful feedback for schools and families.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setVisible(true);
      }, 350);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white flex items-center">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <div
          className="animate-blob absolute top-1/4 left-[10%] w-[32rem] h-[32rem] rounded-full bg-blue-100 blur-3xl"
        />
        <div
          className="animate-blob absolute top-[55%] right-[8%] w-[26rem] h-[26rem] rounded-full bg-indigo-100 blur-3xl"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="animate-blob absolute bottom-[10%] left-[35%] w-[22rem] h-[22rem] rounded-full bg-sky-100 blur-3xl"
          style={{ animationDelay: "6s" }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* ── LEFT: Slide content ───────────────────────────── */}
          <div
            className="transition-all duration-350"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600">
              {slide.badge}
            </span>

            {/* Headline */}
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {slide.headline.map((word, i) =>
                i === slide.accentIdx ? (
                  <span
                    key={i}
                    className="block bg-gradient-to-r from-blue-300 via-sky-300 to-blue-500 bg-clip-text text-transparent"
                  >
                    {word}
                  </span>
                ) : (
                  <span key={i} className="block">
                    {word}
                  </span>
                )
              )}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
              {slide.description}
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:from-blue-600 hover:to-blue-800 hover:shadow-blue-500/50"
              >
                Browse Courses →
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 transition-all hover:-translate-y-0.5 hover:bg-gray-50"
              >
                Learn More
              </Link>
            </div>

            {/* Slide indicators */}
            <div className="mt-10 flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setVisible(false);
                    setTimeout(() => {
                      setCurrent(i);
                      setVisible(true);
                    }, 350);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-blue-500"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "Schools Served", value: "15–20" },
                { label: "Seminars / Year", value: "20+" },
                { label: "Books Published", value: "19+" },
                { label: "Experts", value: "18" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center"
                >
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Animated glass cards ───────────────────── */}
          <div className="relative hidden h-[540px] lg:block">
            {/* Glass panel background */}
            <div className="absolute inset-0 rounded-3xl border border-gray-200 bg-gray-50/50" />

            {/* Decorative ring top-right */}
            <div
              className="animate-spin-slow absolute right-10 top-10 h-28 w-28 rounded-full border border-blue-300/40"
              aria-hidden
            />
            {/* Decorative ring bottom-left */}
            <div
              className="animate-spin-slow absolute bottom-16 left-12 h-20 w-20 rounded-full border border-blue-300/40"
              aria-hidden
              style={{ animationDelay: "8s", animationDirection: "reverse" }}
            />

            {/* Card: Top-left — Schools */}
            <div
              className="animate-float absolute left-8 top-8 w-52 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg"
              style={{ animationDelay: "0s" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/50 text-xl">
                  🏫
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">15–20 Schools</p>
                  <p className="text-xs text-gray-500">Partner institutions</p>
                </div>
              </div>
            </div>

            {/* Card: Top-right — Seminars */}
            <div
              className="animate-float-alt absolute right-8 top-8 w-52 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/50 text-xl">
                  🎓
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">20+ Seminars</p>
                  <p className="text-xs text-gray-500">300–500 participants each</p>
                </div>
              </div>
            </div>

            {/* Central featured card */}
            <div
              className="animate-float absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl"
              style={{ animationDelay: "1s" }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-900 text-2xl">
                  🔬
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    STEM Programme
                  </p>
                  <p className="font-bold text-gray-900">Science of the Future</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>🌍 International standards</span>
                <span>🇹🇯 Localised</span>
              </div>
              {/* Progress bar */}
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                <div className="h-1.5 w-4/5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
              </div>
              <p className="mt-1.5 text-xs text-gray-500">Spiral methodology + digital integration</p>
            </div>

            {/* Card: Bottom-left — Experts */}
            <div
              className="animate-float-alt absolute bottom-8 left-8 w-52 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/50 text-xl">
                  👩‍🏫
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">18 Experts</p>
                  <p className="text-xs text-gray-500">12 subject + 6 preschool</p>
                </div>
              </div>
            </div>

            {/* Card: Bottom-right — Books */}
            <div
              className="animate-float absolute bottom-8 right-8 w-52 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg"
              style={{ animationDelay: "3s" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/50 text-xl">
                  📚
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">19+ Books</p>
                  <p className="text-xs text-gray-500">Published & translated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade-out */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"
        aria-hidden
      />
    </section>
  );
}
