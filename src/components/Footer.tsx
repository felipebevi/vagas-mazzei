import { Heart, Home } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-foreground text-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Home size={20} />
            <span className="font-semibold">Residencial Vila Mazzei</span>
          </div>
          
          <p className="text-sm opacity-70 text-center">
            Campanha de Conscientização • Vagas para Motocicletas 2026
          </p>
          
          <div className="flex items-center gap-1 text-sm opacity-70">
            Feito com <Heart size={14} className="text-destructive mx-1" /> pela comunidade
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
