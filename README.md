# andarz-web

The official website of **Andarz LLC** — an educational and publishing organisation dedicated to improving education quality in the Republic of Tajikistan.

Built with [Next.js](https://nextjs.org), TypeScript, and Tailwind CSS.

## About Andarz

Andarz LLC has been operating since **2023** with the mission of building a modern, safe, and sustainable learning environment in Tajikistan. The company takes a systemic approach that unites training, monitoring, digital analytics, and educational product development.

### Service Areas

| # | Area | Description |
|---|------|-------------|
| 1 | **Professional Development** | Practical seminars (1–2/year) for school leaders, teachers, educators, assistants, students, and parents |
| 2 | **Education Quality Monitoring** | Expert lesson visits, programme assessments, individual consultations, and school support |
| 3 | **Digital Ecosystem** | Student testing, knowledge assessment, results analytics, gap identification, and feedback |
| 4 | **STEM Programmes** | "Science of the Future" — English-language, international standards, spiral methodology, digital integration |
| 5 | **Publishing** | 19+ books published, including world classics translations and educational materials |
| 6 | **Consulting** | School opening & licensing, curriculum design, management, quality improvement, safe environments |

### Scale

- 15–20 partner schools · 10–15 kindergartens
- 20+ seminars per year · 300–500 participants per event
- 12 subject experts · 6 preschool development specialists
- 19+ books published

## Features

- 🏫 **Home page** — Mission overview, service areas, and key stats
- ℹ️ **About page** — Mission, strategic goals, six activity areas, scale stats, and competitive advantages
- 📚 **Courses** — Browse, filter, and search programme offerings by category and level
- 📖 **Course detail pages** — Full curriculum, instructor info, and enrolment CTA
- ✍️ **Blog** — Articles on education, technology, and learning
- 👤 **Authentication** — Login and registration forms
- 📬 **Contact page** — Contact form with validation
- 🌐 **Multilingual** — English, Russian, and Tajik language support

## Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── (auth)/               # Auth route group (no navbar/footer)
│   │   ├── login/            # Login page
│   │   └── register/         # Register page
│   ├── about/                # About page (mission, activities, stats)
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
│   └── layout/               # Navbar, Footer, MainLayout, LanguageSwitcher
├── context/                  # AuthContext, CartContext, LanguageContext
├── data/                     # Mock data (courses, blogPosts)
├── hooks/                    # useCourses, useAuth
├── lib/                      # api.ts, constants.ts, translations.ts
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
