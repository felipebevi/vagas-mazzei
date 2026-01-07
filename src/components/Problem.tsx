import { AlertCircle, Car, Bike } from "lucide-react";

const Problem = () => {
  return (
    <section id="problema" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-semibold mb-4">
            <AlertCircle size={16} />
            O Desafio Atual
          </span>
          <h2 className="section-title">Por que precisamos agir?</h2>
          <p className="section-subtitle">
            Nossa convenção foi escrita em outra época. Hoje, precisamos nos adaptar à nossa realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card-elevated p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-6 bg-destructive/10 rounded-full flex items-center justify-center">
              <Car className="text-destructive" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 font-display">Vagas Desperdiçadas</h3>
            <p className="text-muted-foreground">
              Pela convenção, uma moto ocupa uma vaga inteira de carro. Espaço precioso perdido!
            </p>
          </div>

          {/* Card 2 */}
          <div className="card-elevated p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-6 bg-warning/20 rounded-full flex items-center justify-center">
              <AlertCircle className="text-warning" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 font-display">Conflitos Passados</h3>
            <p className="text-muted-foreground">
              Já tivemos problemas com outros moradores. Sem regras claras, o conflito se repete.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card-elevated p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <Bike className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 font-display">Demanda Crescente</h3>
            <p className="text-muted-foreground">
              Motos são cada vez mais comuns. Amanhã, você ou alguém próximo também pode precisar.
            </p>
          </div>
        </div>

        {/* Estatística visual */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">1</div>
              <p className="text-muted-foreground">Moto hoje</p>
            </div>
            <div className="text-3xl text-muted-foreground">→</div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">?</div>
              <p className="text-muted-foreground">Motos amanhã</p>
            </div>
            <div className="text-3xl text-muted-foreground">→</div>
            <div>
              <div className="text-5xl font-bold text-success mb-2">5</div>
              <p className="text-muted-foreground">Vagas propostas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
