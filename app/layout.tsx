import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const junicode = localFont({
  variable: "--font-junicode",
  src: [
    { path: "../fonts/Junicode.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Junicode-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/Junicode-Italic.ttf", weight: "400", style: "italic" },
    {
      path: "../fonts/Junicode-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

const bricolage = localFont({
  variable: "--font-bricolage",
  src: [
    {
      path: "../fonts/bricolage-grotesque-latin-200-normal.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/bricolage-grotesque-latin-300-normal.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/bricolage-grotesque-latin-400-normal.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/bricolage-grotesque-latin-500-normal.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/bricolage-grotesque-latin-600-normal.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/bricolage-grotesque-latin-700-normal.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/bricolage-grotesque-latin-800-normal.ttf",
      weight: "800",
      style: "normal",
    },
  ],
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
      className={`${junicode.variable} ${bricolage.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="bg-cream text-ink font-sans text-base leading-normal overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
