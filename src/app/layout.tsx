import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Muhammed Ahad",
    template: "%s — Muhammed Ahad",
  },
  description: "Software engineering notes, projects and experiments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
