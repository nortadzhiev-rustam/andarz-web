import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Andarz, our mission, and our team.",
};

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & Lead Instructor",
    avatar: "/images/team/sarah.jpg",
    bio: "Full-stack developer with 10+ years of experience in web technologies.",
  },
  {
    name: "David Kim",
    role: "React & Node.js Instructor",
    avatar: "/images/team/david.jpg",
    bio: "React specialist and open-source contributor, passionate about teaching.",
  },
  {
    name: "Priya Patel",
    role: "Data Science Instructor",
    avatar: "/images/team/priya.jpg",
    bio: "Data scientist with expertise in Python, ML, and statistical modeling.",
  },
  {
    name: "Maria Gonzalez",
    role: "UI/UX Design Instructor",
    avatar: "/images/team/maria.jpg",
    bio: "Senior UX designer with a passion for human-centered design education.",
  },
];

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-indigo-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900">About Andarz</h1>
          <p className="mt-4 text-lg text-gray-600">
            We believe that quality education should be accessible to everyone.
            Andarz was founded to bridge the gap between industry knowledge and
            learners worldwide.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {[
              {
                icon: "🎯",
                title: "Our Mission",
                text: "To empower learners worldwide with practical, high-quality education taught by industry professionals.",
              },
              {
                icon: "👁️",
                title: "Our Vision",
                text: "A world where anyone, anywhere, can access the skills they need to thrive in the digital economy.",
              },
              {
                icon: "💡",
                title: "Our Values",
                text: "Accessibility, quality, community, and lifelong learning are at the heart of everything we do.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-100 text-center">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">Meet Our Team</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100">
                <div className="mx-auto h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center text-3xl font-bold text-indigo-400">
                  {member.name[0]}
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{member.name}</h3>
                <p className="text-xs text-indigo-600 font-medium">{member.role}</p>
                <p className="mt-2 text-xs text-gray-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
