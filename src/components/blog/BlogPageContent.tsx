"use client";

import { useLanguage } from "@/context/LanguageContext";
import BlogCard from "@/components/blog/BlogCard";
import { BlogPost } from "@/types/blog";

interface BlogPageContentProps {
  posts: BlogPost[];
}

export default function BlogPageContent({ posts }: BlogPageContentProps) {
  const { t } = useLanguage();

  return (
    <>
      <div className="bg-blue-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {t.blog.pageTitle}
          </h1>
          <p className="mt-2 text-gray-600">{t.blog.pageSubtitle}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
