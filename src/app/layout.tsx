import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/Toaster";
import { Gilda_Display, Open_Sans } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

const gilda = Gilda_Display({
  subsets: ['latin'], // Use the 'latin' subset
  weight: '400',      // Specify font weight (400 for normal)
  variable: '--font-gilda', // Custom CSS variable for Gilda Display
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // You can specify multiple weights
  variable: '--font-open-sans',  // Custom CSS variable for Open Sans
});

export const metadata: Metadata = {
  title: "Goenakan Indonesia",
  description: "Goenakan Indonesia ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilda.variable} ${openSans.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
