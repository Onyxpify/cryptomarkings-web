import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MyLayout from "@/components/MyLayout";
import RecoilContextProvider from "../lib/RecoilContextProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CryptoMarkings",
  description: `At CryptoMarkings, we've redefined the way you trade cryptocurrencies. Derived from "Crypto Market Kings," we combine cutting-edge artificial intelligence algorithms with a range of innovative trading tools.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/blockvilla.svg" sizes="32x32" />
      </head>
      <body className={inter.className}>
        <RecoilContextProvider>
          <MyLayout> {children} </MyLayout>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
