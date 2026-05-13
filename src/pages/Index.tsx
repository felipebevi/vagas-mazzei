import Hero from "@/components/Hero";
import KeyPointsSummary from "@/components/KeyPointsSummary";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import GarageMap from "@/components/GarageMap";
import Rules from "@/components/Rules";
import Timeline from "@/components/Timeline";
import LegalBasis from "@/components/LegalBasis";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Alerta de atualização */}
      <div className="bg-destructive/10 border-b-2 border-destructive/20 px-4 py-3 text-center">
        <p className="text-sm md:text-base text-foreground">
          ⚠️ <strong>Esta campanha de conscientização foi encerrada.</strong>{" "}
          O site foi atualizado com os fatos que se seguiram.{" "}
          <a href="#oque-aconteceu" className="text-primary font-semibold underline underline-offset-2 hover:opacity-80">
            Veja o que aconteceu →
          </a>
        </p>
      </div>
      <KeyPointsSummary />
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <GarageMap />
      <Rules />
      <Timeline />
      <LegalBasis />
      <Footer />
    </main>
  );
};

export default Index;
