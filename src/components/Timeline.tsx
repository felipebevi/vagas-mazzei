import {
  AlertTriangle,
  FileText,
  Scale,
  Shield,
  Heart,
  ExternalLink,
  Ban,
  Megaphone,
  Gavel,
  Users,
  Car,
  HandHeart,
} from "lucide-react";
import convencaoVagasMoto from "@/assets/convencao-vagas-moto.png";
import convencaoManobrista from "@/assets/convencao-manobrista.png";

const Timeline = () => {
  const events = [
    {
      icon: <HandHeart className="text-primary" size={20} />,
      color: "bg-primary/10 border-primary/30",
      title: "Nov/2024 — Candidatura voluntária a subsíndico",
      description:
        "Por livre e espontânea vontade, me candidatei a subsíndico e fui eleito pelos moradores. A intenção era ajudar o síndico, que aparentava estar sobrecarregado e sem conseguir cumprir as demandas do prédio.",
    },
    {
      icon: <FileText className="text-primary" size={20} />,
      color: "bg-primary/10 border-primary/30",
      title: "Jan/2025 — Propostas enviadas ao síndico (vagas, bicicletas, elevadores)",
      description:
        "Logo após assumir, encaminhei ao síndico todos os documentos e sugestões para discutirmos e demarcarmos as vagas de moto previstas em convenção, além da organização do bicicletário e da contratação de uma empresa para cuidar dos elevadores. Fui sistematicamente ignorado em todos esses pontos.",
    },
    {
      icon: <AlertTriangle className="text-warning" size={20} />,
      color: "bg-warning/10 border-warning/30",
      title: "Mar/2025 — Elevador quebra e expõe a falta de ação do síndico",
      description:
        'Um dos elevadores quebrou e o síndico chegou a comentar: "para que 2 elevadores gerando custo? apenas 1 funciona, no meu ap da praia é assim". Tive que negociar pessoalmente com a empresa de manutenção para reduzir o valor e viabilizar o reparo, depois de quase 6 meses com o equipamento parado. Não foi o síndico quem resolveu.',
    },
    {
      icon: <AlertTriangle className="text-warning" size={20} />,
      color: "bg-warning/10 border-warning/30",
      title: "Fim de 2025 — Padrão de omissão se consolida",
      description:
        "Continuei cobrando ao longo do ano, mas ficou evidente que o síndico só quer parecer bonzinho para todos e empurra os problemas para frente — exatamente o que está fazendo agora com a questão das vagas de moto, gerando custo e ônus a todos os moradores por preciosismo e negligência.",
    },
    {
      icon: <Megaphone className="text-primary" size={20} />,
      color: "bg-primary/10 border-primary/30",
      title: "Campanha de Conscientização",
      description:
        "Criação desta landing page e materiais para informar os moradores sobre a proposta de vagas para motos em espaços ociosos, pensando no bem-estar coletivo.",
    },
    {
      icon: <Users className="text-highlight" size={20} />,
      color: "bg-highlight/10 border-highlight/30",
      title: "Assembleia Realizada",
      description:
        "A proposta foi levada à assembleia com fotos, mapa e regras claras. Mesmo com espaços claramente disponíveis e sem atrapalhar ninguém, a discussão tomou outro rumo.",
    },
    {
      icon: <Ban className="text-destructive" size={20} />,
      color: "bg-destructive/10 border-destructive/30",
      title: 'Fake News: "O condomínio vai ficar mais caro"',
      description:
        'A presidente da mesa afirmou que NÃO haveria mudança no valor do seguro, mas usou a frase "aconselho a ver o valor do prêmio" como pretexto. O síndico abraçou essa narrativa imediatamente, repetindo em voz alta que "vai impactar no valor do condomínio" — o que não é verdade.',
    },
    {
      icon: <FileText className="text-accent-foreground" size={20} />,
      color: "bg-accent/20 border-accent/40",
      title: "Convenção Apresentada: 9 Vagas para Motos JÁ Existem",
      description:
        "Durante a assembleia, a própria convenção do condomínio foi apresentada, revelando que JÁ EXISTEM 9 vagas para motocicletas previstas no documento oficial. Ninguém sequer sabia disso — nem síndico, nem administradora, nem moradores.",
      highlight: true,
    },
    {
      icon: <AlertTriangle className="text-warning" size={20} />,
      color: "bg-warning/10 border-warning/30",
      title: "Humilhação e Ataque Pessoal",
      description:
        'Ao apresentar a convenção, a administradora do condomínio tomou a palavra e disse que eu deveria "procurar via judicial com a construtora" e que "não era um problema a ser discutido" — mesmo sendo uma regra que JÁ EXISTE na convenção vigente.',
    },
    {
      icon: <Gavel className="text-primary" size={20} />,
      color: "bg-primary/10 border-primary/30",
      title: "Notificação Extrajudicial Enviada",
      description:
        "Após a assembleia, foi enviada uma notificação extrajudicial à administradora e ao condomínio (na pessoa do síndico) solicitando a demarcação das vagas previstas na convenção. Após quase 1 mês, nenhuma resposta foi recebida.",
    },
    {
      icon: <Shield className="text-destructive" size={20} />,
      color: "bg-destructive/10 border-destructive/30",
      title: "Agressão e Boletim de Ocorrência",
      description:
        "Após a assembleia, um grupo de moradores apareceu na garagem para ataques verbais. Um deles partiu para agressão física, sendo impedido por outros moradores. Foi necessário buscar abrigo em outro local e registrar um B.O. de ameaça.",
    },
    {
      icon: <Scale className="text-highlight" size={20} />,
      color: "bg-highlight/10 border-highlight/30",
      title: "Via Judicial: Última Alternativa",
      description:
        "Sem resposta à notificação e após sofrer ameaças, a via judicial se tornou a única alternativa para garantir o cumprimento de algo que JÁ ESTÁ NA CONVENÇÃO — um direito de todos os moradores, não apenas de um.",
    },
    {
      icon: <Car className="text-destructive" size={20} />,
      color: "bg-destructive/10 border-destructive/30",
      title: "25/04/2026 — Sem vagas emprestadas, carro vai para a rua",
      description:
        "Acabaram as vagas livres que vizinhos solidários cediam temporariamente. A partir de 25/04/2026, sou obrigado a deixar meu carro estacionado na rua para proteger a motocicleta — bem muito mais fácil de furtar — dentro da garagem. O carro fica exposto a acidentes, intempéries e furto, com custo agregado de um jogo de travas de roda, para evitar o furto das mesmas, o que é uma prática frequente na nossa região, inclusive em frente ao prédio à luz do dia, como já ocorreu diversas vezes com outros vizinhos. Tudo isso porque o síndico se recusa a cumprir a convenção.",
    },
    {
      icon: <Gavel className="text-destructive" size={20} />,
      color: "bg-destructive/10 border-destructive/30",
      title: "06/05/2026 — Multa abusiva de 10 cotas condominiais sem direito de defesa",
      description:
        "O síndico enviou um comunicado com diversas acusações graves e mentirosas, informando unilateralmente a aplicação de multa de 10 cotas condominiais (o máximo permitido), sem o mínimo direito de defesa, contraditório ou justificativa formal. O mesmo comunicado passou a ser repetido como resposta automática para todas as minhas mensagens na administradora, encerrando de forma ditatorial e covarde qualquer canal de diálogo com a administração — ao invés de buscar entender o problema e construir uma solução. Some-se a isso a existência de um grupo paralelo de WhatsApp usado para alienar os demais moradores, criando um clima de exclusão e perseguição em vez de cooperação.",
    },
  ];

  return (
    <section id="oque-aconteceu" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-semibold mb-4">
            <AlertTriangle size={16} />
            Transparência Total
          </span>
          <h2 className="section-title">O Que Aconteceu</h2>
          <p className="section-subtitle">
            Este site foi criado para conscientização e diálogo. Mas a realidade que se seguiu precisa ser registrada
            com transparência.
          </p>
        </div>

        {/* Contexto box */}
        <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6 md:p-8 mb-12">
          <div className="flex items-start gap-3 mb-4">
            <Heart className="text-primary flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold font-display mb-2">Por que este site existe?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Este site foi criado com o objetivo de <strong className="text-foreground">conscientizar</strong> os
                moradores, mostrar que motos em espaços ociosos{" "}
                <strong className="text-foreground">não ocupam nem atrapalham ninguém</strong>, e que não faz sentido
                uma moto usar uma vaga de carro quando pensamos na{" "}
                <strong className="text-foreground">coletividade e bem-estar de todos</strong>. Infelizmente, sem
                sucesso no diálogo, sou obrigado a buscar meus direitos sozinho, via judicial, por algo que{" "}
                <strong className="text-primary">já é regra na convenção do próprio condomínio</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={index} className={`relative flex gap-4 md:gap-6 ${event.highlight ? "" : ""}`}>
                <div
                  className={`relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full ${event.color} border-2 flex items-center justify-center flex-shrink-0`}
                >
                  {event.icon}
                </div>
                <div
                  className={`flex-1 ${event.highlight ? "bg-accent/10 border-2 border-accent/30 rounded-xl p-5" : "bg-background border border-border rounded-xl p-5"}`}
                >
                  <h4 className="font-bold text-lg mb-2 font-display">{event.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Convenção - Provas Documentais */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 font-display">📄 O Que Diz a Convenção do Condomínio</h3>

          <div className="space-y-8">
            {/* Prova 1: 9 vagas para motos */}
            <div className="bg-success/5 border-2 border-success/20 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="text-success" size={20} />
                <h4 className="font-bold text-lg text-success">9 Vagas Para Motos Já Existem na Convenção</h4>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                O item <strong className="text-foreground">b. 1.B</strong> da convenção estabelece claramente: o
                estacionamento possui capacidade para 31 automóveis de passeio, sendo 20 vagas tipo, 8 vagas duplex, 1
                vaga do zelador, 2 vagas de visitantes e
                <strong className="text-success"> 09 (nove) vagas para motos</strong>. Estas vagas já são previstas e
                pertencem ao condomínio.
              </p>
              <div className="image-frame max-w-3xl mx-auto">
                <img
                  src={convencaoVagasMoto}
                  alt="Trecho da convenção mostrando 9 vagas para motos"
                  className="w-full"
                />
                <div className="bg-card p-3 text-center">
                  <p className="text-sm font-semibold text-success">
                    ✓ Trecho da convenção: 09 (nove) vagas para motos
                  </p>
                </div>
              </div>
            </div>

            {/* Prova 2: Manobrista */}
            <div className="bg-highlight/5 border-2 border-highlight/20 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="text-highlight" size={20} />
                <h4 className="font-bold text-lg text-highlight">Falta de Espaço Não Retira o Direito</h4>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A própria convenção prevê que a garagem está{" "}
                <strong className="text-foreground">sujeita à utilização de manobrista</strong>, o que demonstra que
                mesmo com espaço limitado,{" "}
                <strong className="text-foreground">
                  o direito de estacionamento dos veículos pelos apartamentos não pode ser negado
                </strong>
                . Se necessário, o uso de manobrista se torna obrigatório — a falta de espaço NÃO justifica negar vagas
                que já existem na convenção.
              </p>
              <div className="image-frame max-w-3xl mx-auto">
                <img src={convencaoManobrista} alt="Trecho da convenção sobre uso de manobrista" className="w-full" />
                <div className="bg-card p-3 text-center">
                  <p className="text-sm font-semibold text-highlight">
                    ✓ "manobra de veículos sujeita à utilização de manobrista"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Link para convenção completa */}
          <div className="mt-8 text-center">
            <a
              href="https://drive.google.com/file/d/1Eze2a8Oww5tGmk3Qy0Zj5tK_UiOvDB2A/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              <FileText size={18} />
              Ver Convenção Completa
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Reflexão final */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-2 border-primary/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6 font-display">💭 Reflita</h3>
          <div className="space-y-4 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            <p>
              Não se trata de uma vaga para <strong className="text-foreground">uma pessoa</strong>. Existem outros
              moradores com moto que sequer sabem que têm esse direito na convenção.
            </p>
            <p>
              Solicitar o cumprimento de uma regra que <strong className="text-primary">já existe</strong> não deveria
              resultar em <strong className="text-destructive">humilhação, ameaças e agressão</strong>.
            </p>
            <p>
              <strong className="text-foreground">As 9 vagas para motos já são previstas na convenção</strong> — cabe ao
              síndico demarcá-las e oficializá-las. Isso é um <strong className="text-primary">bem comum</strong>, um
              direito de <strong className="text-primary">todos</strong> os moradores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
