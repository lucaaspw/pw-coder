import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucas Gonçalves | Desenvolvedor Full Stack",
  description:
    "Desenvolvedor Full Stack especializado em React, Next.js, TypeScript e .NET. Criação de aplicações web e mobile modernas.",
  keywords: [
    "desenvolvedor",
    "full stack",
    "react",
    "next.js",
    "typescript",
    "desenvolvimento web",
    "aplicações mobile",
  ],
  authors: [{ name: "Lucas Gonçalves" }],
  creator: "Lucas Gonçalves",
  publisher: "Lucas Gonçalves",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lucasgoncalves.dev"),
  openGraph: {
    title: "Lucas Gonçalves | Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack especializado em React, Next.js, TypeScript e .NET.",
    url: "https://lucasgoncalves.dev",
    siteName: "Lucas Gonçalves",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lucas Gonçalves - Desenvolvedor Full Stack",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Gonçalves | Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack especializado em React, Next.js, TypeScript e .NET.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
