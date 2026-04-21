"use client";

import { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

export function FaqItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[var(--border)] last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-5 text-left group"
      >
        <span className="font-medium text-[var(--foreground)] group-hover:text-[var(--accent-deep)] transition-colors">
          {question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full border border-[var(--border)] grid place-items-center transition-transform ${
            open ? "rotate-45 bg-[var(--accent)] text-white border-transparent" : ""
          }`}
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1v10M1 6h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[var(--muted)] leading-relaxed max-w-2xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
