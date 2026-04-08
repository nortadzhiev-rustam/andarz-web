import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";
import CourseDetailContent from "@/components/courses/CourseDetailContent";
import { getCourseById } from "@/lib/api";

interface CourseDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: CourseDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const course = await getCourseById(id);
  if (!course) return { title: "Course Not Found" };
  return {
    title: course.title,
    description: course.shortDescription,
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { id } = await params;
  const course = await getCourseById(id);
  if (!course) notFound();

  return (
    <MainLayout>
      <CourseDetailContent course={course} />
    </MainLayout>
  );
}
