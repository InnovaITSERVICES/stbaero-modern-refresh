import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Plane, Sprout, Flame, Cog, Shield, Award, Phone, Mail, MapPin, Briefcase, Send, Menu, X } from "lucide-react";
import heroImg from "@/assets/hero-machining.jpg";
import aeroImg from "@/assets/sector-aero.jpg";
import agroImg from "@/assets/sector-agro.jpg";
import oilImg from "@/assets/sector-oil.jpg";
import factoryVideo from "@/assets/ludico.mp4";
import stbLogo from "@/assets/stb-logo.png";
import peca1 from "@/assets/pecas/peca1.png";
import peca2 from "@/assets/pecas/peca2.png";
import peca3 from "@/assets/pecas/peca3.png";
import peca4 from "@/assets/pecas/peca4.png";
import peca5 from "@/assets/pecas/peca5.png";
import peca6 from "@/assets/pecas/peca6.png";
import novaVideo from "@/assets/nova-unidade/stb.mp4";
import nova01 from "@/assets/nova-unidade/01.png";
import nova02 from "@/assets/nova-unidade/02.png";
import nova03 from "@/assets/nova-unidade/03.png";
import nova04 from "@/assets/nova-unidade/04.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STB Aero — Usinagem de Precisão de Classe Mundial" },
      { name: "description", content: "Soluções industriais em usinagem de precisão para os setores aeroespacial, agrícola e de óleo & gás. Certificada AS9100 e Nadcap." },
    ],
  }),
  component: Index,
});

function Logo({ className = "h-24 md:h-32" }: { className?: string }) {
  return (
    <a href="#" className="flex items-center gap-3 group">
      <img src={stbLogo} alt="STB Aero" className={`${className} w-auto drop-shadow-[0_0_25px_oklch(0.72_0.17_130/0.4)] transition-transform group-hover:scale-105`} />
    </a>
  );
}

const NAV_LINKS = [
  { href: "#sobre", label: "Quem Somos" },
  { href: "#setores", label: "Setores" },
  { href: "#certificacoes", label: "Certificações" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#pecas", label: "Peças" },
  { href: "#nova-unidade", label: "Nova Unidade" },
  { href: "#carreiras", label: "Trabalhe Conosco" },
  { href: "#contato", label: "Contato" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      {/* Desktop */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 lg:px-10 h-24 items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-8 text-sm text-muted-foreground">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#contato" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors">
          Orçamento <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Mobile */}
      <div className="md:hidden relative px-4 h-28 flex items-center justify-center">
        <Logo className="h-20" />
        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-sm border border-border bg-background/80"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 h-28">
            <Logo className="h-20" />
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="p-2 rounded-sm border border-border"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 pt-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-4 text-lg border-b border-border text-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 font-medium rounded-sm"
            >
              Pedir Orçamento <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-start pt-20 md:pt-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <img src={heroImg} alt="" width={1920} height={1280}
        className="absolute right-0 top-0 h-full w-full md:w-[65%] object-cover opacity-60 md:opacity-90 [mask-image:linear-gradient(to_right,transparent,black_30%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-0 grid lg:grid-cols-12 gap-8 w-full">
        <div className="lg:col-span-7 space-y-4">
          <img src={stbLogo} alt="STB Aero" className="h-44 md:h-60 lg:h-80 w-auto drop-shadow-[0_0_40px_oklch(0.72_0.17_130/0.5)] mt-4 md:mt-2" />
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border rounded-full text-xs font-mono-tech text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
            Desde 1995
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
          <div className="grid grid-cols-3 gap-6 pt-6 max-w-lg border-t border-border">
            <Stat n="30+" label="Anos de mercado" />
            <Stat n="AS9100" label="Certificada" />
            <Stat n="" label="" />
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
            <video src={factoryVideo} autoPlay loop muted playsInline
              className="h-full w-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
              <div className="font-mono-tech text-xs text-primary">MONITORAMENTO ONLINE EM TEMPO REAL</div>
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

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mt-16">
          {/* Coluna esquerda: cards */}
          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28 self-start">
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

          {/* Coluna direita: texto explicativo */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative pl-6 border-l-2 border-primary/60">
              <div className="font-mono-tech text-xs text-primary uppercase tracking-wider mb-3">01 · AS9100 + Nadcap</div>
              <p className="text-foreground text-lg leading-relaxed">
                A STB Aero possui a certificação <span className="text-primary font-medium">AS9100</span>, referência internacional em sistemas de gestão da qualidade para a indústria aeroespacial, e também é credenciada <span className="text-primary font-medium">Nadcap Management</span>, um dos mais rigorosos programas globais de acreditação para processos especiais no setor.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-border">
              <div className="font-mono-tech text-xs text-primary uppercase tracking-wider mb-3">02 · Processos críticos</div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                O credenciamento Nadcap garante que nossos processos atendem a padrões técnicos extremamente elevados, assegurando <span className="text-foreground">controle, repetibilidade e conformidade</span> em operações críticas — requisitos essenciais para fornecedores da cadeia aeroespacial mundial.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-border">
              <div className="font-mono-tech text-xs text-primary uppercase tracking-wider mb-3">03 · Compromisso</div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Essas certificações reforçam o compromisso da STB Aero com <span className="text-foreground">excelência, segurança e confiabilidade</span>, consolidando nossa atuação como um parceiro de alto nível para projetos de máxima exigência.
              </p>
            </div>
          </div>
        </div>
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

function Pecas() {
  const pecas = [
    { img: peca1, code: "01", label: "Componente Estrutural", span: "md:col-span-2 md:row-span-2" },
    { img: peca2, code: "02", label: "Carcaça Usinada", span: "" },
    { img: peca3, code: "03", label: "Flange de Precisão", span: "" },
    { img: peca4, code: "04", label: "Conector Aeroespacial", span: "" },
    { img: peca5, code: "05", label: "Suporte Mecânico", span: "" },
    { img: peca6, code: "06", label: "Bracket Estrutural", span: "md:col-span-2" },
  ];
  return (
    <section id="pecas" className="relative py-24 lg:py-32 px-6 lg:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <SectionHead kicker="// PEÇAS USINADAS" title="A complexidade faz parte do nosso dia a dia." />
          </div>
          <p className="lg:col-span-5 text-muted-foreground text-lg leading-relaxed">
            Componentes de alta precisão desenvolvidos para atender às mais rigorosas exigências técnicas da indústria aeroespacial e de cadeias produtivas de alto desempenho.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {pecas.map((p) => (
            <div key={p.code} className={`group relative overflow-hidden rounded-sm border border-border bg-card hover:border-primary/60 transition-all ${p.span}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-background" />
              <img src={p.img} alt={p.label} loading="lazy"
                className="relative z-10 h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-x-0 bottom-0 z-20 p-3 flex items-center justify-between bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-mono-tech text-[10px] uppercase tracking-wider text-primary">{p.code}</span>
                <span className="font-display text-xs font-medium">{p.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl">
          <p className="text-muted-foreground leading-relaxed">
            Cada peça reflete a integração entre engenharia especializada, processos robustos e tecnologia de ponta — incluindo centros 5 eixos e máquinas multitarefas, capazes de executar <span className="text-foreground">geometrias complexas e tolerâncias estreitas</span> em um único fluxo produtivo.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Nossa atuação é orientada pela eficiência operacional, redução de etapas e <span className="text-foreground">controle rigoroso da qualidade</span>, garantindo confiabilidade e repetibilidade mesmo em projetos de alta complexidade.
          </p>
        </div>
      </div>
    </section>
  );
}

function NewFacility() {
  const timeline = [
    { img: nova01, label: "Estrutura metálica", caption: "Montagem da estrutura principal" },
    { img: nova02, label: "Fechamento", caption: "Paredes e cobertura em execução" },
    { img: nova04, label: "Interior", caption: "Concretagem do piso industrial" },
    { img: nova03, label: "Fachada finalizada", caption: "Unidade em fase final" },
  ];
  return (
    <section id="nova-unidade" className="relative py-24 lg:py-32 px-6 lg:px-10 border-t border-border">
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

        <div className="mt-12 relative rounded-sm overflow-hidden border border-border bg-card">
          <video
            src={novaVideo}
            controls
            playsInline
            preload="metadata"
            className="w-full h-auto aspect-video object-cover bg-black"
          />
        </div>

        <div className="mt-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="font-mono-tech text-xs text-primary mb-2">// LINHA DO TEMPO</div>
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-[-0.02em]">
                A construção em imagens
              </h3>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timeline.map((t, i) => (
              <figure key={i} className="group relative overflow-hidden rounded-sm border border-border bg-card">
                <div className="absolute top-3 left-3 z-20 font-mono-tech text-[10px] uppercase tracking-wider text-primary bg-background/80 backdrop-blur px-2 py-1 rounded-sm">
                  ETAPA 0{i + 1}
                </div>
                <img
                  src={t.img}
                  alt={t.label}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="p-4 border-t border-border">
                  <div className="font-display font-semibold text-sm">{t.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{t.caption}</div>
                </figcaption>
              </figure>
            ))}
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
          <ContactRow icon={MapPin} label="Localização" value="Botucatu/SP, Brasil" />
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

function Careers() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    cargo: "",
    experiencia: "",
    mensagem: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Candidatura — ${form.cargo || "Vaga STB Aero"} — ${form.nome}`;
    const body = [
      `Nome: ${form.nome}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.telefone}`,
      `Área de interesse / Cargo: ${form.cargo}`,
      `Experiência: ${form.experiencia}`,
      "",
      "Mensagem:",
      form.mensagem,
      "",
      "—",
      "Enviado pelo site stbaero.com.br",
    ].join("\n");
    const mailto = `mailto:rh@stbaero.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  };

  const input = "w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition-colors";

  return (
    <section id="carreiras" className="relative py-24 lg:py-32 px-6 lg:px-10 border-t border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <SectionHead kicker="// CARREIRAS" title="Faça parte do time STB Aero." />
          <p className="text-muted-foreground text-lg max-w-xl">
            Buscamos profissionais qualificados e apaixonados por engenharia de precisão. Se você quer crescer em uma empresa de referência nos setores aeroespacial, agrícola e de óleo & gás, envie sua candidatura.
          </p>
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Briefcase className="h-4 w-4 text-primary" />
              <span>Ambiente técnico de alta exigência</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Award className="h-4 w-4 text-primary" />
              <span>Empresa certificada AS9100 e Nadcap</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Oportunidades de desenvolvimento contínuo</span>
            </div>
          </div>
          <a href="mailto:rh@stbaero.com.br" className="inline-flex items-center gap-2 text-sm text-primary hover:underline pt-4">
            <Mail className="h-4 w-4" /> rh@stbaero.com.br
          </a>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-7 bg-card border border-border rounded-sm p-6 lg:p-10 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="font-mono-tech text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Nome completo *</label>
              <input required maxLength={120} value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className={input} placeholder="Seu nome" />
            </div>
            <div>
              <label className="font-mono-tech text-xs uppercase tracking-wider text-muted-foreground mb-2 block">E-mail *</label>
              <input required type="email" maxLength={160} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={input} placeholder="voce@email.com" />
            </div>
            <div>
              <label className="font-mono-tech text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Telefone</label>
              <input maxLength={30} value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} className={input} placeholder="(14) 99999-0000" />
            </div>
            <div>
              <label className="font-mono-tech text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Área / Cargo de interesse *</label>
              <input required maxLength={120} value={form.cargo} onChange={(e) => setForm({ ...form, cargo: e.target.value })} className={input} placeholder="Ex: Operador CNC, Programador, Qualidade" />
            </div>
          </div>
          <div>
            <label className="font-mono-tech text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Experiência profissional</label>
            <textarea rows={3} maxLength={1000} value={form.experiencia} onChange={(e) => setForm({ ...form, experiencia: e.target.value })} className={input} placeholder="Conte brevemente sua experiência, formação e principais competências." />
          </div>
          <div>
            <label className="font-mono-tech text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Mensagem</label>
            <textarea rows={3} maxLength={1000} value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} className={input} placeholder="Algo a mais que gostaria de compartilhar?" />
          </div>
          <p className="text-xs text-muted-foreground">
            Ao enviar, seu cliente de e-mail será aberto com os dados preenchidos para <span className="text-primary">rh@stbaero.com.br</span>. Anexe seu currículo no e-mail antes de enviar.
          </p>
          <button type="submit" className="inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-6 py-4 font-medium rounded-sm hover:bg-primary/90 transition-all hover:shadow-[var(--shadow-glow)]">
            <Send className="h-4 w-4" />
            {sent ? "Reabrir e-mail" : "Enviar candidatura"}
          </button>
          {sent && (
            <p className="text-sm text-primary">E-mail aberto. Se nada aconteceu, envie diretamente para rh@stbaero.com.br.</p>
          )}
        </form>
      </div>
    </section>
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
        <Pecas />
        <NewFacility />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
