// app/layout.tsx
import type { Metadata } from "next";
import { inter, jetbrain_mono } from "@/app/fonts";
import "./globals.css";
import { ThemeProvider } from "@/app/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import StickyIcons from "@/components/sections/StickyIcons";
import Footer from "@/components/sections/Footer";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Gustavo Máximo",
  description:
    "Executivo, especialista em liderança situacional, docente, mentor e criador do Método C.O.M.A.V. Gestão estratégica, desenvolvimento de pessoas e liderança em ambientes de alta complexidade.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />
        <meta property="og:title" content="Gustavo Máximo — Executivo, docente e mentor em liderança" />
        <meta
          property="og:description"
          content="Especialista em liderança situacional, docente e criador do Método C.O.M.A.V. Gestão estratégica e desenvolvimento de pessoas."
        />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${jetbrain_mono.variable} ${inter.variable} font-mono antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <FloatingNav />
            <StickyIcons />
            {children}
            <Footer />
          </LanguageProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
