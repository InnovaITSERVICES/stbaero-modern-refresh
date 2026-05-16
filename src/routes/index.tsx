import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Plane, Sprout, Flame, Cog, Shield, Award, Phone, Mail, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-machining.jpg";
import aeroImg from "@/assets/sector-aero.jpg";
import agroImg from "@/assets/sector-agro.jpg";
import oilImg from "@/assets/sector-oil.jpg";
import factoryImg from "@/assets/factory.jpg";
import stbLogo from "@/assets/stb-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STB Aero — Usinagem de Precisão de Classe Mundial" },
      { name: "description", content: "Soluções industriais em usinagem de precisão para os setores aeroespacial, agrícola e de óleo & gás. Certificada AS9100 e Nadcap." },
    ],
  }),
  component: Index,
});

function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  const h = size === "lg" ? "h-20 md:h-28" : "h-11";
  return (
    <a href="#" className="flex items-center gap-3 group">
      <img src={stbLogo} alt="STB Aero" className={`${h} w-auto drop-shadow-[0_0_25px_oklch(0.72_0.17_130/0.4)] transition-transform group-hover:scale-105`} />
    </a>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#sobre" className="hover:text-foreground transition-colors">Quem Somos</a>
          <a href="#setores" className="hover:text-foreground transition-colors">Setores</a>
          <a href="#certificacoes" className="hover:text-foreground transition-colors">Certificações</a>
          <a href="#estrutura" className="hover:text-foreground transition-colors">Estrutura</a>
          <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
        </nav>
        <a href="#contato" className="hidden sm:inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors">
          Orçamento <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <img src={heroImg} alt="" width={1920} height={1280}
        className="absolute right-0 top-0 h-full w-full md:w-[65%] object-cover opacity-60 md:opacity-90 [mask-image:linear-gradient(to_right,transparent,black_30%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-8 w-full">
        <div className="lg:col-span-7 space-y-8">
          <img src={stbLogo} alt="STB Aero" className="h-36 md:h-48 lg:h-60 w-auto drop-shadow-[0_0_40px_oklch(0.72_0.17_130/0.5)]" />
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border rounded-full text-xs font-mono-tech text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            DESDE 1995 · VALE DO PARAÍBA
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[-0.03em] leading-[0.95] text-balance">
            Usinagem de<br />
            <span className="text-primary">precisão</span> de<br />
            classe mundial.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl text-balance">
            Soluções industriais que atendem às mais rigorosas exigências dos setores aeroespacial, agrícola e de óleo & gás.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#contato" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 font-medium rounded-sm hover:bg-primary/90 transition-all hover:shadow-[var(--shadow-glow)]">
              Pedir Orçamento <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#sobre" className="inline-flex items-center gap-2 border border-border px-6 py-3.5 font-medium rounded-sm hover:bg-secondary transition-colors">
              Conheça a STB
            </a>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-12 max-w-lg border-t border-border">
            <Stat n="30+" label="Anos de mercado" />
            <Stat n="AS9100" label="Certificada" />
            <Stat n="5-eixos" label="CNC de precisão" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="pt-6">
      <div className="font-display text-2xl md:text-3xl font-bold text-primary">{n}</div>
      <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}

function Sectors() {
  const items = [
    { icon: Plane, title: "Aeroespacial", desc: "Componentes para a cadeia aeroespacial global com conformidade total.", img: aeroImg, code: "01" },
    { icon: Sprout, title: "Agrícola", desc: "Peças robustas e duradouras para máquinas e equipamentos do agronegócio.", img: agroImg, code: "02" },
    { icon: Flame, title: "Óleo & Gás", desc: "Soluções críticas em ambientes de alta exigência e pressão extrema.", img: oilImg, code: "03" },
  ];
  return (
    <section id="setores" className="relative py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHead kicker="// SETORES" title="Atuamos onde a precisão é inegociável." />
        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {items.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-sm border border-border bg-card hover:border-primary/50 transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={1024} height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <s.icon className="h-6 w-6 text-primary" />
                  <span className="font-mono-tech text-xs text-muted-foreground">{s.code}</span>
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <div className="font-mono-tech text-xs uppercase tracking-[0.3em] text-primary mb-4">{kicker}</div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[1.05] text-balance">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32 px-6 lg:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <SectionHead kicker="// QUEM SOMOS" title="Uma solução competitiva em usinagem de precisão." />
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              A <span className="text-foreground font-medium">STB Aeronáutica</span> nasceu no Vale do Paraíba a partir de uma oportunidade estratégica e de um propósito claro: aliar agilidade, qualidade e gestão eficiente de processos.
            </p>
            <p>
              Atuamos nos segmentos de usinagem, montagem e engenharia, com foco em robustez operacional, redução de custos e sustentabilidade — sem abrir mão da excelência.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {["Agilidade operacional", "Engenharia integrada", "Redução de custos", "Sustentabilidade"].map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
          <div className="relative aspect-square rounded-sm border border-border overflow-hidden bg-card">
            <img src={factoryImg} alt="Parque industrial STB Aero" loading="lazy" width={1600} height={1024}
              className="h-full w-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
              <div className="font-mono-tech text-xs text-primary">EST. 1995</div>
              <div className="font-display text-2xl font-bold mt-1">Parceiro sólido<br />da cadeia aeroespacial</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certificacoes" className="relative py-24 lg:py-32 px-6 lg:px-10 border-t border-border overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="relative max-w-7xl mx-auto">
        <SectionHead kicker="// CERTIFICAÇÕES" title="Padrões técnicos extremamente elevados." />
        <div className="grid md:grid-cols-2 gap-5 mt-16">
          <CertCard
            icon={Award}
            code="AS9100"
            title="Sistema de Gestão da Qualidade"
            desc="Referência internacional para a indústria aeroespacial, garantindo controle, repetibilidade e conformidade em todos os processos."
          />
          <CertCard
            icon={Shield}
            code="NADCAP"
            title="Management Accreditation"
            desc="Um dos mais rigorosos programas globais de acreditação para processos especiais no setor aeroespacial mundial."
          />
        </div>
        <p className="text-muted-foreground text-lg mt-12 max-w-3xl text-balance">
          Essas certificações reforçam o compromisso da STB Aero com <span className="text-foreground">excelência, segurança e confiabilidade</span>, consolidando nossa atuação como um parceiro de alto nível para projetos de máxima exigência.
        </p>
      </div>
    </section>
  );
}

function CertCard({ icon: Icon, code, title, desc }: { icon: typeof Award; code: string; title: string; desc: string }) {
  return (
    <div className="group relative p-8 lg:p-10 border border-border rounded-sm bg-card hover:border-primary/50 transition-all">
      <div className="flex items-start justify-between mb-6">
        <Icon className="h-10 w-10 text-primary" />
        <span className="font-mono-tech text-xs text-muted-foreground">CERT · {code}</span>
      </div>
      <div className="font-display text-3xl font-bold mb-2">{code}</div>
      <div className="text-sm text-primary mb-4 font-mono-tech uppercase tracking-wider">{title}</div>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  );
}

function Structure() {
  const machines = ["Mazak", "Romi", "Hartford", "Pan Machine"];
  return (
    <section id="estrutura" className="relative py-24 lg:py-32 px-6 lg:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <SectionHead kicker="// ESTRUTURA" title="Centros CNC de última geração." />
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nosso parque industrial conta com máquinas de precisão de <span className="text-primary font-medium">5 eixos</span>, que garantem alta performance, complexidade geométrica e acabamento superior em cada componente.
          </p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {machines.map((m, i) => (
            <div key={m} className="group p-6 border border-border rounded-sm bg-card hover:bg-secondary transition-colors flex items-center justify-between">
              <div>
                <div className="font-mono-tech text-xs text-muted-foreground">0{i + 1}</div>
                <div className="font-display text-2xl font-bold mt-1">{m}</div>
              </div>
              <Cog className="h-8 w-8 text-primary opacity-50 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewFacility() {
  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-sm overflow-hidden border border-primary/30 bg-card p-10 lg:p-16">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-primary mb-6 px-3 py-1.5 border border-primary/40 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              INAUGURAÇÃO 2026
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[1.05] text-balance">
              Nova unidade fabril em fase final de construção.
            </h2>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl">
              Um passo estratégico para ampliar nossa capacidade produtiva, modernizar processos e fortalecer ainda mais nosso compromisso com qualidade e tecnologia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="relative py-24 lg:py-32 px-6 lg:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6">
          <SectionHead kicker="// CONTATO" title="Vamos construir sua próxima peça com precisão." />
          <p className="text-muted-foreground text-lg mt-6 max-w-xl">
            Solicite um orçamento e descubra como a STB Aero pode ser sua parceira em projetos de alta exigência técnica.
          </p>
        </div>
        <div className="lg:col-span-6 space-y-3">
          <ContactRow icon={Mail} label="E-mail" value="contato@stbaero.com.br" href="mailto:contato@stbaero.com.br" />
          <ContactRow icon={Phone} label="Telefone" value="Entre em contato" href="tel:+5512000000000" />
          <ContactRow icon={MapPin} label="Localização" value="Vale do Paraíba — SP, Brasil" />
          <a href="mailto:contato@stbaero.com.br" className="mt-6 inline-flex w-full items-center justify-between bg-primary text-primary-foreground px-6 py-5 rounded-sm hover:bg-primary/90 transition-all hover:shadow-[var(--shadow-glow)]">
            <span className="font-display font-semibold text-lg">Pedir Orçamento</span>
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const Comp: any = href ? "a" : "div";
  return (
    <Comp href={href} className="flex items-center gap-4 p-5 border border-border rounded-sm bg-card hover:border-primary/50 hover:bg-secondary transition-all">
      <Icon className="h-5 w-5 text-primary" />
      <div>
        <div className="font-mono-tech text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-display font-medium">{value}</div>
      </div>
    </Comp>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 lg:px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <Logo />
        <div className="font-mono-tech text-xs text-muted-foreground">
          © {new Date().getFullYear()} STB AERONÁUTICA · USINAGEM DE PRECISÃO DE CLASSE MUNDIAL
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Sectors />
        <About />
        <Certifications />
        <Structure />
        <NewFacility />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
