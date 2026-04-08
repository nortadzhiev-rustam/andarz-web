import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Andarz LLC — our mission, activities, expert team, and impact on education in Tajikistan.",
};

const activities = [
  {
    icon: "👩‍🏫",
    title: "Professional Development",
    text: "Practical seminars (1–2 per year) for school leaders, teachers, educators, assistants, students, and parents — building competencies that drive measurable academic results.",
  },
  {
    icon: "📋",
    title: "Education Quality Monitoring",
    text: "Expert lesson observations, programme-implementation assessments, individual consultations, personalised recommendations, and ongoing school support.",
  },
  {
    icon: "📊",
    title: "Digital Ecosystem",
    text: "Student testing, knowledge assessment, results analytics, learning-gap identification, and structured feedback loops for schools and families.",
  },
  {
    icon: "🔬",
    title: "STEM Programmes",
    text: "The 'Science of the Future' line: English-language instruction, international standards, localisation for Tajikistan, spiral methodology, and digital integration.",
  },
  {
    icon: "📚",
    title: "Publishing",
    text: "19 published books including world classics in translation and purpose-built educational materials for teachers and students.",
  },
  {
    icon: "🤝",
    title: "Consulting",
    text: "End-to-end support for opening and licensing schools, curriculum design, institutional management, quality improvement, and creating safe learning environments.",
  },
];

const advantages = [
  { icon: "🎯", title: "Systematic Approach", text: "We integrate every dimension of education — training, monitoring, analytics, and content — into one coherent model." },
  { icon: "📈", title: "Learning + Analytics", text: "Data-driven insights are embedded in every programme, turning feedback into actionable improvement plans." },
  { icon: "🏷️", title: "Own Products", text: "Proprietary textbooks, STEM curricula, and digital tools designed specifically for the Tajikistani education context." },
  { icon: "💻", title: "Digital Technologies", text: "Modern EdTech tools enable remote assessment, real-time analytics, and seamless school–family communication." },
  { icon: "🌍", title: "International + Local", text: "Global best practices adapted to local language, culture, and curriculum standards for maximum relevance." },
];

const stats = [
  { label: "Schools Served", value: "15–20" },
  { label: "Kindergartens", value: "10–15" },
  { label: "Seminars / Year", value: "20+" },
  { label: "Participants / Event", value: "300–500" },
  { label: "Subject Experts", value: "12" },
  { label: "Preschool Specialists", value: "6" },
  { label: "Books Published", value: "19+" },
  { label: "Founded", value: "2023" },
];

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900">About Andarz</h1>
          <p className="mt-4 text-lg text-gray-600">
            Andarz LLC is an educational and publishing organisation committed to
            building a modern, safe, and sustainable learning environment in the
            Republic of Tajikistan — operating since 2023.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <span className="text-4xl">🎯</span>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Our Mission</h3>
              <p className="mt-2 text-gray-600 text-sm">
                To improve education quality in Tajikistan through modern educational
                solutions, professional development for teachers and leaders, and an
                effective ecosystem that connects schools, families, and students.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <span className="text-4xl">🚀</span>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Strategic Goal</h3>
              <p className="mt-2 text-gray-600 text-sm">
                To build a sustainable education model that raises student academic
                outcomes, upskills teachers and managers, embeds modern methodologies,
                reduces systemic risks when founding schools, and fosters a culture of
                reading and scientific thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            What We Do
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Six interconnected service lines that together transform education.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
              >
                <span className="text-4xl">{item.icon}</span>
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
            Our Scale
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center"
              >
                <p className="text-3xl font-extrabold text-blue-700">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Why Andarz
          </h2>
          <p className="mt-2 text-center text-gray-600">
            What sets us apart in Tajikistan&apos;s education landscape.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-3 text-base font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-xs text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
