import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Horizontal scroll",
  description: "Next js Horizontal scroll Assets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Horizontal scroll",
  description: "Next js Horizontal scroll Assets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
