import { DollarSign, RefreshCcw, Users, Heart, Shield, Clock } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Receita Extra",
      description: "Taxa de R$ 50/mês para quem usar vaga adicional de moto gera receita para o condomínio.",
      color: "text-success"
    },
    {
      icon: RefreshCcw,
      title: "Totalmente Reversível",
      description: "Não gostou? Em qualquer assembleia futura, as vagas podem ser removidas. Zero risco!",
      color: "text-highlight"
    },
    {
      icon: Users,
      title: "Convivência Harmônica",
      description: "Motos em seus espaços, carros em suas vagas. Cada um no seu lugar, todos felizes.",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Senso de Comunidade",
      description: "Hoje você ajuda um vizinho, amanhã ele pode ajudar você. Somos uma comunidade!",
      color: "text-destructive"
    },
    {
      icon: Shield,
      title: "Regras Claras",
      description: "Documento com todas as regras já preparado. Sem confusão, sem interpretações.",
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Caráter Temporário",
      description: "Renovação anual em assembleia. Total controle dos moradores sobre a decisão.",
      color: "text-secondary-foreground"
    }
  ];

  return (
    <section id="beneficios" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
            <Heart size={16} className="text-accent" />
            Todos Ganham
          </span>
          <h2 className="section-title">Benefícios para Todo o Condomínio</h2>
          <p className="section-subtitle">
            Uma decisão que fortalece nossa comunidade e valoriza nosso espaço comum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-background p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
            >
              <div className={`w-14 h-14 mb-6 bg-muted rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <benefit.icon className={benefit.color} size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;
