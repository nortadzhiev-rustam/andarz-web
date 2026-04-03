export interface BlogAuthor {
  id: string;
  name: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  author: BlogAuthor;
  tags: string[];
  category: string;
  publishedAt: string;
  readingTime: string;
  isPublished: boolean;
}
