import Link from "next/link";
import type { ReactNode } from "react";
import { WaitlistForm } from "@/components/waitlist-form";
import { FaqItem } from "@/components/faq-item";
import { DashboardMockup } from "@/components/dashboard-mockup";

export default function HomePage() {
  return (
    <main className="flex-1" style={{ paddingTop: 64 }}>
      <TopNav />
      <Hero />
      <Ticker />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ForWhoSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ─────────────────────────────────────── Wordmark */

function Wordmark({
  size = 28,
  color = "var(--kp-ink)",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <span
      className="inline-flex items-baseline"
      style={{
        fontFamily: "var(--kp-display)",
        fontSize: size,
        lineHeight: 1,
        letterSpacing: "-0.015em",
        color,
        fontWeight: 400,
      }}
    >
      <span>Kaleidos</span>
      <em style={{ fontStyle: "italic", marginLeft: 4, color: "var(--kp-pink)" }}>
        Pay
      </em>
    </span>
  );
}

/* ─────────────────────────────────────── TopNav */

const NAV_ITEMS = [
  { label: "Produto", href: "#produto" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

function TopNav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "color-mix(in srgb, var(--kp-paper) 92%, transparent)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1.5px solid var(--kp-ink)",
      }}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-6 py-3">
        <Link href="/" aria-label="Kaleidos Pay">
          <Wordmark size={24} />
        </Link>

        <ul className="hidden md:flex items-center">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block px-3 py-[7px] transition-colors hover:bg-[var(--kp-green)]"
                style={{
                  fontFamily: "var(--kp-mono)",
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--kp-ink)",
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href="#waitlist"
            className="kp-btn kp-btn-outline"
            style={{ padding: "8px 14px", fontSize: 10.5 }}
          >
            Entrar
          </Link>
          <a
            href="#waitlist"
            className="kp-btn kp-btn-ink"
            style={{ padding: "8px 14px", fontSize: 10.5 }}
          >
            Lista de espera →
          </a>
        </div>

        <a
          href="#waitlist"
          className="md:hidden kp-btn kp-btn-ink"
          style={{ padding: "8px 12px", fontSize: 10 }}
        >
          Entrar na lista
        </a>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────── Hero */

function Hero() {
  return (
    <header
      id="waitlist"
      className="relative overflow-hidden"
      style={{
        padding: "clamp(40px, 5vw, 72px) 0 clamp(32px, 4vw, 56px)",
        borderBottom: "1.5px solid var(--kp-ink)",
      }}
    >
      <div
        className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 sm:px-6"
        style={{
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 0.95fr)",
        }}
      >
        <HeroCopy />
        <div className="relative kp-reveal">
          <DashboardMockup />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          header#waitlist > div:first-of-type {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
        }
      `}</style>
    </header>
  );
}

function HeroCopy() {
  return (
    <div className="kp-reveal">
      <span className="kp-eyebrow">
        <span className="kp-dot" />
        Nº 01 · Gateway pra agências
      </span>

      <h1
        className="kp-display mt-5"
        style={{
          fontSize: "clamp(40px, 5.6vw, 76px)",
          lineHeight: 1.0,
          letterSpacing: "-0.025em",
          fontWeight: 400,
        }}
      >
        <span className="block">
          Receba em <em><span className="kp-splash">PIX</span></em>
        </span>
        <span className="block">
          e <em>cartão</em>, sem <span className="kp-under">atrito.</span>
        </span>
      </h1>

      <p
        className="mt-6"
        style={{
          fontSize: 16,
          lineHeight: 1.55,
          color: "var(--kp-muted)",
          maxWidth: 520,
        }}
      >
        Checkout, split, recorrência e conciliação no mesmo painel. Construído
        por quem opera agência, pensado pra quem vende no Brasil.
      </p>

      <div className="mt-8">
        <WaitlistForm size="lg" source="hero" buttonLabel="Entrar na lista" />
      </div>

      <div
        className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
        style={{
          fontFamily: "var(--kp-mono)",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--kp-muted)",
        }}
      >
        {[
          ["pink", "PIX em segundos"],
          ["green", "Split nativo"],
          ["pink", "API first"],
        ].map(([color, label]) => (
          <span key={label} className="inline-flex items-center gap-1.5">
            <span style={{ color: color === "pink" ? "var(--kp-pink)" : "var(--kp-ink)" }}>
              ✦
            </span>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────── Ticker */

function Ticker() {
  const items = [
    { k: "PIX · cartão · cripto", v: "· 1 gateway" },
    { k: "Split", v: "automático" },
    { k: "Recorrência", v: "com retry" },
    { k: "API REST", v: "+ webhooks" },
    { k: "100% BRL", v: "· conformidade BACEN" },
  ];
  const doubled = [...items, ...items];
  return (
    <div className="kp-ticker">
      <div className="kp-ticker-track">
        {doubled.map((it, i) => (
          <span key={i} className="flex items-center gap-10 shrink-0">
            <span>
              <span className="kp-hl">{it.k}</span> {it.v}
            </span>
            <span className="kp-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────── SectionHead */

function SectionHead({
  num,
  sub,
  children,
  tag,
}: {
  num: string;
  sub: string;
  children: ReactNode;
  tag?: string;
}) {
  return (
    <div
      className="mb-14 grid items-end gap-x-9 gap-y-6"
      style={{ gridTemplateColumns: "auto 1fr auto" }}
    >
      <div
        style={{
          fontFamily: "var(--kp-display)",
          fontSize: 64,
          lineHeight: 0.85,
          color: "var(--kp-pink)",
          fontStyle: "italic",
          fontWeight: 400,
        }}
      >
        {num}
        <span
          style={{
            display: "block",
            fontFamily: "var(--kp-mono)",
            fontSize: 9.5,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--kp-muted)",
            fontStyle: "normal",
            marginTop: 6,
            lineHeight: 1,
          }}
        >
          {sub}
        </span>
      </div>
      <h2
        className="kp-display"
        style={{
          fontSize: "clamp(30px, 4.4vw, 54px)",
          lineHeight: 1.02,
          letterSpacing: "-0.02em",
          fontWeight: 400,
          maxWidth: 820,
        }}
      >
        {children}
      </h2>
      {tag && (
        <span
          className="justify-self-end self-start whitespace-nowrap"
          style={{
            fontFamily: "var(--kp-mono)",
            fontSize: 9,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "5px 11px",
            border: "1.5px solid var(--kp-ink)",
            background: "var(--kp-white)",
            boxShadow: "2px 2px 0 0 var(--kp-ink)",
          }}
        >
          {tag}
        </span>
      )}
    </div>
  );
}

/* ─────────────────────────────────────── Problem */

function ProblemSection() {
  const items = [
    {
      tag: "01",
      title: "Cobrança fragmentada",
      copy: "PIX aqui, cartão no Stripe, afiliado no Hotmart. Cada cliente vive num lugar, ninguém conversa.",
      bg: "var(--kp-white)",
    },
    {
      tag: "02",
      title: "Split manual",
      copy: "Planilha de sócio, comissão de afiliado, repasse pro fornecedor. O dinheiro cai, a dor começa.",
      bg: "var(--kp-green)",
    },
    {
      tag: "03",
      title: "Conciliação impossível",
      copy: "CSV diferente por gateway, taxa que aparece depois, chargeback sem aviso. Toda sexta é investigação.",
      bg: "var(--kp-pink)",
    },
  ];

  return (
    <section id="produto" className="kp-section">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
        <SectionHead num="02" sub="O problema" tag="Nº 02">
          Receber <em>no Brasil</em> virou um trabalho <em>paralelo.</em>
        </SectionHead>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.tag}
              className="kp-card"
              style={{ background: it.bg, padding: 28 }}
            >
              <div
                className="kp-mono"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: "var(--kp-ink)",
                }}
              >
                {it.tag}
              </div>
              <h3
                className="kp-display mt-3"
                style={{
                  fontSize: 26,
                  lineHeight: 1.1,
                  letterSpacing: "-0.015em",
                }}
              >
                {it.title}
              </h3>
              <p
                className="mt-3"
                style={{
                  color: it.bg === "var(--kp-white)" ? "var(--kp-muted)" : "var(--kp-ink)",
                  fontSize: 15,
                  lineHeight: 1.55,
                }}
              >
                {it.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────── How it works */

function HowItWorksSection() {
  const steps = [
    {
      n: "01",
      t: "Cria o link",
      d: "Link de pagamento, botão embedado ou API. Em 15 segundos você tá cobrando.",
    },
    {
      n: "02",
      t: "Cliente paga",
      d: "PIX em tempo real, cartão em D+1, cripto opcional. Checkout otimizado mobile-first.",
    },
    {
      n: "03",
      t: "Split roda",
      d: "Configura uma vez a regra de sócio, afiliado ou fornecedor. Rateio automático em todo recebimento.",
    },
    {
      n: "04",
      t: "Dashboard conta a história",
      d: "Entradas, conciliação, retenção. Webhook pro seu sistema. Relatório contábil pronto.",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="kp-section"
      style={{ background: "var(--kp-soft)" }}
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
        <SectionHead num="03" sub="Como funciona" tag="Nº 03">
          Quatro <em>passos.</em> <br />
          Zero planilha.
        </SectionHead>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="kp-card" style={{ padding: 22 }}>
              <div
                className="kp-mono inline-flex items-center justify-center"
                style={{
                  width: 40,
                  height: 40,
                  background: "var(--kp-ink)",
                  color: "var(--kp-paper)",
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                }}
              >
                {s.n}
              </div>
              <h3
                className="kp-display mt-4"
                style={{ fontSize: 22, lineHeight: 1.1 }}
              >
                {s.t}
              </h3>
              <p
                className="mt-2"
                style={{
                  color: "var(--kp-muted)",
                  fontSize: 14,
                  lineHeight: 1.55,
                }}
              >
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────── Features */

function FeaturesSection() {
  const feats: {
    title: string;
    desc: string;
    icon: ReactNode;
  }[] = [
    {
      title: "PIX instantâneo",
      desc: "Recebimento em segundos, 24/7, QR dinâmico e confirmação em tempo real.",
      icon: <IconPix />,
    },
    {
      title: "Cartão nacional e internacional",
      desc: "Bandeiras locais e globais, tokenização, 3DS pra reduzir chargeback.",
      icon: <IconCard />,
    },
    {
      title: "Recorrência nativa",
      desc: "Mensal, anual, customizado. Cobrança automática com retry inteligente.",
      icon: <IconRepeat />,
    },
    {
      title: "Split automático",
      desc: "Divida receita entre sócios, afiliados ou fornecedores por regra ou percentual.",
      icon: <IconSplit />,
    },
    {
      title: "Dashboard em tempo real",
      desc: "Entradas, conciliação, retenção, exportação contábil. Tudo no mesmo painel.",
      icon: <IconChart />,
    },
    {
      title: "API e webhooks",
      desc: "REST clean, SDK TypeScript e eventos em tempo real pra integrar no seu stack.",
      icon: <IconCode />,
    },
  ];

  return (
    <section className="kp-section">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
        <SectionHead num="04" sub="Features" tag="Nº 04">
          Tudo que você já precisou, <em>num só produto.</em>
        </SectionHead>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {feats.map((f) => (
            <div key={f.title} className="kp-card" style={{ padding: 28 }}>
              <div
                className="inline-flex items-center justify-center"
                style={{
                  width: 44,
                  height: 44,
                  background: "var(--kp-green)",
                  border: "1.5px solid var(--kp-ink)",
                  color: "var(--kp-ink)",
                  boxShadow: "2px 2px 0 0 var(--kp-ink)",
                }}
              >
                {f.icon}
              </div>
              <h3
                className="kp-display mt-5"
                style={{
                  fontSize: 24,
                  lineHeight: 1.1,
                  letterSpacing: "-0.015em",
                }}
              >
                {f.title}
              </h3>
              <p
                className="mt-2"
                style={{
                  color: "var(--kp-muted)",
                  fontSize: 14.5,
                  lineHeight: 1.55,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────── Pra quem é */

function ForWhoSection() {
  const personas = [
    {
      tag: "Freelancer",
      title: "Cobrar não é vergonha.",
      desc: "Link de cobrança por WhatsApp, recebe no PIX, libera o entregável. Sem banco maquiando taxa.",
      bullets: [
        "Link em 15 segundos",
        "Comprovante automático pro cliente",
        "Extrato limpo pro imposto",
      ],
      accent: "var(--kp-white)",
    },
    {
      tag: "Agência",
      title: "Mensal roda no automático.",
      desc: "Recorrência configurada uma vez, split pros sócios, repasse pro fornecedor. Menos Excel, mais entrega.",
      bullets: [
        "Assinatura mensal com retry",
        "Split configurável por cliente",
        "Relatório financeiro pronto",
      ],
      accent: "var(--kp-green)",
    },
    {
      tag: "Creator",
      title: "Produto digital escala sozinho.",
      desc: "Curso, comunidade, mentoria. Checkout mobile-first, afiliado com split automático, webhook pro acesso.",
      bullets: [
        "Checkout mobile-first",
        "Afiliado com split nativo",
        "Webhook pra liberar acesso",
      ],
      accent: "var(--kp-pink)",
    },
  ];

  return (
    <section
      id="pra-quem"
      className="kp-section"
      style={{ background: "var(--kp-soft)" }}
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
        <SectionHead num="05" sub="Pra quem é" tag="Nº 05">
          Feito <em>pra quem vende,</em> não pra banco.
        </SectionHead>

        <div className="grid lg:grid-cols-3 gap-6">
          {personas.map((p) => (
            <div
              key={p.tag}
              className="kp-card flex flex-col"
              style={{ background: p.accent, padding: 30 }}
            >
              <span
                className="kp-mono inline-flex w-max items-center"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  border: "1.5px solid var(--kp-ink)",
                  background: "var(--kp-white)",
                  padding: "4px 10px",
                  boxShadow: "2px 2px 0 0 var(--kp-ink)",
                }}
              >
                {p.tag}
              </span>
              <h3
                className="kp-display mt-5"
                style={{
                  fontSize: 30,
                  lineHeight: 1.05,
                  letterSpacing: "-0.015em",
                }}
              >
                {p.title}
              </h3>
              <p
                className="mt-3"
                style={{
                  color: p.accent === "var(--kp-white)" ? "var(--kp-muted)" : "var(--kp-ink)",
                  fontSize: 15,
                  lineHeight: 1.55,
                }}
              >
                {p.desc}
              </p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span
                      className="mt-1.5 w-2 h-2 shrink-0"
                      style={{
                        background: "var(--kp-ink)",
                        border: "1.5px solid var(--kp-ink)",
                      }}
                    />
                    <span style={{ fontSize: 14 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────── Pricing */

function PricingSection() {
  const plans = [
    {
      name: "Starter",
      desc: "Pra quem tá começando a cobrar com profissionalismo.",
      price: "0",
      unit: "taxa + R$ 0,99 / PIX",
      features: [
        "PIX e cartão",
        "Link de cobrança ilimitado",
        "Dashboard básico",
        "Exportação CSV",
      ],
      cta: "Entrar na lista",
      bg: "var(--kp-white)",
      highlight: false,
    },
    {
      name: "Pro",
      desc: "Pra agência e creator que precisa rodar recorrência + split.",
      price: "99",
      unit: "/mês · taxas reduzidas",
      features: [
        "Tudo do Starter",
        "Recorrência com retry",
        "Split automático ilimitado",
        "Webhooks + SDK TS",
        "Suporte com o time",
      ],
      cta: "Quero o Pro",
      bg: "var(--kp-green)",
      highlight: true,
    },
  ];

  return (
    <section id="pricing" className="kp-section">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
        <SectionHead num="06" sub="Pricing" tag="Nº 06">
          Dois <em>planos.</em> Taxas honestas.
        </SectionHead>

        <p
          style={{
            color: "var(--kp-muted)",
            fontSize: 14,
            marginTop: "-32px",
            marginBottom: 40,
            maxWidth: 540,
          }}
        >
          Durante o beta, quem entrar na lista agora tem 12 meses de Pro com
          taxa reduzida. Preços finais saem no lançamento.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className="kp-card flex flex-col"
              style={{
                background: p.bg,
                padding: 36,
                boxShadow: p.highlight
                  ? "6px 6px 0 0 var(--kp-ink)"
                  : "4px 4px 0 0 var(--kp-ink)",
              }}
            >
              <div className="flex items-start justify-between">
                <span
                  className="kp-mono inline-flex w-max"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    padding: "4px 10px",
                    border: "1.5px solid var(--kp-ink)",
                    background: "var(--kp-white)",
                    boxShadow: "2px 2px 0 0 var(--kp-ink)",
                  }}
                >
                  {p.name}
                </span>
                {p.highlight && (
                  <span
                    className="kp-mono inline-flex w-max"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.2em",
                      padding: "4px 10px",
                      background: "var(--kp-ink)",
                      color: "var(--kp-paper)",
                    }}
                  >
                    Recomendado
                  </span>
                )}
              </div>

              <h3
                className="kp-display mt-5"
                style={{
                  fontSize: 28,
                  lineHeight: 1.05,
                  letterSpacing: "-0.015em",
                }}
              >
                {p.desc}
              </h3>

              <div className="mt-6 flex items-baseline gap-2">
                <span
                  className="kp-display"
                  style={{
                    fontSize: 72,
                    lineHeight: 0.95,
                    fontStyle: "italic",
                  }}
                >
                  R${p.price}
                </span>
                <span
                  className="kp-mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.16em",
                    color: "var(--kp-muted)",
                  }}
                >
                  {p.unit}
                </span>
              </div>

              <ul className="mt-7 space-y-2.5 text-sm flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className="mt-[3px] shrink-0"
                    >
                      <path
                        d="M3 8.5l3 3 7-7"
                        stroke="var(--kp-ink)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span style={{ fontSize: 14.5 }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={`mt-8 ${p.highlight ? "kp-btn kp-btn-ink" : "kp-btn kp-btn-outline"}`}
              >
                {p.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────── FAQ */

function FAQSection() {
  const items = [
    {
      q: "Quando o Kaleidos Pay abre pro público?",
      a: "Estamos em private beta no segundo semestre de 2026. Quem entrar na lista agora tem prioridade de acesso e taxa reduzida nos primeiros 12 meses.",
    },
    {
      q: "Qual vai ser a taxa por transação?",
      a: "Trabalhamos pra bater ou ganhar das taxas de mercado no Brasil: PIX com valor fixo abaixo de R$ 0,99 por transação e cartão competitivo com Stripe e PagBank. Tabela oficial sai no lançamento.",
    },
    {
      q: "Kaleidos Pay é um banco ou infraestrutura em cima de um?",
      a: "Somos uma plataforma de pagamentos. Operamos em parceria com instituições reguladas pelo Banco Central pra você ter conformidade desde o dia 1, sem precisar abrir outra conta.",
    },
    {
      q: "Já tenho Stripe, Hotmart ou Pagar.me. Por que mudar?",
      a: "Você não precisa trocar tudo. O Kaleidos Pay foi desenhado pra coexistir: pode rodar só a recorrência, só o split ou só o checkout PIX mantendo o resto do stack.",
    },
    {
      q: "Tem API e SDK?",
      a: "Sim. API REST documentada, SDK TypeScript oficial no lançamento e webhooks em tempo real. Integração em poucas horas se você já tem um app.",
    },
    {
      q: "Dá pra receber em cripto?",
      a: "Sim, como opção. Aceitamos stablecoins (USDC, USDT) com conversão automática pro BRL na liquidação, pensado pra agência web3 e creator que cobra em dólar.",
    },
  ];

  return (
    <section
      id="faq"
      className="kp-section"
      style={{ background: "var(--kp-soft)" }}
    >
      <div className="max-w-[920px] mx-auto px-5 sm:px-6">
        <SectionHead num="07" sub="FAQ" tag="Nº 07">
          O que <em>todo mundo</em> pergunta.
        </SectionHead>

        <div className="kp-card" style={{ padding: "8px 28px" }}>
          {items.map((i) => (
            <FaqItem key={i.q} question={i.q} answer={i.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────── Final CTA */

function FinalCTA() {
  return (
    <section
      className="kp-section relative overflow-hidden"
      style={{ background: "var(--kp-ink)", color: "var(--kp-paper)" }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(124,240,103,.08) 0%, transparent 50%), radial-gradient(circle at 80% 90%, rgba(210,98,178,.08) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative max-w-[920px] mx-auto px-5 sm:px-6 text-center">
        <span
          className="kp-eyebrow mx-auto"
          style={{
            background: "var(--kp-paper)",
            color: "var(--kp-ink)",
          }}
        >
          <span className="kp-dot" />
          Lista de espera aberta
        </span>

        <h2
          className="kp-display mt-7"
          style={{
            fontSize: "clamp(40px, 5.6vw, 76px)",
            lineHeight: 1.0,
            letterSpacing: "-0.025em",
            color: "var(--kp-paper)",
          }}
        >
          Pronto pra <em>receber</em> <br />
          <span
            style={{
              background: "var(--kp-green)",
              color: "var(--kp-ink)",
              padding: "0 10px",
              fontStyle: "italic",
            }}
          >
            sem atrito?
          </span>
        </h2>

        <p
          className="mt-6 mx-auto"
          style={{
            fontSize: 16,
            lineHeight: 1.55,
            color: "rgba(247,245,239,0.7)",
            maxWidth: 540,
          }}
        >
          Acesso prioritário, taxa reduzida nos primeiros 12 meses e suporte
          direto com o time durante o beta.
        </p>

        <div className="mt-10 flex justify-center">
          <WaitlistForm size="lg" source="final-cta" align="center" />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────── Footer */

function Footer() {
  const columns = [
    {
      title: "Produto",
      links: [
        { label: "Features", href: "#" },
        { label: "Como funciona", href: "#como-funciona" },
        { label: "Pricing", href: "#pricing" },
        { label: "Roadmap", href: "#" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Kaleidos", href: "https://kaleidos.com.br" },
        { label: "Blog", href: "#" },
        { label: "Contato", href: "mailto:pay@kaleidos.com.br" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacidade", href: "#" },
        { label: "Termos", href: "#" },
      ],
    },
  ];

  return (
    <footer
      style={{
        background: "var(--kp-paper)",
        borderTop: "1.5px solid var(--kp-ink)",
        padding: "64px 0 40px",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-[1.3fr_repeat(3,0.7fr)] gap-10">
          <div>
            <Wordmark size={32} />
            <p
              className="mt-4 max-w-sm"
              style={{
                color: "var(--kp-muted)",
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              Um produto da Kaleidos. Construído no Brasil, pensado pra quem
              vende no Brasil.
            </p>
            <a
              href="mailto:pay@kaleidos.com.br"
              className="mt-5 inline-block"
              style={{
                fontFamily: "var(--kp-display)",
                fontSize: 20,
                fontStyle: "italic",
                color: "var(--kp-ink)",
                letterSpacing: "-0.01em",
                textDecoration: "underline",
                textDecorationThickness: "1px",
                textUnderlineOffset: "3px",
              }}
            >
              pay@kaleidos.com.br
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4
                className="kp-mono"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: "var(--kp-muted)",
                  marginBottom: 14,
                }}
              >
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      style={{
                        fontSize: 14,
                        color: "var(--kp-ink)",
                      }}
                      className="hover:underline underline-offset-4"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="kp-divider" style={{ margin: "40px 0 20px" }} />

        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{
            fontFamily: "var(--kp-mono)",
            fontSize: 10,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--kp-muted)",
          }}
        >
          <span>© {new Date().getFullYear()} Kaleidos · Brasil</span>
          <span>
            <span style={{ color: "var(--kp-pink)" }}>✦</span> Feito com tinta e
            código
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────── Icons */

function IconPix() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12l7-7 7 7-7 7-7-7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 12l4-4 4 4-4 4-4-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconCard() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="18" height="13" rx="0" stroke="currentColor" strokeWidth="2" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
      <path d="M7 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconRepeat() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 11V9a4 4 0 0 1 4-4h9m-3-3l3 3-3 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 13v2a4 4 0 0 1-4 4H7m3 3l-3-3 3-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconSplit() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v7m0 0l4 5m-4-5l-4 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="3" r="1.8" fill="currentColor" />
      <circle cx="16" cy="16" r="2.4" stroke="currentColor" strokeWidth="2" />
      <circle cx="8" cy="16" r="2.4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 19h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M7 15v-3m4 3V8m4 7v-5m4 5v-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconCode() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 5l-4 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
