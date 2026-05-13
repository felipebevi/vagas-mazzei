import { FileText, Ban, Shield, Gavel, Car, AlertTriangle } from "lucide-react";

const points = [
  {
    icon: FileText,
    title: "9 vagas para motos já existem na convenção",
    description:
      "O item b.1.B da convenção do condomínio prevê expressamente 09 (nove) vagas para motos. Não é criação nova — é cumprimento do que já é regra.",
  },
  {
    icon: Ban,
    title: "Síndico se recusa a cumprir a convenção",
    description:
      "Mesmo após propostas, documentos e notificação extrajudicial, o síndico ignora a regra existente e empurra o problema para frente.",
  },
  {
    icon: AlertTriangle,
    title: "Fake news sobre aumento do condomínio",
    description:
      "Foi espalhada a narrativa falsa de que demarcar as vagas encareceria o condomínio, sem qualquer base técnica ou no contrato de seguro.",
  },
  {
    icon: Shield,
    title: "Ameaças, agressão e Boletim de Ocorrência",
    description:
      "Após a assembleia, sofri ataques verbais e tentativa de agressão física na garagem, resultando em registro de B.O. por ameaça.",
  },
  {
    icon: Car,
    title: "Carro na rua para proteger a moto",
    description:
      "Sem vaga demarcada, sou obrigado a deixar o carro na rua — exposto a furto e acidentes — para guardar a moto, bem mais fácil de furtar, na garagem.",
  },
  {
    icon: Gavel,
    title: "Multa abusiva de 10 cotas sem direito de defesa",
    description:
      "Em 06/05/2026, o síndico aplicou unilateralmente a multa máxima (10 cotas condominiais) com acusações falsas, sem contraditório nem ampla defesa.",
  },
];

const KeyPointsSummary = () => {
  return (
    <section className="bg-card border-b border-border px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <FileText size={16} />
            Resumo do Caso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">Pontos-chave</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um panorama rápido dos fatos antes de você navegar pelo site.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-5 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary" size={18} />
                  </div>
                  <h3 className="font-bold font-display text-base leading-tight pt-1">
                    {point.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#oque-aconteceu"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Ver linha do tempo completa →
          </a>
        </div>
      </div>
    </section>
  );
};

export default KeyPointsSummary;