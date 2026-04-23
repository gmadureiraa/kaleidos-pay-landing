export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      {/* Floating stickers */}
      <span
        className="absolute z-20 kp-sticker"
        style={{
          top: "-4%",
          right: "-2%",
          background: "var(--kp-green)",
          transform: "rotate(6deg)",
        }}
      >
        ✦ PIX em ~1s
      </span>
      <span
        className="absolute z-20 kp-sticker hidden md:inline-flex"
        style={{
          bottom: "14%",
          left: "-5%",
          background: "var(--kp-pink)",
          transform: "rotate(-5deg)",
        }}
      >
        Split 70/30 · automático
      </span>

      {/* Main panel */}
      <div className="kp-mock" style={{ padding: 0, overflow: "hidden" }}>
        {/* Titlebar */}
        <div
          className="flex items-center justify-between"
          style={{
            borderBottom: "1.5px solid var(--kp-ink)",
            padding: "10px 14px",
            background: "var(--kp-soft)",
            fontFamily: "var(--kp-mono)",
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--kp-muted)",
          }}
        >
          <div className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "var(--kp-pink)", border: "1px solid var(--kp-ink)" }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "var(--kp-yellow)", border: "1px solid var(--kp-ink)" }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "var(--kp-green)", border: "1px solid var(--kp-ink)" }}
            />
          </div>
          <span>pay.kaleidos.com.br</span>
          <span>ao vivo</span>
        </div>

        {/* Body */}
        <div style={{ padding: 20 }}>
          {/* header */}
          <div className="flex items-end justify-between gap-3">
            <div>
              <div
                style={{
                  fontFamily: "var(--kp-mono)",
                  fontSize: 9.5,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--kp-muted)",
                }}
              >
                Recebido hoje
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span
                  className="kp-display"
                  style={{ fontSize: 40, lineHeight: 1, fontStyle: "italic" }}
                >
                  R$ 48.920
                </span>
                <span
                  className="kp-mono"
                  style={{
                    fontSize: 10,
                    background: "var(--kp-green)",
                    padding: "2px 7px",
                    border: "1.5px solid var(--kp-ink)",
                    letterSpacing: "0.16em",
                  }}
                >
                  +22%
                </span>
              </div>
            </div>
            <span className="kp-eyebrow" style={{ fontSize: 8 }}>
              <span className="kp-dot" />
              Live
            </span>
          </div>

          {/* Chart */}
          <div
            style={{
              marginTop: 18,
              height: 96,
              position: "relative",
              border: "1.5px solid var(--kp-ink)",
              background: "var(--kp-paper)",
              padding: 6,
            }}
          >
            <svg
              viewBox="0 0 600 100"
              className="w-full h-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,70 C50,60 90,75 130,60 C180,40 220,55 260,45 C310,30 350,50 400,35 C450,20 500,30 550,15 L600,20 L600,100 L0,100 Z"
                fill="var(--kp-green)"
                fillOpacity="0.3"
              />
              <path
                d="M0,70 C50,60 90,75 130,60 C180,40 220,55 260,45 C310,30 350,50 400,35 C450,20 500,30 550,15 L600,20"
                fill="none"
                stroke="var(--kp-ink)"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Transaction rows */}
          <div
            style={{
              marginTop: 16,
              border: "1.5px solid var(--kp-ink)",
            }}
          >
            {[
              {
                label: "PIX · Mariana Rocha",
                sub: "checkout-abc",
                val: "+ R$ 2.480",
                tag: "PIX",
                bg: "var(--kp-green)",
              },
              {
                label: "Cartão · Lucas Tavares",
                sub: "recorrência · mensal",
                val: "+ R$ 189",
                tag: "Card",
                bg: "var(--kp-white)",
              },
              {
                label: "Split · Agência Vento",
                sub: "70/30 · 2 partes",
                val: "+ R$ 5.600",
                tag: "Split",
                bg: "var(--kp-pink)",
              },
            ].map((tx, i, arr) => (
              <div
                key={tx.label}
                className="flex items-center justify-between gap-3"
                style={{
                  padding: "10px 12px",
                  borderBottom:
                    i === arr.length - 1 ? "none" : "1px solid rgba(10,10,10,.15)",
                  fontSize: 13,
                }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className="kp-mono"
                    style={{
                      fontSize: 9,
                      padding: "3px 7px",
                      background: tx.bg,
                      border: "1.5px solid var(--kp-ink)",
                      letterSpacing: "0.16em",
                      flexShrink: 0,
                    }}
                  >
                    {tx.tag}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate font-medium">{tx.label}</div>
                    <div
                      className="truncate"
                      style={{
                        fontSize: 11,
                        color: "var(--kp-muted)",
                        fontFamily: "var(--kp-mono)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {tx.sub}
                    </div>
                  </div>
                </div>
                <div
                  className="font-medium whitespace-nowrap"
                  style={{
                    fontFamily: "var(--kp-display)",
                    fontSize: 17,
                    fontStyle: "italic",
                  }}
                >
                  {tx.val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
