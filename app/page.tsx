import Hero from "@/components/Hero";
import AboutStats from '@/components/AboutStats'
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";

export const metadata = {
  title: "RS Digital Solutions in Kolathur Chennai | Web Design & Development Company",
  description: "RS Digital Solutions in Kolathur, Chennai offers professional web design, web development and digital marketing services for small businesses.",
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
