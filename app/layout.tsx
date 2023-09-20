import Navbar from "@/components/layout/Navbar";
import "./globals.scss";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/layout/Footer";

const montsetrrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "getlinked",
  description: "Igniting a Revolution in HR Innovation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montsetrrat.className}>
        <div className="layout">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
