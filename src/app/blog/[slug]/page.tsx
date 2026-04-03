import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";
import { getBlogPostBySlug } from "@/lib/api";
import { formatDate } from "@/utils/helpers";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <MainLayout>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Category */}
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
          {post.category}
        </span>

        {/* Title */}
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-full bg-blue-100 overflow-hidden">
              {post.author.avatar && (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              )}
            </div>
            <span>{post.author.name}</span>
          </div>
          <span>·</span>
          <span>{formatDate(post.publishedAt)}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>

        {/* Thumbnail */}
        <div className="relative mt-6 h-64 w-full rounded-xl overflow-hidden bg-blue-50">
          {post.thumbnail && (
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
              sizes="768px"
            />
          )}
        </div>

        {/* Content */}
        <div className="mt-8 max-w-none text-base leading-7 text-gray-700">
          <p className="mt-4">{post.content}</p>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </MainLayout>
  );
}
