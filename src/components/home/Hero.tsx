"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE_TAGLINE } from "@/lib/constants";

const slides = [
  {
    id: 0,
    badge: "🌐 Web Development",
    headline: ["Master", "Modern Web", "Development"],
    accentIdx: 1,
    description:
      "Build full-stack applications with React, Next.js, and Node.js — all taught by industry professionals at your own pace.",
  },
  {
    id: 1,
    badge: "📊 Data Science",
    headline: ["Dive Into", "Data Science", "& Machine Learning"],
    accentIdx: 1,
    description:
      "Analyze real-world data, build predictive models, and unlock insights using Python, NumPy, Pandas, and scikit-learn.",
  },
  {
    id: 2,
    badge: "🎨 UI/UX Design",
    headline: ["Design", "Beautiful", "User Experiences"],
    accentIdx: 1,
    description:
      "Create stunning, accessible interfaces and seamless user journeys with Figma, Tailwind, and modern design systems.",
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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#020617] via-[#0c1a4f] to-[#0f172a] flex items-center">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <div
          className="animate-blob absolute top-1/4 left-[10%] w-[32rem] h-[32rem] rounded-full bg-blue-600/25 blur-3xl"
        />
        <div
          className="animate-blob absolute top-[55%] right-[8%] w-[26rem] h-[26rem] rounded-full bg-blue-400/20 blur-3xl"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="animate-blob absolute bottom-[10%] left-[35%] w-[22rem] h-[22rem] rounded-full bg-sky-400/15 blur-3xl"
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
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-blue-300 backdrop-blur-sm">
              {slide.badge}
            </span>

            {/* Headline */}
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
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
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-300">
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
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20"
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
                      ? "w-8 bg-blue-400"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "Students", value: "20,000+" },
                { label: "Courses", value: "150+" },
                { label: "Instructors", value: "50+" },
                { label: "Completion", value: "92%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-0.5 text-xs text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Animated glass cards ───────────────────── */}
          <div className="relative hidden h-[540px] lg:block">
            {/* Glass panel background */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm" />

            {/* Decorative ring top-right */}
            <div
              className="animate-spin-slow absolute right-10 top-10 h-28 w-28 rounded-full border border-blue-400/20"
              aria-hidden
            />
            {/* Decorative ring bottom-left */}
            <div
              className="animate-spin-slow absolute bottom-16 left-12 h-20 w-20 rounded-full border border-blue-400/20"
              aria-hidden
              style={{ animationDelay: "8s", animationDirection: "reverse" }}
            />

            {/* Card: Top-left — Rating */}
            <div
              className="animate-float absolute left-8 top-8 w-52 rounded-2xl border border-white/25 bg-white/15 p-4 shadow-xl backdrop-blur-md"
              style={{ animationDelay: "0s" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/50 text-xl">
                  ⭐
                </div>
                <div>
                  <p className="text-sm font-bold text-white">4.9 Rating</p>
                  <p className="text-xs text-gray-400">540+ reviews</p>
                </div>
              </div>
            </div>

            {/* Card: Top-right — Students */}
            <div
              className="animate-float-alt absolute right-8 top-8 w-52 rounded-2xl border border-white/25 bg-white/15 p-4 shadow-xl backdrop-blur-md"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/50 text-xl">
                  👨‍🎓
                </div>
                <div>
                  <p className="text-sm font-bold text-white">20,000+</p>
                  <p className="text-xs text-gray-400">Active students</p>
                </div>
              </div>
            </div>

            {/* Central featured course card */}
            <div
              className="animate-float absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/30 bg-gradient-to-br from-white/20 to-white/5 p-6 shadow-2xl backdrop-blur-lg"
              style={{ animationDelay: "1s" }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-900 text-2xl">
                  📚
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                    Featured Course
                  </p>
                  <p className="font-bold text-white">React.js for Beginners</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>⭐ 4.9 (540)</span>
                <span>18 hours</span>
                <span className="font-semibold text-green-400">$39.99</span>
              </div>
              {/* Progress bar */}
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-1.5 w-3/4 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
              </div>
              <p className="mt-1.5 text-xs text-gray-500">75% completed by students</p>
            </div>

            {/* Card: Bottom-left — Completion */}
            <div
              className="animate-float-alt absolute bottom-8 left-8 w-52 rounded-2xl border border-white/25 bg-white/15 p-4 shadow-xl backdrop-blur-md"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/50 text-xl">
                  🏆
                </div>
                <div>
                  <p className="text-sm font-bold text-white">92% Complete</p>
                  <p className="text-xs text-gray-400">Avg. completion rate</p>
                </div>
              </div>
            </div>

            {/* Card: Bottom-right — Courses */}
            <div
              className="animate-float absolute bottom-8 right-8 w-52 rounded-2xl border border-white/25 bg-white/15 p-4 shadow-xl backdrop-blur-md"
              style={{ animationDelay: "3s" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/50 text-xl">
                  💡
                </div>
                <div>
                  <p className="text-sm font-bold text-white">150+ Courses</p>
                  <p className="text-xs text-gray-400">Expert-led content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade-out */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent"
        aria-hidden
      />
    </section>
  );
}
