import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans-custom",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-custom",
  subsets: ["latin"],
  display: "swap",
});

const serif = Instrument_Serif({
  variable: "--font-serif-custom",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pay.kaleidos.com.br"),
  title: "Kaleidos Pay — Receba sem atrito",
  description:
    "Gateway de pagamentos pra agências, creators e freelancers. PIX instantâneo, cartão, recorrência e split automático num só painel.",
  openGraph: {
    title: "Kaleidos Pay — Receba sem atrito",
    description:
      "PIX instantâneo, cartão, recorrência e split automático num só painel.",
    url: "https://pay.kaleidos.com.br",
    siteName: "Kaleidos Pay",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Kaleidos Pay — Receba sem atrito",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaleidos Pay — Receba sem atrito",
    description:
      "PIX instantâneo, cartão, recorrência e split automático num só painel.",
    images: ["/og.svg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="pt-BR"
        className={`${sans.variable} ${mono.variable} ${serif.variable} h-full antialiased`}
      >
        <body className="kp-grain min-h-full flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  );
}
