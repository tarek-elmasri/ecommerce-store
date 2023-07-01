import "./globals.css";
import { Urbanist } from "next/font/google";

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
      <body className={font.className}>{children}</body>
    </html>
  );
}
