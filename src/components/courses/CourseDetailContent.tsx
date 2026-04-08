"use client";

import Image from "next/image";
import { Course } from "@/types/course";
import { formatPrice, calcDiscountPercent } from "@/utils/helpers";
import { useLanguage } from "@/context/LanguageContext";

interface CourseDetailContentProps {
  course: Course;
}

export default function CourseDetailContent({ course }: CourseDetailContentProps) {
  const { t } = useLanguage();
  const tc = t.courses;

  const discount =
    course.discountPrice !== undefined
      ? calcDiscountPercent(course.price, course.discountPrice)
      : null;

  return (
    <>
      <div className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Info */}
            <div className="lg:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                {course.category}
              </span>
              <h1 className="mt-2 text-3xl font-extrabold">{course.title}</h1>
              <p className="mt-3 text-gray-300">{course.shortDescription}</p>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <span>
                  ⭐ {course.rating} ({course.reviewsCount} {tc.reviews})
                </span>
                <span>
                  👥 {course.studentsCount.toLocaleString()} {tc.students}
                </span>
                <span>🕒 {course.duration}</span>
                <span className="capitalize">📈 {course.level}</span>
              </div>
            </div>

            {/* Purchase card */}
            <div className="rounded-xl bg-white text-gray-900 p-6 shadow-lg lg:sticky lg:top-20 self-start">
              <div className="relative h-44 w-full rounded-lg bg-blue-100 overflow-hidden">
                {course.thumbnail && (
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                )}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="text-3xl font-bold">
                  {formatPrice(course.discountPrice ?? course.price)}
                </span>
                {course.discountPrice !== undefined && (
                  <>
                    <span className="text-gray-400 line-through">
                      {formatPrice(course.price)}
                    </span>
                    <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-600">
                      -{discount}%
                    </span>
                  </>
                )}
              </div>
              <button className="mt-4 w-full rounded-lg bg-blue-700 py-3 text-sm font-semibold text-white hover:bg-blue-600 transition-colors">
                {tc.enroll}
              </button>
              <p className="mt-2 text-center text-xs text-gray-400">
                {tc.moneyBack}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Course content */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-xl font-bold text-gray-900">{tc.aboutCourse}</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">{course.description}</p>
            </section>

            {/* Curriculum */}
            {course.modules.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-gray-900">{tc.curriculum}</h2>
                <div className="mt-4 space-y-3">
                  {course.modules.map((mod) => (
                    <details
                      key={mod.id}
                      className="group rounded-lg border border-gray-200"
                    >
                      <summary className="flex cursor-pointer items-center justify-between px-4 py-3 font-medium text-gray-900 hover:bg-gray-50">
                        {mod.title}
                        <span className="text-xs text-gray-400">
                          {mod.lessons.length} {tc.lessons}
                        </span>
                      </summary>
                      <ul className="divide-y divide-gray-100 border-t border-gray-200">
                        {mod.lessons.map((lesson) => (
                          <li
                            key={lesson.id}
                            className="flex items-center justify-between px-4 py-2 text-sm text-gray-700"
                          >
                            <span>{lesson.title}</span>
                            <div className="flex items-center gap-3 text-xs text-gray-400">
                              <span>{lesson.duration}</span>
                              {lesson.isFree && (
                                <span className="rounded-full bg-green-100 px-2 py-0.5 text-green-600 font-medium">
                                  {tc.free}
                                </span>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Instructor */}
            <section>
              <h2 className="text-xl font-bold text-gray-900">{tc.yourInstructor}</h2>
              <div className="mt-4 flex items-start gap-4">
                <div className="relative h-14 w-14 rounded-full bg-blue-100 overflow-hidden flex-shrink-0">
                  {course.instructor.avatar && (
                    <Image
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{course.instructor.name}</p>
                  <p className="mt-1 text-sm text-gray-600">{course.instructor.bio}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
