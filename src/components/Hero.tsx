import { ArrowDown, Users } from "lucide-react";
import motoVaga1 from "@/assets/moto-vaga-carro-1.png";
import motoVaga2 from "@/assets/moto-vaga-carro-2.png";

const Hero = () => {
  const scrollToContent = () => {
    const element = document.getElementById("problema");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-12">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            <Users size={16} />
            Campanha Residencial Vila Mazzei
          </span>
        </div>

        {/* Título principal */}
        <h1 className="section-title text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Você está feliz com isso?
        </h1>

        {/* Subtítulo provocativo */}
        <p className="text-xl md:text-2xl text-center text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Um veículo tão <span className="text-primary font-bold">pequeno</span> ocupando uma vaga tão <span className="text-accent font-bold">grande</span>?
        </p>

        {/* Imagens lado a lado */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="image-frame group hover:scale-[1.02] transition-transform duration-300">
            <img 
              src={motoVaga1} 
              alt="Moto ocupando vaga de carro - situação atual" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="bg-card p-4 text-center">
              <p className="font-semibold text-foreground">Situação Atual</p>
              <p className="text-sm text-muted-foreground">Uma moto em uma vaga de carro</p>
            </div>
          </div>
          <div className="image-frame group hover:scale-[1.02] transition-transform duration-300">
            <img 
              src={motoVaga2} 
              alt="Moto ocupando vaga de carro - outra perspectiva" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="bg-card p-4 text-center">
              <p className="font-semibold text-foreground">Espaço desperdiçado</p>
              <p className="text-sm text-muted-foreground">Poderia ser uma vaga para seu carro!</p>
            </div>
          </div>
        </div>

        {/* Mensagem reflexiva */}
        <div className="highlight-box max-w-2xl mx-auto text-center mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-lg font-medium text-accent-foreground">
            🤔 Hoje é apenas <strong>1 moto</strong>. Amanhã pode ser <strong>você</strong> precisando de uma solução. <br />
            <span className="text-primary">Juntos podemos resolver isso de forma inteligente!</span>
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <button 
            onClick={scrollToContent}
            className="btn-cta flex items-center gap-2"
          >
            Descubra a Solução
            <ArrowDown size={20} className="animate-bounce" />
          </button>
          <p className="text-sm text-muted-foreground">Assembleia em breve • Sua voz importa!</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
