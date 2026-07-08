import type { Metadata } from "next";
import { Archivo, Archivo_Black, Inter, Newsreader } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Anubha — Product Manager",
  description:
    "APM at Emversity, trained in biosciences at IIT Roorkee, now building AI-native products end to end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${archivo.variable} ${inter.variable} ${newsreader.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="bg-cream text-ink font-sans text-base leading-normal overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
