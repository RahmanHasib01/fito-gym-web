import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FITO Gym - Presenting a state-of-the-art gym nearby you",
  description: "A premium, high-energy gym located in Khilgaon. Train harder. Feel better. Look amazing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="font-inter bg-fito-obsidian min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
