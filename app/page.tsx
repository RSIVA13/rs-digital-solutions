import Hero from "@/components/Hero";
import AboutStats from '@/components/AboutStats'
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";

export const metadata = {
  title: "RS Digital Solutions | Web Development Company",
  description: "Modern websites using Next.js",
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStats/>
      <Services/>
      <WhyChoose/>
      
    </>
  );
}
