import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import { formatDate } from "@/utils/helpers";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-xl overflow-hidden bg-white shadow hover:shadow-md transition-shadow ring-1 ring-gray-100"
    >
      {/* Thumbnail */}
      <div className="relative h-48 w-full bg-blue-50">
        {post.thumbnail ? (
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-4xl text-blue-200 font-bold">
            {post.title[0]}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-blue-700">
          {post.category}
        </span>
        <h3 className="mt-1 text-sm font-semibold text-gray-900 group-hover:text-blue-700 line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 text-xs text-gray-500 line-clamp-3">{post.excerpt}</p>

        {/* Footer */}
        <div className="mt-auto pt-4 flex items-center justify-between text-xs text-gray-400">
          <span>{post.author.name}</span>
          <div className="flex items-center gap-2">
            <span>{formatDate(post.publishedAt)}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
