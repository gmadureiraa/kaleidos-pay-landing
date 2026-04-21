import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://pay.kaleidos.com.br"),
  title: "Kaleidos Pay — Receba sem atrito",
  description:
    "Checkout sem fricção, split automático e gestão de recorrência. O Kaleidos Pay é o gateway de pagamento que entende o Brasil.",
  openGraph: {
    title: "Kaleidos Pay — Receba sem atrito",
    description:
      "Checkout sem fricção, split automático e gestão de recorrência em um só lugar.",
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
    description: "Checkout sem fricção, split automático e recorrência.",
    images: ["/og.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
