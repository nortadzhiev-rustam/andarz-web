# andarz-web

An educational web platform built with [Next.js](https://nextjs.org), TypeScript, and Tailwind CSS.

## Features

- 📚 **Course catalog** — Browse, filter, and search courses by category and level
- 📖 **Course detail pages** — Full curriculum, instructor info, and enrollment CTA
- ✍️ **Blog** — Articles on technology, design, and education
- 👤 **Authentication** — Login and registration forms
- 📬 **Contact page** — Contact form with validation
- ℹ️ **About page** — Mission, values, and team

## Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── (auth)/               # Auth route group (no navbar/footer)
│   │   ├── login/            # Login page
│   │   └── register/         # Register page
│   ├── about/                # About page
│   ├── api/                  # API routes
│   │   ├── courses/          # Courses API
│   │   └── users/            # Users API
│   ├── blog/                 # Blog listing + [slug] detail
│   ├── contact/              # Contact page
│   ├── courses/              # Courses listing + [id] detail
│   ├── globals.css
│   ├── layout.tsx            # Root layout with providers
│   └── page.tsx              # Home page
├── components/
│   ├── blog/                 # BlogCard
│   ├── courses/              # CourseCard, CourseFilter, CoursesList
│   ├── home/                 # Hero, FeaturedCourses
│   └── layout/               # Navbar, Footer, MainLayout
├── context/                  # AuthContext, CartContext
├── data/                     # Mock data (courses, blogPosts)
├── hooks/                    # useCourses, useAuth
├── lib/                      # api.ts, constants.ts
├── types/                    # TypeScript types (course, user, blog)
└── utils/                    # helpers.ts (formatDate, formatPrice, etc.)
public/
├── images/
│   ├── blog/
│   ├── courses/
│   └── team/
└── icons/
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```
