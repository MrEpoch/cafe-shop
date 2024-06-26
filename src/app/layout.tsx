import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KoffeeZila",
  description:
    "Kavárna s cílem vytvoření čerstvé a dobré kávi spolu s kvalitní obsluhou.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full flex flex-col min-h-screen relative bg-cafe-background`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
