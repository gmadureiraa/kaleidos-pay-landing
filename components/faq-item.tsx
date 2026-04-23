"use client";

import { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

export function FaqItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="last:border-0"
      style={{ borderBottom: "1.5px solid var(--kp-ink)" }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-5 text-left group"
      >
        <span
          className="group-hover:opacity-80 transition-opacity"
          style={{
            fontFamily: "var(--kp-display)",
            fontSize: "clamp(18px, 2.2vw, 24px)",
            lineHeight: 1.15,
            color: "var(--kp-ink)",
            fontWeight: 400,
          }}
        >
          {question}
        </span>
        <span
          className={`shrink-0 w-9 h-9 grid place-items-center transition-all`}
          style={{
            border: "1.5px solid var(--kp-ink)",
            boxShadow: "2px 2px 0 0 var(--kp-ink)",
            background: open ? "var(--kp-green)" : "var(--kp-white)",
            transform: open ? "rotate(45deg)" : "none",
          }}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1v10M1 6h10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className="max-w-2xl"
            style={{
              color: "var(--kp-muted)",
              fontSize: 15,
              lineHeight: 1.6,
            }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
