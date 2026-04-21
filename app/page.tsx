import { WaitlistForm } from "@/components/waitlist-form";
import { FaqItem } from "@/components/faq-item";
import { DashboardMockup } from "@/components/dashboard-mockup";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <ForWho />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-7 h-7">
        <div className="absolute inset-0 rounded-[9px] bg-gradient-to-br from-emerald-500 to-emerald-700" />
        <div className="absolute inset-[3px] rounded-[6px] bg-white grid place-items-center">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700" />
        </div>
      </div>
      <span className="font-display text-[1.05rem] font-semibold tracking-tight">
        Kaleidos Pay
      </span>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-6 py-3.5">
        <Logo />
        <nav className="hidden md:flex items-center gap-7 text-sm text-[var(--muted)]">
          <a href="#produto" className="hover:text-[var(--foreground)]">
            Produto
          </a>
          <a href="#como-funciona" className="hover:text-[var(--foreground)]">
            Como funciona
          </a>
          <a href="#pra-quem" className="hover:text-[var(--foreground)]">
            Pra quem é
          </a>
          <a href="#faq" className="hover:text-[var(--foreground)]">
            FAQ
          </a>
        </nav>
        <a href="#waitlist" className="btn-primary py-2 px-3.5 text-sm">
          Entrar na lista
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden border-b border-[var(--border)]"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[620px] hero-glow pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-16 sm:pt-24 pb-20 sm:pb-28 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <div className="max-w-xl">
          <span className="pill">
            <span className="pill-dot" />
            Em construção · lista de espera aberta
          </span>

          <h1 className="font-display text-[2.6rem] sm:text-6xl leading-[1.02] font-semibold mt-6 text-[var(--foreground)]">
            Receba pagamento
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">sem atrito.</span>
              <span className="absolute inset-x-1 bottom-1 h-3 bg-emerald-200/80 -z-0 rounded-sm" />
            </span>
          </h1>

          <p className="mt-6 text-lg text-[var(--muted)] leading-relaxed">
            Kaleidos Pay é o gateway que entende o Brasil. PIX instantâneo,
            cartão, recorrência e split automático num único checkout, numa
            única API, num único dashboard.
          </p>

          <div className="mt-8">
            <WaitlistForm size="lg" source="hero" />
          </div>

          <div className="mt-10 flex items-center gap-5 text-xs text-[var(--muted)] font-mono-custom">
            <span className="flex items-center gap-1.5">
              <Dot /> PIX em segundos
            </span>
            <span className="flex items-center gap-1.5">
              <Dot /> Split nativo
            </span>
            <span className="flex items-center gap-1.5">
              <Dot /> API first
            </span>
          </div>
        </div>

        <div className="relative">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return (
    <span
      className="w-1 h-1 rounded-full bg-[var(--accent)]"
      aria-hidden="true"
    />
  );
}

function Problem() {
  const items = [
    {
      tag: "01",
      title: "Tempo que some",
      copy: "Você passa mais tempo lidando com gateway, reembolso e planilha do que entregando o que sabe fazer.",
    },
    {
      tag: "02",
      title: "Taxa que corrói",
      copy: "Gateways genéricos cobram por transação sem entender seu modelo. R$ 30 somem por ciclo sem você ver.",
    },
    {
      tag: "03",
      title: "Conciliação manual",
      copy: "Split de sócio, comissão de afiliado, repasse pro fornecedor. Tudo numa planilha que ninguém confia mais.",
    },
  ];

  return (
    <section
      id="produto"
      className="py-20 sm:py-28 border-b border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl">
          <span className="pill">
            <span className="pill-dot" /> O problema
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight mt-5">
            Receber no Brasil é um trabalho paralelo.
          </h2>
          <p className="text-[var(--muted)] text-lg mt-4 leading-relaxed">
            Quem vende serviço, produto digital ou opera um time sabe: o
            checkout é só a ponta. O difícil vem depois.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {items.map((it) => (
            <div key={it.tag} className="card p-7">
              <div className="font-mono-custom text-xs text-[var(--accent-deep)]">
                {it.tag}
              </div>
              <h3 className="font-display text-xl font-semibold mt-3">
                {it.title}
              </h3>
              <p className="text-[var(--muted)] mt-2 leading-relaxed">
                {it.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      t: "Checkout",
      d: "Link de pagamento, botão embedado ou API. Cliente paga em PIX ou cartão em segundos.",
    },
    {
      n: "02",
      t: "Recebimento",
      d: "O dinheiro cai direto na sua conta Kaleidos Pay. PIX em tempo real, cartão em D+1.",
    },
    {
      n: "03",
      t: "Split automático",
      d: "Divida por sócios, afiliados, fornecedores. Configura uma vez, roda pra sempre.",
    },
    {
      n: "04",
      t: "Relatório",
      d: "Dashboard em tempo real, exportação contábil, webhook pro seu sistema. Nada mais de planilha.",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="py-20 sm:py-28 border-b border-[var(--border)] bg-[var(--surface)]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl">
          <span className="pill">
            <span className="pill-dot" /> Como funciona
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight mt-5">
            Quatro passos. Zero planilha.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-4 gap-5 relative">
          <div
            className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-[var(--border)]"
            aria-hidden="true"
          />
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative bg-white border border-[var(--border)] rounded-xl p-6"
            >
              <div className="w-11 h-11 rounded-full bg-[var(--foreground)] text-white grid place-items-center font-mono-custom text-sm font-medium -mt-11 mb-4 relative z-10">
                {s.n}
              </div>
              <h3 className="font-display text-lg font-semibold">{s.t}</h3>
              <p className="text-[var(--muted)] text-sm mt-2 leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const feats: {
    title: string;
    desc: string;
    icon: React.ReactNode;
  }[] = [
    {
      title: "PIX instantâneo",
      desc: "Recebimento em segundos, 24/7, com QR dinâmico e confirmação em tempo real.",
      icon: <IconPix />,
    },
    {
      title: "Cartão nacional e internacional",
      desc: "Bandeiras brasileiras e globais, tokenização e 3DS para reduzir chargeback.",
      icon: <IconCard />,
    },
    {
      title: "Recorrência nativa",
      desc: "Assinatura mensal, anual ou customizada. Cobrança automática, retry inteligente.",
      icon: <IconRepeat />,
    },
    {
      title: "Split automático",
      desc: "Divida receita entre sócios, afiliados ou fornecedores por regra ou percentual.",
      icon: <IconSplit />,
    },
    {
      title: "Dashboard em tempo real",
      desc: "Veja entradas, conciliação e retenção no mesmo painel. Exportação contábil pronta.",
      icon: <IconChart />,
    },
    {
      title: "API e webhooks",
      desc: "REST clean, SDK TypeScript e eventos em tempo real para você integrar no seu stack.",
      icon: <IconCode />,
    },
  ];

  return (
    <section className="py-20 sm:py-28 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-2xl">
            <span className="pill">
              <span className="pill-dot" /> Features
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight mt-5">
              Tudo que você já precisou,
              <br />
              num só produto.
            </h2>
          </div>
          <p className="text-[var(--muted)] max-w-sm">
            Construído por quem opera uma agência e sabe o que falta no mercado
            atual.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {feats.map((f) => (
            <div
              key={f.title}
              className="card p-6 group hover:shadow-[0_10px_40px_-20px_rgba(16,185,129,0.35)]"
            >
              <div className="w-11 h-11 rounded-lg bg-emerald-50 text-[var(--accent-deep)] grid place-items-center border border-emerald-100 group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
                {f.icon}
              </div>
              <h3 className="font-display text-lg font-semibold mt-5">
                {f.title}
              </h3>
              <p className="text-[var(--muted)] text-sm mt-2 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForWho() {
  const personas = [
    {
      tag: "Freelancer",
      title: "Cobrar não é vergonha.",
      desc: "Envie link de pagamento por WhatsApp, receba por PIX e libere o entregável. Sem burocracia, sem banco maquiando taxa.",
      bullets: [
        "Link de cobrança em 15 segundos",
        "Comprovante automático pro cliente",
        "Extrato bonito pro imposto",
      ],
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
    },
    {
      tag: "Creator",
      title: "Produto digital escala sozinho.",
      desc: "Curso, comunidade, mentoria. Checkout otimizado mobile, afiliado com split automático, webhook pro seu acesso.",
      bullets: [
        "Checkout mobile-first",
        "Afiliado com split nativo",
        "Webhook pra liberar acesso",
      ],
    },
  ];

  return (
    <section
      id="pra-quem"
      className="py-20 sm:py-28 border-b border-[var(--border)] bg-[var(--surface)]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl">
          <span className="pill">
            <span className="pill-dot" /> Pra quem é
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight mt-5">
            Pensado pra quem vende, não pra banco.
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-4">
          {personas.map((p) => (
            <div key={p.tag} className="card p-7 bg-white flex flex-col">
              <span className="font-mono-custom text-[11px] tracking-wider uppercase text-[var(--accent-deep)]">
                {p.tag}
              </span>
              <h3 className="font-display text-2xl font-semibold mt-3">
                {p.title}
              </h3>
              <p className="text-[var(--muted)] mt-3 leading-relaxed">
                {p.desc}
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    <span>{b}</span>
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

function Faq() {
  const items = [
    {
      q: "Quando o Kaleidos Pay abre pro público?",
      a: "Estamos em private beta no segundo semestre de 2026. Quem entrar na lista agora tem prioridade de acesso e uma taxa reduzida nos primeiros 12 meses.",
    },
    {
      q: "Qual vai ser a taxa por transação?",
      a: "Trabalhamos para bater ou ganhar das taxas de mercado no Brasil: PIX com valor fixo abaixo de R$ 0,99 por transação e cartão competitivo com Stripe e PagBank. A tabela oficial sai no lançamento.",
    },
    {
      q: "Kaleidos Pay é um banco ou uma infraestrutura em cima de um?",
      a: "Somos uma plataforma de pagamentos. Operamos em parceria com instituições reguladas pelo Banco Central para que você tenha conformidade desde o dia 1, sem precisar abrir outra conta.",
    },
    {
      q: "Já tenho Stripe, Hotmart ou Pagar.me. Por que mudar?",
      a: "Você não precisa trocar tudo. O Kaleidos Pay foi desenhado para coexistir: pode rodar só a recorrência, só o split ou só o checkout PIX enquanto mantém o resto do seu stack.",
    },
    {
      q: "Tem API e SDK?",
      a: "Sim. API REST documentada, SDK TypeScript oficial no lançamento e webhooks em tempo real. Você consegue integrar em poucas horas se já tem um app.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 border-b border-[var(--border)]"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl">
          <span className="pill">
            <span className="pill-dot" /> FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight mt-5">
            O que todo mundo pergunta.
          </h2>
        </div>

        <div className="mt-10 bg-white rounded-2xl border border-[var(--border)] px-6 sm:px-8">
          {items.map((i) => (
            <FaqItem key={i.q} question={i.q} answer={i.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 border-b border-[var(--border)]">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />
      <div className="absolute inset-x-0 top-0 h-full hero-glow" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-6 text-center">
        <span className="pill mx-auto">
          <span className="pill-dot" /> Lista de espera
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight mt-6 leading-[1.05]">
          Seja um dos primeiros
          <br />a receber sem atrito.
        </h2>
        <p className="text-lg text-[var(--muted)] mt-5 max-w-xl mx-auto">
          Acesso prioritário, taxa reduzida nos primeiros 12 meses e suporte
          direto com o time durante o beta.
        </p>
        <div className="mt-9 flex justify-center">
          <WaitlistForm size="lg" source="final-cta" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <Logo />
          <p className="text-xs text-[var(--muted)] mt-3 max-w-sm">
            Kaleidos Pay · um produto da Kaleidos. Construído no Brasil, pensado
            para quem vende no Brasil.
          </p>
        </div>
        <div className="flex flex-col sm:items-end gap-2 text-sm">
          <a
            href="mailto:pay@kaleidos.com.br"
            className="text-[var(--foreground)] hover:text-[var(--accent-deep)]"
          >
            pay@kaleidos.com.br
          </a>
          <div className="flex items-center gap-4 text-[var(--muted)] text-xs">
            <a
              href="https://kaleidos.com.br"
              className="hover:text-[var(--foreground)]"
            >
              kaleidos.com.br
            </a>
            <span>·</span>
            <span>© {new Date().getFullYear()} Kaleidos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Icons ---------- */

function IconPix() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12l7-7 7 7-7 7-7-7z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 12l4-4 4 4-4 4-4-4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconCard() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="6"
        width="18"
        height="13"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M7 15h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconRepeat() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 11V9a4 4 0 0 1 4-4h9m-3-3l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 13v2a4 4 0 0 1-4 4H7m3 3l-3-3 3-3"
        stroke="currentColor"
        strokeWidth="1.8"
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
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="3" r="1.6" fill="currentColor" />
      <circle cx="16" cy="16" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="8" cy="16" r="2.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 19h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 15v-3m4 3V8m4 7v-5m4 5v-2"
        stroke="currentColor"
        strokeWidth="1.8"
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
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
