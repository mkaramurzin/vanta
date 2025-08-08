import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Benefits from "@/components/Benefits";
import Credentials from "@/components/Credentials";
import Process from "@/components/Process";

export default function Home() {
  return (
    <>
      <Hero />
      <Credentials />
      <ServicesSection />
      <Process />
      <Benefits />
    </>
  );
}
