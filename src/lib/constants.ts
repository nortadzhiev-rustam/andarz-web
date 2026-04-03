export const SITE_NAME = "Andarz";
export const SITE_TAGLINE = "Learn. Grow. Succeed.";
export const SITE_DESCRIPTION =
  "Andarz is an educational platform offering high-quality online courses in technology, design, and more.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const COURSE_CATEGORIES = [
  "All",
  "Web Development",
  "Backend Development",
  "Data Science",
  "Design",
  "Mobile Development",
  "DevOps",
];

export const COURSE_LEVELS = ["All", "beginner", "intermediate", "advanced"];
