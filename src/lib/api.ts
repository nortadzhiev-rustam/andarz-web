import { blogPosts } from "@/data/blogPosts";
import { BlogPost } from "@/types/blog";

export async function getBlogPosts(): Promise<BlogPost[]> {
  return blogPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return blogPosts.find((p) => p.slug === slug);
}
