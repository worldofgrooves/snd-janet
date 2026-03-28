import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ManuviWrapper from "@/components/ManuviWrapper";

export const metadata: Metadata = {
  title: "Plume Creative | Brand Identity Studio for Hospitality & Experiential Brands",
  description:
    "Boutique brand identity studio specializing in luxury hospitality, entertainment, and lifestyle brands. Strategy-first design from Reno, NV.",
  openGraph: {
    title: "Plume Creative | Brand Identity Studio for Hospitality & Experiential Brands",
    description:
      "Boutique brand identity studio specializing in luxury hospitality, entertainment, and lifestyle brands. Strategy-first design from Reno, NV.",
    type: "website",
    locale: "en_US",
    siteName: "Plume Creative",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ManuviWrapper>
          <Navigation />
          <main className="flex-1 pt-16 md:pt-20">{children}</main>
          <Footer />
        </ManuviWrapper>
      </body>
    </html>
  );
}
