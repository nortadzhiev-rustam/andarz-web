"use client";

import { useState } from "react";
import { Course } from "@/types/course";
import CourseCard from "@/components/courses/CourseCard";
import CourseFilter from "@/components/courses/CourseFilter";

interface CoursesListProps {
  courses: Course[];
  initialCategory?: string;
}

export default function CoursesList({ courses, initialCategory = "All" }: CoursesListProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = courses.filter((course) => {
    const matchCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchLevel =
      selectedLevel === "All" || course.level === selectedLevel;
    const matchSearch =
      !searchQuery ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchLevel && matchSearch;
  });

  return (
    <div>
      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Filters */}
      <CourseFilter
        selectedCategory={selectedCategory}
        selectedLevel={selectedLevel}
        onCategoryChange={setSelectedCategory}
        onLevelChange={setSelectedLevel}
      />

      {/* Results */}
      <p className="mt-4 text-sm text-gray-500">
        {filtered.length} course{filtered.length !== 1 ? "s" : ""} found
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center text-gray-500">
          <p className="text-lg font-medium">No courses found.</p>
          <p className="mt-1 text-sm">Try adjusting your filters or search query.</p>
        </div>
      )}
    </div>
  );
}
