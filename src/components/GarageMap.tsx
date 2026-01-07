import { Map, ExternalLink, FileText, ImageIcon } from "lucide-react";
import mapaGaragem from "@/assets/mapa-garagem.jpg";

const GarageMap = () => {
  return (
    <section id="mapa" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-highlight/10 text-highlight rounded-full text-sm font-semibold mb-4">
            <Map size={16} />
            Visualize a Proposta
          </span>
          <h2 className="section-title">Mapa da Garagem</h2>
          <p className="section-subtitle">
            Veja exatamente onde as novas vagas de moto (M-1 a M-5) serão criadas, 
            em espaços que não interferem nas vagas existentes.
          </p>
        </div>

        {/* Mapa */}
        <div className="image-frame max-w-4xl mx-auto mb-12">
          <img 
            src={mapaGaragem} 
            alt="Mapa da garagem com vagas sugeridas para motos"
            className="w-full"
          />
        </div>

        {/* Legenda */}
        <div className="bg-secondary/50 rounded-2xl p-8 max-w-2xl mx-auto mb-12">
          <h3 className="text-xl font-bold mb-4 font-display text-center">Legenda</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 border-2 border-blue-500 rounded" />
              <span className="text-sm">Vagas de moto sugeridas (M-1 a M-5)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-card border-2 border-border rounded" />
              <span className="text-sm">Vagas de carro existentes (1 a 26)</span>
            </div>
          </div>
        </div>

        {/* Links de recursos */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <a 
            href="https://photos.app.goo.gl/oV3NH6soBNURfFB2A" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card-elevated p-6 flex items-center gap-4 hover:scale-[1.02] transition-all group"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <ImageIcon className="text-primary" size={28} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold mb-1">Álbum de Fotos</h4>
              <p className="text-sm text-muted-foreground">Veja todos os ângulos das vagas sugeridas</p>
            </div>
            <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
          </a>

          <a 
            href="#regras"
            className="card-elevated p-6 flex items-center gap-4 hover:scale-[1.02] transition-all group"
          >
            <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
              <FileText className="text-accent-foreground" size={28} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold mb-1">Regras de Utilização</h4>
              <p className="text-sm text-muted-foreground">Documento completo com todas as regras</p>
            </div>
            <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GarageMap;
