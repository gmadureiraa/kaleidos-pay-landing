"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

type Props = {
  source?: string;
  size?: "md" | "lg";
  className?: string;
};

export function WaitlistForm({
  source = "hero",
  size = "md",
  className = "",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      const data = (await res.json()) as {
        ok: boolean;
        error?: string;
        duplicate?: boolean;
      };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error ?? "Algo deu errado. Tente de novo.");
        return;
      }

      setStatus("success");
      setMessage(
        data.duplicate
          ? "Você já está na lista. Te avisamos quando abrir."
          : "Pronto. Te avisamos assim que abrir."
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Sem conexão. Tente de novo em alguns segundos.");
    }
  };

  const inputPadding = size === "lg" ? "py-4 text-base" : "py-3 text-sm";
  const buttonPadding = size === "lg" ? "py-4 px-5" : "py-3 px-4";

  return (
    <form
      onSubmit={onSubmit}
      className={`w-full max-w-md ${className}`}
      noValidate
    >
      <div className="flex flex-col sm:flex-row gap-2 p-1.5 rounded-2xl border border-[var(--border)] bg-white/90 backdrop-blur shadow-[0_1px_2px_rgba(10,10,10,0.04),0_12px_40px_-16px_rgba(16,185,129,0.25)]">
        <label className="sr-only" htmlFor={`waitlist-email-${source}`}>
          Seu melhor email
        </label>
        <input
          id={`waitlist-email-${source}`}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className={`flex-1 bg-transparent outline-none px-4 ${inputPadding} text-[var(--foreground)] placeholder:text-[var(--muted)] disabled:opacity-60`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`btn-primary ${buttonPadding} disabled:opacity-70 disabled:cursor-not-allowed shrink-0`}
        >
          {status === "loading" ? (
            <>
              <Spinner /> Entrando…
            </>
          ) : (
            <>
              Entrar na lista
              <Arrow />
            </>
          )}
        </button>
      </div>

      <div className="min-h-[1.5rem] mt-3 px-1 text-sm">
        {status === "success" && (
          <p className="text-[var(--accent-deep)] font-medium flex items-center gap-1.5">
            <CheckIcon /> {message}
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600">{message}</p>
        )}
        {status === "idle" && (
          <p className="text-[var(--muted)] text-xs">
            Sem spam. Só te chamamos quando tiver acesso.
          </p>
        )}
      </div>
    </form>
  );
}

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10m0 0L9 4m4 4l-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="3"
      />
      <path
        d="M22 12a10 10 0 0 1-10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8.5l3 3 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
