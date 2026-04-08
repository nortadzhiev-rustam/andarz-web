"use client";

import { useLanguage } from "@/context/LanguageContext";
import CoursesList from "@/components/courses/CoursesList";
import { Course } from "@/types/course";

interface CoursesPageContentProps {
  courses: Course[];
  initialCategory?: string;
}

export default function CoursesPageContent({
  courses,
  initialCategory,
}: CoursesPageContentProps) {
  const { t } = useLanguage();

  return (
    <>
      <div className="bg-blue-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {t.courses.pageTitle}
          </h1>
          <p className="mt-2 text-gray-600">{t.courses.pageSubtitle}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <CoursesList courses={courses} initialCategory={initialCategory ?? "All"} />
      </div>
    </>
  );
}
