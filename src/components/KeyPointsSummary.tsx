import { Scale, History } from "lucide-react";

const points = [
  {
    title: "A lei obriga o síndico a cumprir a convenção",
    description:
      "O Código Civil (art. 1.348, IV) determina que compete ao síndico cumprir e fazer cumprir a convenção. É dever legal, não escolha pessoal.",
  },
  {
    title: "A convenção exige vagas demarcadas para motos",
    description:
      "A convenção do condomínio (item b.1.B) prevê expressamente 09 (nove) vagas para motos. Cabe à administração apenas demarcá-las.",
  },
  {
    title: "O síndico descumpre, de forma arbitrária, a lei e a convenção",
    description:
      "Mesmo após propostas e notificação extrajudicial, o síndico se recusa a demarcar as vagas, ignorando a lei e a convenção, sem qualquer justificativa.",
  },
  {
    title: "Precedente histórico: vaga para moto já foi aprovada em 2010",
    description:
      "Em defesa perante o Juízo, o próprio condomínio apresentou ata de 02/06/2010 aprovando, por unanimidade, vaga fixa para moto. Isso invalida qualquer alegação de impossibilidade.",
  },
];

const KeyPointsSummary = () => {
  return (
    <section className="bg-card border-b border-border px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <Scale size={16} />
            Resumo do Caso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">Pontos-chave</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Os quatro pilares jurídicos que sustentam este registro de transparência.
          </p>
        </div>

        <ol className="space-y-4 max-w-3xl mx-auto">
          {points.map((point, index) => (
            <li
              key={index}
              className="bg-background border border-border rounded-xl p-5 hover:border-primary/40 transition-colors flex gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold font-display flex items-center justify-center flex-shrink-0">
                {index + 1}
              </div>
              <div>
                <h3 className="font-bold font-display text-xl leading-tight mb-2">
                  {point.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 text-center">
          <a
            href="#base-legal"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Ver base legal completa →
          </a>
        </div>
      </div>
    </section>
  );
};

export default KeyPointsSummary;
