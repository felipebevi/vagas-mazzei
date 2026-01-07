import { FileText, Check } from "lucide-react";

const Rules = () => {
  const mainRules = [
    {
      title: "Caráter Temporário",
      description: "Vagas válidas por 1 ano, renovadas em Assembleia Geral anual"
    },
    {
      title: "5 Vagas Disponíveis",
      description: "Inicialmente 5 vagas; se houver excesso, sorteio anual define usuários"
    },
    {
      title: "Taxa de R$ 50/mês",
      description: "Apenas para quem usa vaga de carro + vaga de moto adicional"
    },
    {
      title: "Registro Obrigatório",
      description: "Cada moto deve ser registrada junto à administração"
    },
    {
      title: "Revisão Semestral",
      description: "Condições avaliadas a cada 6 meses pela administração"
    },
    {
      title: "100% Reversível",
      description: "A continuidade depende de aprovação em Assembleia anual"
    }
  ];

  return (
    <section id="regras" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <FileText size={16} />
            Documento Completo
          </span>
          <h2 className="section-title">Regras Propostas</h2>
          <p className="section-subtitle">
            Tudo foi pensado com cuidado! Regras claras para garantir harmonia e organização.
          </p>
        </div>

        {/* Grid de regras */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mainRules.map((rule, index) => (
            <div 
              key={index} 
              className="bg-background p-6 rounded-xl border border-border flex gap-4"
            >
              <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="text-success" size={20} />
              </div>
              <div>
                <h4 className="font-bold mb-1">{rule.title}</h4>
                <p className="text-sm text-muted-foreground">{rule.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detalhe especial sobre taxa */}
        <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold mb-4 font-display text-center">
            💰 Sobre a Taxa de Utilização
          </h3>
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Se você usa só moto:</strong> Não paga taxa adicional 
              (você já contribui liberando espaço na garagem!)
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Se você usa carro + moto:</strong> Taxa de R$ 50/mês 
              que gera receita para o condomínio
            </p>
          </div>
        </div>

        {/* Call to action para ver documento completo */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            O documento completo com todas as regras está disponível no álbum de fotos
          </p>
          <a 
            href="https://photos.app.goo.gl/oV3NH6soBNURfFB2A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            <FileText size={18} />
            Ver Documento Completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Rules;
