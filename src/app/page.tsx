import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/home/Hero";
import HomeServicesSection from "@/components/home/HomeServicesSection";

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <HomeServicesSection />
    </MainLayout>
  );
}
