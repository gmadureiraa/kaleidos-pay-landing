export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[620px] mx-auto">
      {/* Glow behind */}
      <div className="absolute -inset-10 bg-gradient-to-tr from-emerald-200/40 via-transparent to-emerald-100/40 blur-3xl rounded-full -z-10" />

      {/* Window frame */}
      <div className="rounded-2xl border border-[var(--border)] bg-white shadow-[0_20px_60px_-20px_rgba(10,10,10,0.2)] overflow-hidden">
        {/* Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--surface)]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="font-mono-custom text-xs text-[var(--muted)]">
            pay.kaleidos.com.br/dashboard
          </div>
          <div className="w-12" />
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-[var(--muted)]">Recebido hoje</div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-semibold tracking-tight">
                  R$ 48.920
                </span>
                <span className="text-xs font-medium text-[var(--accent-deep)] bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded-md">
                  +22%
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <span className="pill">
                <span className="pill-dot" />
                ao vivo
              </span>
            </div>
          </div>

          {/* Chart */}
          <div className="h-24 relative">
            <svg
              viewBox="0 0 600 100"
              className="w-full h-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,70 C50,60 90,75 130,60 C180,40 220,55 260,45 C310,30 350,50 400,35 C450,20 500,30 550,15 L600,20 L600,100 L0,100 Z"
                fill="url(#g1)"
              />
              <path
                d="M0,70 C50,60 90,75 130,60 C180,40 220,55 260,45 C310,30 350,50 400,35 C450,20 500,30 550,15 L600,20"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Transaction rows */}
          <div className="divide-y divide-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden">
            {[
              {
                label: "PIX · Mariana Rocha",
                sub: "checkout-abc",
                val: "+ R$ 2.480,00",
                tag: "PIX",
              },
              {
                label: "Cartão · Lucas Tavares",
                sub: "recorrência · mensal",
                val: "+ R$ 189,00",
                tag: "CARD",
              },
              {
                label: "Split · Agência Vento",
                sub: "70/30 · 2 partes",
                val: "+ R$ 5.600,00",
                tag: "SPLIT",
              },
            ].map((tx) => (
              <div
                key={tx.label}
                className="flex items-center justify-between gap-3 px-4 py-3 text-sm"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`font-mono-custom text-[10px] px-1.5 py-0.5 rounded-md border ${
                      tx.tag === "PIX"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : tx.tag === "CARD"
                          ? "border-slate-200 bg-slate-50 text-slate-700"
                          : "border-violet-200 bg-violet-50 text-violet-700"
                    }`}
                  >
                    {tx.tag}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate font-medium">{tx.label}</div>
                    <div className="text-xs text-[var(--muted)] truncate font-mono-custom">
                      {tx.sub}
                    </div>
                  </div>
                </div>
                <div className="font-mono-custom font-medium text-[var(--foreground)] whitespace-nowrap">
                  {tx.val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating card */}
      <div className="hidden md:flex absolute -left-8 bottom-12 rounded-xl border border-[var(--border)] bg-white shadow-[0_10px_30px_-10px_rgba(10,10,10,0.15)] px-3.5 py-2.5 items-center gap-2.5 rotate-[-4deg]">
        <div className="w-8 h-8 rounded-lg bg-emerald-500 grid place-items-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8.5l3 3 7-7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="text-xs">
          <div className="font-medium">PIX recebido</div>
          <div className="text-[var(--muted)] font-mono-custom">em 1,2s</div>
        </div>
      </div>
    </div>
  );
}
