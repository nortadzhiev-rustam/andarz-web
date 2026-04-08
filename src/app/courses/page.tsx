import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import CoursesPageContent from "@/components/courses/CoursesPageContent";
import { getCourses } from "@/lib/api";

export const metadata: Metadata = {
  title: "Courses",
  description: "Browse all available courses and programmes on Andarz.",
};

interface CoursesPageProps {
  searchParams: { category?: string };
}

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const { category } = searchParams;
  const courses = await getCourses();

  return (
    <MainLayout>
      <CoursesPageContent courses={courses} initialCategory={category} />
    </MainLayout>
  );
}
