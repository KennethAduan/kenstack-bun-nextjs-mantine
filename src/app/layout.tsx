import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css";

import { ColorSchemeScript } from "@mantine/core";
import AppProviders from "@/services/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next JS Bun Mantine",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
