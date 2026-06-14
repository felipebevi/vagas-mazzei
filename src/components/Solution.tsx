import { CheckCircle, MapPin, Sparkles } from "lucide-react";
import opcao1 from "@/assets/opcao-1.jpg";
import opcao2 from "@/assets/opcao-2.jpg";
import sugestao1 from "@/assets/sugestao-1.jpg";
import sugestao2 from "@/assets/sugestao-2.jpg";
import sugestao3 from "@/assets/sugestao-3.jpg";

const Solution = () => {
  const espacosSugeridos = [
    {
      image: sugestao1,
      title: "Espaço entre pilares 1",
      description: "Área inutilizada ao lado do pilar - não atrapalha circulação"
    },
    {
      image: sugestao2,
      title: "Espaço entre pilares 2",
      description: "Corredor lateral sem uso atual"
    },
    {
      image: sugestao3,
      title: "Área próxima ao portão",
      description: "Espaço morto que pode ser aproveitado"
    }
  ];

  return (
    <section id="solucao" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 text-success rounded-full text-sm font-semibold mb-4">
            <Sparkles size={16} />
            A Solução Inteligente
          </span>
          <h2 className="section-title">Espaços que já existem!</h2>
          <p className="section-subtitle">
            Identificamos áreas "mortas" na garagem que podem ser transformadas em vagas de moto, 
            sem afetar a circulação ou as manobras.
          </p>
        </div>

        {/* Opções principais */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card-elevated overflow-hidden group">
            <div className="relative overflow-hidden">
              <img 
                src={opcao1} 
                alt="Opção 1 - Vaga morta" 
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
                Opção 1
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 font-display flex items-center gap-2">
                <MapPin className="text-primary" size={20} />
                Lotear 1 vaga morta
              </h3>
              <p className="text-muted-foreground">
                Espaço que hoje não é utilizado por ninguém, transformado em vaga útil para motos.
              </p>
              <p className="mt-3 text-sm bg-highlight/10 text-highlight border border-highlight/20 rounded-lg p-3">
                <strong>OBS:</strong> Esta foi exatamente a solução adotada pelo condomínio em <strong>02/06/2010</strong> para o <strong>apartamento 22</strong>, quando havia apenas 1 moto no prédio — a moto foi autorizada a permanecer em vaga existente, sem necessidade de nova demarcação.
              </p>
            </div>
          </div>

          <div className="card-elevated overflow-hidden group">
            <div className="relative overflow-hidden">
              <img 
                src={opcao2} 
                alt="Opção 2 - 5 vagas rotativas entre pilares" 
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold">
                Opção 2
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 font-display flex items-center gap-2">
                <MapPin className="text-accent" size={20} />
                5 vagas rotativas entre pilares
              </h3>
              <p className="text-muted-foreground">
                Espaços entre os pilares da garagem que não afetam a circulação dos carros.
              </p>
            </div>
          </div>
        </div>

        {/* Galeria de sugestões */}
        <h3 className="text-2xl font-bold text-center mb-8 font-display">
          Veja mais ângulos dos espaços sugeridos
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {espacosSugeridos.map((espaco, index) => (
            <div key={index} className="image-frame group">
              <img 
                src={espaco.image} 
                alt={espaco.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="bg-card p-4">
                <h4 className="font-semibold mb-1">{espaco.title}</h4>
                <p className="text-sm text-muted-foreground">{espaco.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Vantagens */}
        <div className="bg-gradient-to-r from-success/5 via-success/10 to-success/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 font-display text-success">
            ✓ Por que essa é a melhor solução?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Não afeta vagas de carros",
              "Não atrapalha circulação",
              "Não afeta manobras",
              "Aproveita espaços ociosos"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-xl">
                <CheckCircle className="text-success flex-shrink-0" size={24} />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
