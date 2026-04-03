export type CourseLevel = "beginner" | "intermediate" | "advanced";

export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface CourseLesson {
  id: string;
  title: string;
  duration: string;
  videoUrl?: string;
  isFree: boolean;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: CourseLesson[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  price: number;
  discountPrice?: number;
  level: CourseLevel;
  category: string;
  tags: string[];
  instructor: Instructor;
  modules: CourseModule[];
  duration: string;
  studentsCount: number;
  rating: number;
  reviewsCount: number;
  language: string;
  lastUpdated: string;
  isPublished: boolean;
  isFeatured: boolean;
}
