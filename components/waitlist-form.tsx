"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

type Props = {
  source?: string;
  size?: "md" | "lg";
  className?: string;
  buttonLabel?: string;
  placeholder?: string;
  align?: "start" | "center";
};

export function WaitlistForm({
  source = "hero",
  size = "md",
  className = "",
  buttonLabel = "Entrar na lista",
  placeholder = "seu@email.com",
  align = "start",
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

  const inputSize =
    size === "lg" ? "py-4 text-base" : "py-3 text-sm";

  return (
    <form
      onSubmit={onSubmit}
      className={`w-full max-w-md ${align === "center" ? "mx-auto" : ""} ${className}`}
      noValidate
    >
      <div className="flex flex-col sm:flex-row gap-2 items-stretch">
        <label className="sr-only" htmlFor={`waitlist-email-${source}`}>
          Seu melhor email
        </label>
        <input
          id={`waitlist-email-${source}`}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className={`kp-input flex-1 ${inputSize} disabled:opacity-60`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="kp-btn kp-btn-ink disabled:opacity-70 disabled:cursor-not-allowed shrink-0"
          style={size === "lg" ? { padding: "14px 22px", fontSize: 11.5 } : undefined}
        >
          {status === "loading" ? (
            <>
              <Spinner /> Entrando…
            </>
          ) : (
            <>
              {buttonLabel}
              <Arrow />
            </>
          )}
        </button>
      </div>

      <div
        className={`min-h-[1.5rem] mt-3 px-1 text-sm ${align === "center" ? "text-center" : ""}`}
      >
        {status === "success" && (
          <p className="font-medium flex items-center gap-1.5" style={{ color: "var(--accent-deep)" }}>
            <CheckIcon /> {message}
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600">{message}</p>
        )}
        {status === "idle" && (
          <p
            className="text-xs"
            style={{
              color: "var(--kp-muted)",
              fontFamily: "var(--kp-mono)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Sem spam · saímos se pedir
          </p>
        )}
      </div>
    </form>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10m0 0L9 4m4 4l-4 4"
        stroke="currentColor"
        strokeWidth="2"
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
