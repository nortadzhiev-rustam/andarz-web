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

      {/* Categories section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
            Browse by Category
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Find the right course for your learning goals.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { name: "Web Development", icon: "🌐" },
              { name: "Data Science", icon: "📊" },
              { name: "Design", icon: "🎨" },
              { name: "Backend", icon: "⚙️" },
              { name: "Mobile", icon: "📱" },
              { name: "DevOps", icon: "🚀" },
            ].map((cat) => (
              <a
                key={cat.name}
                href={`/courses?category=${encodeURIComponent(cat.name)}`}
                className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100 hover:ring-indigo-300 hover:shadow-md transition"
              >
                <span className="text-3xl">{cat.icon}</span>
                <span className="mt-2 text-sm font-medium text-gray-700">
                  {cat.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Start Learning Today
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Join over 20,000 students and unlock your career potential.
          </p>
          <a
            href="/register"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow hover:bg-indigo-50 transition-colors"
          >
            Create a Free Account
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
