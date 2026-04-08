import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Andarz LLC — our mission, activities, expert team, and impact on education in Tajikistan.",
};

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutContent />
    </MainLayout>
  );
}
