import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import BlogCard from "@/components/blog/BlogCard";
import { getBlogPosts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest articles on technology, design, and education.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <MainLayout>
      <div className="bg-blue-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Blog</h1>
          <p className="mt-2 text-gray-600">
            Insights, tips, and stories from our community.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
