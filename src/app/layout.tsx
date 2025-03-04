import type { Metadata } from "next";
import "./globals.css";
import { workSans } from "../../fonts/fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Kadosh",
  description: "Uniformes médicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={workSans.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
