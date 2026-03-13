import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { Toaster } from "@/components/ui/toaster";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Shivkishan Foods & Agro",
  description: "Bringing you the purest natural honey, inspired by nature and blessed by divinity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased bg-background text-foreground`}
      >
        
        <Layout>
          <Toaster/>
          {children}
        </Layout>
      </body>
    </html>
  );
}
