import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import BlogPageContent from "@/components/blog/BlogPageContent";
import { getBlogPosts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest articles on education, methodology, and learning.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <MainLayout>
      <BlogPageContent posts={posts} />
    </MainLayout>
  );
}
