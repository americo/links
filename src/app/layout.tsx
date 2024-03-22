import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "400", "600", "700"] });

export const metadata: Metadata = {
  title: "Links do Américo",
  description: "Links para os meus projectos, artigos e redes sociais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
