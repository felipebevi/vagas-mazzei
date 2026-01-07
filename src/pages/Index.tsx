import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import GarageMap from "@/components/GarageMap";
import Rules from "@/components/Rules";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <GarageMap />
      <Rules />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
