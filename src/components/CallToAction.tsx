import { Calendar, Users, MessageCircle, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="participar" className="py-20 px-4 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Ícone */}
        <div className="w-20 h-20 mx-auto mb-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
          <Users className="text-primary-foreground" size={40} />
        </div>

        {/* Título */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
          Sua Voz Importa!
        </h2>

        {/* Mensagem */}
        <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
          Participe da próxima assembleia e ajude a construir um condomínio 
          mais <strong>organizado</strong>, <strong>justo</strong> e <strong>moderno</strong>.
        </p>

        {/* Info da assembleia */}
        <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 mb-10 inline-block">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-left">
            <div className="flex items-center gap-3">
              <Calendar size={24} />
              <div>
                <p className="text-sm opacity-80">Data</p>
                <p className="font-bold">Em breve</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-primary-foreground/20" />
            <div className="flex items-center gap-3">
              <MessageCircle size={24} />
              <div>
                <p className="text-sm opacity-80">Pauta</p>
                <p className="font-bold">Criação de vagas para motos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reflexão final */}
        <div className="bg-primary-foreground/5 rounded-xl p-6 mb-10 max-w-2xl mx-auto">
          <p className="text-lg italic opacity-90">
            "Hoje é apenas 1 moto. Mas juntos podemos criar uma solução que beneficia 
            a todos e prepara nosso condomínio para o futuro."
          </p>
        </div>

        {/* Mensagem sobre comunidade */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              emoji: "🤝",
              text: "Somos uma comunidade"
            },
            {
              emoji: "🏠",
              text: "Moramos no mesmo prédio"
            },
            {
              emoji: "💚",
              text: "Juntos encontramos soluções"
            }
          ].map((item, index) => (
            <div key={index} className="bg-primary-foreground/10 rounded-xl p-4">
              <span className="text-3xl mb-2 block">{item.emoji}</span>
              <p className="font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="space-y-4">
          <a 
            href="https://photos.app.goo.gl/oV3NH6soBNURfFB2A"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex items-center gap-2 !bg-accent !text-accent-foreground"
          >
            Veja Todas as Fotos e Detalhes
            <ArrowRight size={20} />
          </a>
          <p className="text-sm opacity-70">
            Compartilhe esta página com seus vizinhos!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
