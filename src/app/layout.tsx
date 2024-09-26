import { Toaster } from "@/components/ui/Toaster";
import type { Metadata } from "next";
import { Gilda_Display, Inter, Open_Sans } from "next/font/google";
import ButtonWhatsapp from "./components/ButtonWhatsapp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
// import GoogleTagManager from "./components/GoogleTagManager";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

const gilda = Gilda_Display({
  subsets: ["latin"], // Use the 'latin' subset
  weight: "400", // Specify font weight (400 for normal)
  variable: "--font-gilda", // Custom CSS variable for Gilda Display
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // You can specify multiple weights
  variable: "--font-open-sans", // Custom CSS variable for Open Sans
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
      <GoogleTagManager gtmId="GTM-5JCCC86S" />
      <GoogleAnalytics gaId="G-N6071QCKKH" />
      <body className={`${gilda.variable} ${openSans.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5JCCC86S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        {children}
        <ButtonWhatsapp />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
