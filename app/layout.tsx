import type { Metadata } from "next";
import { Inter, Roboto, Roboto_Flex } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
export const metadata: Metadata = {
  title: "Laniakea",
  description:
    "Fine quality jewelry purchase at affordable price. Shop online for rings, bracelets, necklaces, and earrings made with ethically sourced materials.",
  keywords: ["Jewelry", "Jewellery", "Diamond", "Gold", "ring"],
  metadataBase: new URL("https://laniakeajewelry.com"),
  openGraph: {
    title: "Lanikea Jewelry",
    siteName: "Lanikea Jewelry",
    url: "/",
    description:
      "Fine quality jewelry purchase at affordable price. Shop online for rings, bracelets, necklaces, and earrings made with ethically sourced materials.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
