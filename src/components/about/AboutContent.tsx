"use client";

import { useLanguage } from "@/context/LanguageContext";

const ACTIVITY_ICONS = ["👩‍🏫", "📋", "📊", "🔬", "📚", "🤝"] as const;
const ADVANTAGE_ICONS = ["🎯", "📈", "🏷️", "💻", "🌍"] as const;

const STATS_VALUES = [
  "20",
  "15",
  "20+",
  "500+",
  "12",
  "6",
  "19+",
  "2023",
] as const;

export default function AboutContent() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      {/* Hero */}
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900">{a.hero.title}</h1>
          <p className="mt-4 text-lg text-gray-600">{a.hero.subtitle}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <span className="text-4xl">🎯</span>
              <h3 className="mt-4 text-xl font-bold text-gray-900">{a.mission.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{a.mission.text}</p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <span className="text-4xl">🚀</span>
              <h3 className="mt-4 text-xl font-bold text-gray-900">{a.strategicGoal.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{a.strategicGoal.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            {a.whatWeDo.title}
          </h2>
          <p className="mt-2 text-center text-gray-600">{a.whatWeDo.subtitle}</p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {a.activities.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
              >
                <span className="text-4xl">{ACTIVITY_ICONS[idx]}</span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            {a.scale.title}
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {a.statsLabels.map((label, idx) => (
              <div
                key={label}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center"
              >
                <p className="text-3xl font-extrabold text-blue-700">
                  {STATS_VALUES[idx]}
                </p>
                <p className="mt-1 text-sm text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            {a.whyAndarz.title}
          </h2>
          <p className="mt-2 text-center text-gray-600">{a.whyAndarz.subtitle}</p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {a.advantages.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100"
              >
                <span className="text-3xl">{ADVANTAGE_ICONS[idx]}</span>
                <h3 className="mt-3 text-base font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-xs text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
