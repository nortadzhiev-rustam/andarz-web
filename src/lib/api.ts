import { courses } from "@/data/courses";
import { blogPosts } from "@/data/blogPosts";
import { Course } from "@/types/course";
import { BlogPost } from "@/types/blog";

export async function getCourses(): Promise<Course[]> {
  return courses;
}

export async function getCourseById(id: string): Promise<Course | undefined> {
  return courses.find((c) => c.id === id);
}

export async function getCourseBySlug(slug: string): Promise<Course | undefined> {
  return courses.find((c) => c.slug === slug);
}

export async function getFeaturedCourses(): Promise<Course[]> {
  return courses.filter((c) => c.isFeatured);
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return blogPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return blogPosts.find((p) => p.slug === slug);
}
