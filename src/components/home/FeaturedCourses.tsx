"use client";

import Link from "next/link";
import { Course } from "@/types/course";
import CourseCard from "@/components/courses/CourseCard";
import { useLanguage } from "@/context/LanguageContext";

interface FeaturedCoursesProps {
  courses: Course[];
}

export default function FeaturedCourses({ courses }: FeaturedCoursesProps) {
  const { t } = useLanguage();
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              {t.home.featuredCourses.title}
            </h2>
            <p className="mt-2 text-gray-600">
              {t.home.featuredCourses.subtitle}
            </p>
          </div>
          <Link
            href="/courses"
            className="hidden sm:inline-flex text-sm font-semibold text-blue-700 hover:text-blue-600"
          >
            {t.home.featuredCourses.viewAll}
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/courses"
            className="text-sm font-semibold text-blue-700 hover:text-blue-600"
          >
            {t.home.featuredCourses.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
