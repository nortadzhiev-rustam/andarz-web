import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import CoursesList from "@/components/courses/CoursesList";
import { getCourses } from "@/lib/api";

export const metadata: Metadata = {
  title: "Courses",
  description: "Browse all available courses on Andarz.",
};

interface CoursesPageProps {
  searchParams: { category?: string };
}

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const { category } = searchParams;
  const courses = await getCourses();

  return (
    <MainLayout>
      <div className="bg-blue-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900">All Courses</h1>
          <p className="mt-2 text-gray-600">
            Explore our full library of expert-led courses.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <CoursesList courses={courses} initialCategory={category ?? "All"} />
      </div>
    </MainLayout>
  );
}
