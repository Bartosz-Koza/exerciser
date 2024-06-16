import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import AuthProvider from "@/providers/AuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exerciser",
  description: "Website that will help you exercise",
  icons: {
    icon: [
      {
        url: "./favicon.png"
      },
    ],
  },
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
          <AuthProvider>
            <Navbar />
            <main className="mt-[80px]">{children}</main>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
