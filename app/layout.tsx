import { Urbanist } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ModalProvider from "@/providers/ModalProvider";
import ToastProvider from "@/providers/ToastProvider";
import getCategories from "@/actions/getCategories";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce Store",
  description: "E-commerce Store",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar categories={categories} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
