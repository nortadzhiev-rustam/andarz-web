import Link from "next/link";
import { SITE_TAGLINE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            {SITE_TAGLINE}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Unlock Your Potential with{" "}
            <span className="text-indigo-600">Expert-Led</span> Courses
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Explore hundreds of courses in web development, design, data science,
            and more — all taught by industry professionals at your own pace.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/courses"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-indigo-500 transition-colors"
            >
              Browse Courses
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { label: "Students", value: "20,000+" },
            { label: "Courses", value: "150+" },
            { label: "Instructors", value: "50+" },
            { label: "Completion Rate", value: "92%" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100"
            >
              <p className="text-3xl font-bold text-indigo-600">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
