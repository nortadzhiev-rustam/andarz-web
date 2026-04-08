import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/home/Hero";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import { getFeaturedCourses } from "@/lib/api";

export default async function HomePage() {
  const featuredCourses = await getFeaturedCourses();

  return (
    <MainLayout>
      <Hero />
      <FeaturedCourses courses={featuredCourses} />

      {/* Services section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
            Our Services
          </h2>
          <p className="mt-2 text-center text-gray-600">
            A comprehensive approach to improving education quality across Tajikistan.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { name: "Professional Development", icon: "👩‍🏫" },
              { name: "Education Monitoring", icon: "📋" },
              { name: "Digital Ecosystem", icon: "📊" },
              { name: "STEM Programs", icon: "🔬" },
              { name: "Publishing", icon: "📚" },
              { name: "Consulting", icon: "🤝" },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={`/courses?category=${encodeURIComponent(cat.name)}`}
                className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100 hover:ring-blue-300 hover:shadow-md transition"
              >
                <span className="text-3xl">{cat.icon}</span>
                <span className="mt-2 text-sm font-medium text-gray-700">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Partner with Andarz
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Join 15–20 schools and 10–15 kindergartens already transforming education in Tajikistan.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
