import { Urbanist } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ModalProvider from "@/providers/ModalProvider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce Store",
  description: "E-commerce Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
