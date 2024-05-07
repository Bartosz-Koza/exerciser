import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from '../providers/ReactQueryProvider'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "exerciser",
  description: "exercising website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ReactQueryProvider>
        <Navbar />
        <main className="mt-[80px]">{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
