import { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Tips for Learning Web Development Faster",
    slug: "10-tips-learning-web-development",
    excerpt:
      "Accelerate your web development journey with these practical tips from industry professionals.",
    content:
      "Learning web development can feel overwhelming at first, but with the right approach you can make rapid progress...",
    thumbnail: "",
    author: {
      id: "a1",
      name: "Sarah Johnson",
      avatar: "",
    },
    tags: ["Learning", "Web Development", "Tips"],
    category: "Learning",
    publishedAt: "2024-03-15",
    readingTime: "5 min read",
    isPublished: true,
  },
  {
    id: "2",
    title: "Why Every Developer Should Learn TypeScript",
    slug: "why-learn-typescript",
    excerpt:
      "TypeScript is transforming how developers write JavaScript. Here's why you should make the switch.",
    content:
      "TypeScript has taken the JavaScript ecosystem by storm, and for good reason...",
    thumbnail: "",
    author: {
      id: "a2",
      name: "David Kim",
      avatar: "",
    },
    tags: ["TypeScript", "JavaScript", "Development"],
    category: "Technology",
    publishedAt: "2024-03-22",
    readingTime: "7 min read",
    isPublished: true,
  },
  {
    id: "3",
    title: "The Future of Online Education",
    slug: "future-of-online-education",
    excerpt:
      "How technology is reshaping the way we learn and what it means for students and educators.",
    content:
      "Online education has seen explosive growth over the past few years...",
    thumbnail: "",
    author: {
      id: "a3",
      name: "Priya Patel",
      avatar: "",
    },
    tags: ["Education", "Technology", "eLearning"],
    category: "Education",
    publishedAt: "2024-04-01",
    readingTime: "6 min read",
    isPublished: true,
  },
];
