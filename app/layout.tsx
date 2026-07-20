import type { Metadata } from "next";
import localFont from "next/font/local";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import CursorFollower from "@/components/motion/CursorFollower";
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

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var isDark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${junicode.variable} ${bricolage.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="bg-cream text-ink font-sans text-base leading-normal overflow-x-hidden antialiased">
        <div
          aria-hidden
          className="grain-overlay pointer-events-none fixed inset-0 z-[95] opacity-[0.03] mix-blend-overlay"
        />
        <CursorFollower />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
