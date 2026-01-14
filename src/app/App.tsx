import { useState, useEffect } from "react";
import { 
  Scissors, 
  Clock, 
  MapPin, 
  Star, 
  Phone, 
  Menu, 
  X,
  Instagram,
  ChevronRight
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um horário.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Scissors className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold tracking-tight">Corte & Estilo</span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection("hero")} className="text-sm hover:text-accent transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection("cortes")} className="text-sm hover:text-accent transition-colors">
                Cortes
              </button>
              <button onClick={() => scrollToSection("servicos")} className="text-sm hover:text-accent transition-colors">
                Serviços & Preços
              </button>
              <button onClick={() => scrollToSection("avaliacoes")} className="text-sm hover:text-accent transition-colors">
                Avaliações
              </button>
              <button onClick={() => scrollToSection("localizacao")} className="text-sm hover:text-accent transition-colors">
                Localização
              </button>
            </div>

            {/* CTA Button Desktop */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden lg:block">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Agendar no WhatsApp
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg border-t">
              <div className="flex flex-col p-6 gap-4">
                <button onClick={() => scrollToSection("hero")} className="text-left py-2 hover:text-accent transition-colors">
                  Início
                </button>
                <button onClick={() => scrollToSection("cortes")} className="text-left py-2 hover:text-accent transition-colors">
                  Cortes
                </button>
                <button onClick={() => scrollToSection("servicos")} className="text-left py-2 hover:text-accent transition-colors">
                  Serviços & Preços
                </button>
                <button onClick={() => scrollToSection("avaliacoes")} className="text-left py-2 hover:text-accent transition-colors">
                  Avaliações
                </button>
                <button onClick={() => scrollToSection("localizacao")} className="text-left py-2 hover:text-accent transition-colors">
                  Localização
                </button>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-2">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    Agendar no WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Corte masculino premium. Do clássico ao moderno.
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Atendimento rápido, ambiente confortável e barbeiros especialistas.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                    Agendar agora
                  </Button>
                </a>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => scrollToSection("servicos")}
                  className="w-full sm:w-auto border-2 font-semibold"
                >
                  Ver preços
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <Card className="p-4 border shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="w-5 h-5 text-accent fill-accent" />
                    <span className="font-bold text-lg">4.9</span>
                  </div>
                  <p className="text-sm text-muted-foreground">no Google</p>
                </Card>
                <Card className="p-4 border shadow-sm">
                  <div className="font-bold text-lg mb-1">+1.200</div>
                  <p className="text-sm text-muted-foreground">clientes atendidos</p>
                </Card>
                <Card className="p-4 border shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="font-bold text-lg">35 min</span>
                  </div>
                  <p className="text-sm text-muted-foreground">tempo médio</p>
                </Card>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1547648946-2b1fd7eab923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NjgzODE4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Barbeiro profissional cortando cabelo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cortes em Destaque */}
      <section id="cortes" className="py-20 lg:py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Cortes mais pedidos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o estilo que combina com você
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Degradê (Fade)",
                description: "Degradê na régua com acabamento perfeito",
                time: "30–40 min",
                image: "https://images.unsplash.com/photo-1589985494639-69e60c82cab2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWRlJTIwaGFpcmN1dHxlbnwxfHx8fDE3NjgzMzAyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                name: "Social",
                description: "Elegante e alinhado pro dia a dia",
                time: "25–35 min",
                image: "https://images.unsplash.com/photo-1732314287829-f1da598a5b77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXJ8ZW58MXx8fHwxNzY4NDI1MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                name: "Low Fade",
                description: "Discreto e moderno",
                time: "30–40 min",
                image: "https://images.unsplash.com/photo-1590540178973-02381b349071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwaGFpcmN1dCUyMHNjaXNzb3JzfGVufDF8fHx8MTc2ODQyNTA0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                name: "Mid Fade",
                description: "Equilíbrio ideal",
                time: "30–40 min",
                image: "https://images.unsplash.com/photo-1547648946-2b1fd7eab923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NjgzODE4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                name: "Corte na Tesoura",
                description: "Natural e sofisticado",
                time: "35–45 min",
                image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMHRyaW18ZW58MXx8fHwxNzY4NDI1MDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                name: "Máquina (Prático)",
                description: "Rápido e direto",
                time: "15–25 min",
                image: "https://images.unsplash.com/photo-1754294437661-129b86f868ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXJiZXJzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4MzgxODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              }
            ].map((corte, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <ImageWithFallback 
                    src={corte.image}
                    alt={corte.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {corte.time}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{corte.name}</h3>
                  <p className="text-muted-foreground">{corte.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços e Preços */}
      <section id="servicos" className="py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Serviços e preços</h2>
            <p className="text-lg text-muted-foreground">
              Transparência e qualidade em cada serviço
            </p>
          </div>

          <div className="space-y-4">
            {[
              { service: "Corte Masculino", description: "Corte completo com finalização", time: "35 min", price: "R$ 45" },
              { service: "Barba", description: "Aparar e modelar barba", time: "25 min", price: "R$ 35" },
              { service: "Corte + Barba", description: "Combo completo", time: "60 min", price: "R$ 75" },
              { service: "Sobrancelha", description: "Design e alinhamento", time: "10 min", price: "R$ 15" },
              { service: "Platinado/Descoloração", description: "Sob consulta", time: "120+ min", price: "a partir de R$ 180" },
              { service: "Hidratação", description: "Tratamento capilar", time: "25 min", price: "R$ 40" },
              { service: "Pigmentação de Barba", description: "Cobertura de fios brancos", time: "20 min", price: "R$ 30" },
              { service: "Pezinho/Acabamento", description: "Apenas acabamento", time: "10 min", price: "R$ 20" }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{item.service}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-6 sm:gap-8">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{item.time}</span>
                    </div>
                    <div className="font-bold text-xl text-accent min-w-[140px] text-right">
                      {item.price}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            * Valores podem variar conforme cabelo/serviço
          </p>
        </div>
      </section>

      {/* Avaliações */}
      <section id="avaliacoes" className="py-20 lg:py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">O que os clientes dizem</h2>
            <p className="text-lg text-muted-foreground">
              Mais de 300 avaliações de clientes satisfeitos
            </p>
          </div>

          {/* Rating Summary */}
          <div className="max-w-2xl mx-auto mb-16">
            <Card className="p-8">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold mb-2">4.9</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground">Baseado em 300+ avaliações</p>
              </div>

              <div className="space-y-3">
                {[
                  { stars: 5, percentage: 87 },
                  { stars: 4, percentage: 10 },
                  { stars: 3, percentage: 2 },
                  { stars: 2, percentage: 1 },
                  { stars: 1, percentage: 0 }
                ].map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-4">
                    <div className="flex items-center gap-1 w-24">
                      <span className="text-sm font-medium">{rating.stars}</span>
                      <Star className="w-4 h-4 text-accent fill-accent" />
                    </div>
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent rounded-full"
                        style={{ width: `${rating.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-12 text-right">{rating.percentage}%</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Carlos Silva", text: "Atendimento top e corte impecável. Volto sempre!" },
              { name: "Rafael Santos", text: "Melhor barbearia da região. Profissionais muito capacitados." },
              { name: "André Costa", text: "Ambiente moderno e acolhedor. Recomendo demais!" },
              { name: "Lucas Oliveira", text: "Preço justo e qualidade excepcional. Vale cada centavo." },
              { name: "Felipe Alves", text: "Sempre saio satisfeito. Equipe nota 10!" },
              { name: "Thiago Martins", text: "Pontualidade e profissionalismo. Excelente experiência!" }
            ].map((review, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center font-bold text-accent">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">Cliente verificado</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Onde estamos</h2>
            <p className="text-lg text-muted-foreground">
              Venha nos visitar e conheça nosso espaço
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Mapa */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                  <p className="text-muted-foreground">Mapa Interativo</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Integração com Google Maps
                  </p>
                </div>
              </div>
            </div>

            {/* Informações */}
            <div className="space-y-8">
              <Card className="p-8 border-l-4 border-l-accent">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Endereço</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Rua Exemplo, 123 — Centro<br />
                      São Paulo, SP
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-l-accent">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Horário de Funcionamento</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Segunda a Sábado: 09:00 – 20:00</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-l-accent">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Contato</h3>
                    <p className="text-muted-foreground mb-3">
                      WhatsApp: (11) 99999-9999
                    </p>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full sm:w-auto border-2">
                        <Phone className="w-4 h-4 mr-2" />
                        Chamar no WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>

              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="p-6 text-center bg-secondary/50">
                  <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-sm font-semibold">Estacionamento próximo</p>
                </Card>
                <Card className="p-6 text-center bg-secondary/50">
                  <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-sm font-semibold">Ordem e agendamento</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-primary text-primary-foreground">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Pronto pra mudar o visual?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Clique e agende em menos de 1 minuto no WhatsApp.
          </p>
          
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-12 py-6 text-lg mb-8"
            >
              Agendar no WhatsApp
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/60">
            <button onClick={() => scrollToSection("servicos")} className="hover:text-primary-foreground transition-colors">
              Ver preços
            </button>
            <span>|</span>
            <button onClick={() => scrollToSection("localizacao")} className="hover:text-primary-foreground transition-colors">
              Como chegar
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 bg-secondary/30 border-t">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <Scissors className="w-6 h-6 text-accent" />
              <div>
                <div className="font-bold text-lg">Corte & Estilo</div>
                <div className="text-sm text-muted-foreground">Barber Shop</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground mt-8 pt-8 border-t">
            © 2026 Corte & Estilo. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
