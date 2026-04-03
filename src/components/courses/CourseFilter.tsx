"use client";

import { COURSE_CATEGORIES, COURSE_LEVELS } from "@/lib/constants";

interface CourseFilterProps {
  selectedCategory: string;
  selectedLevel: string;
  onCategoryChange: (category: string) => void;
  onLevelChange: (level: string) => void;
}

export default function CourseFilter({
  selectedCategory,
  selectedLevel,
  onCategoryChange,
  onLevelChange,
}: CourseFilterProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {COURSE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? "bg-blue-700 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Level filter */}
      <select
        value={selectedLevel}
        onChange={(e) => onLevelChange(e.target.value)}
        className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {COURSE_LEVELS.map((level) => (
          <option key={level} value={level}>
            {level === "All" ? "All Levels" : level.charAt(0).toUpperCase() + level.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
