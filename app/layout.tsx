import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CondoAI Platform",
  description: "AI-Powered Condominium Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
