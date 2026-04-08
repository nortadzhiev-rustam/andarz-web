import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/home/Hero";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import HomeServicesSection from "@/components/home/HomeServicesSection";
import { getFeaturedCourses } from "@/lib/api";

export default async function HomePage() {
  const featuredCourses = await getFeaturedCourses();

  return (
    <MainLayout>
      <Hero />
      <FeaturedCourses courses={featuredCourses} />
      <HomeServicesSection />
    </MainLayout>
  );
}
