import Link from "next/link";
import Image from "next/image";
import { Course } from "@/types/course";
import { formatPrice, calcDiscountPercent } from "@/utils/helpers";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const discount =
    course.discountPrice !== undefined
      ? calcDiscountPercent(course.price, course.discountPrice)
      : null;

  return (
    <Link
      href={`/courses/${course.id}`}
      className="group flex flex-col rounded-xl overflow-hidden bg-white shadow hover:shadow-md transition-shadow ring-1 ring-gray-100"
    >
      {/* Thumbnail */}
      <div className="relative h-44 w-full bg-indigo-100">
        {course.thumbnail ? (
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-indigo-300 text-4xl font-bold">
            {course.title[0]}
          </div>
        )}
        {discount && (
          <span className="absolute top-2 right-2 rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">
            -{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <span className="text-xs font-medium text-indigo-600 uppercase tracking-wide">
          {course.category}
        </span>
        <h3 className="mt-1 text-sm font-semibold text-gray-900 group-hover:text-indigo-600 line-clamp-2">
          {course.title}
        </h3>
        <p className="mt-1 text-xs text-gray-500">{course.instructor.name}</p>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1 text-xs">
          <span className="font-semibold text-amber-500">{course.rating}</span>
          <span className="text-amber-400">★</span>
          <span className="text-gray-400">({course.reviewsCount})</span>
        </div>

        {/* Meta */}
        <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
          <span>{course.duration}</span>
          <span>·</span>
          <span className="capitalize">{course.level}</span>
        </div>

        {/* Price */}
        <div className="mt-auto pt-3 flex items-center gap-2">
          <span className="font-bold text-gray-900">
            {formatPrice(course.discountPrice ?? course.price)}
          </span>
          {course.discountPrice !== undefined && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(course.price)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
