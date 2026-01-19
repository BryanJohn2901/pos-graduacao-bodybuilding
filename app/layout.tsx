import type { Metadata } from "next";
import { Bebas_Neue, Oswald, Montserrat } from "next/font/google";
import "./globals.css";

// Fonte para títulos principais - impactante e bold
const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

// Fonte para subtítulos e destaques - condensada e moderna
const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

// Fonte para corpo de texto - elegante e legível
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pós-Graduação em Bodybuilding e Estética Corporal | Personal Trainer Academy",
  description: "Descubra e aplique protocolos avançados de treinamento e gere grandes resultados estéticos. Pós-graduação reconhecida pelo MEC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${bebasNeue.variable} ${oswald.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
