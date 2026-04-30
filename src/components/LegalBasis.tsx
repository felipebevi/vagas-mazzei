import { Scale, ExternalLink, BookOpen } from "lucide-react";
import leiSindico from "@/assets/lei-sindico-cumprir-convencao.png";
import leiOmissao from "@/assets/lei-omissao-ato-ilicito.png";
import leiIndenizacao from "@/assets/lei-indenizacao-dano.png";

const LegalBasis = () => {
  const articles = [
    {
      image: leiSindico,
      alt: "Art. 1.348 do Código Civil",
      tag: "Art. 1.348, IV",
      title: "O síndico é obrigado a cumprir a convenção",
      description:
        "O Código Civil é claro: compete ao síndico cumprir e fazer cumprir a convenção, o regimento interno e as determinações da assembleia. Não é uma escolha pessoal — é um dever legal. Se a convenção prevê 9 vagas para motos, o síndico tem o dever de demarcá-las e oficializá-las.",
    },
    {
      image: leiOmissao,
      alt: "Art. 186 do Código Civil",
      tag: "Art. 186",
      title: "A omissão também é ato ilícito",
      description:
        "Não basta não agir. A lei estabelece que aquele que, por ação ou omissão voluntária, negligência ou imprudência, violar direito e causar dano a outrem, ainda que exclusivamente moral, comete ato ilícito. Ignorar uma regra da convenção e não tomar providências é, juridicamente, uma conduta ilícita.",
    },
    {
      image: leiIndenizacao,
      alt: "Art. 927 do Código Civil",
      tag: "Art. 927",
      title: "Quem causa dano (mesmo por omissão) é obrigado a reparar",
      description:
        "Encerrando a lógica: aquele que, por ato ilícito (incluindo a omissão do art. 186), causar dano a outrem, fica obrigado a repará-lo. Ou seja, se a omissão do síndico em cumprir a convenção causar dano a um morador, ele responde pessoalmente pela reparação.",
    },
  ];

  return (
    <section id="base-legal" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <Scale size={16} />
            Base Legal
          </span>
          <h2 className="section-title">O Que Diz o Código Civil</h2>
          <p className="section-subtitle">
            A título de informação, assim como foi feito com a convenção, seguem os artigos do
            Código Civil Brasileiro (Lei nº 10.406/2002) que sustentam tudo o que foi exposto.
          </p>
        </div>

        <div className="space-y-8">
          {articles.map((art, i) => (
            <div
              key={i}
              className="bg-card border-2 border-border rounded-2xl p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center"
            >
              <div className="image-frame">
                <img src={art.image} alt={art.alt} className="w-full" />
              </div>
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-3">
                  <BookOpen size={14} />
                  {art.tag}
                </span>
                <h3 className="text-xl md:text-2xl font-bold font-display mb-3">{art.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{art.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Consulte na íntegra o Código Civil Brasileiro no site oficial do Planalto:
          </p>
          <a
            href="https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            <Scale size={18} />
            Ler o Código Civil (Lei 10.406/2002)
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LegalBasis;