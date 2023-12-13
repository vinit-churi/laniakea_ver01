import type { Metadata } from "next";
import { Inter, Roboto, Roboto_Flex } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
export const metadata: Metadata = {
  title: "Laniakea",
  description:
    "Fine quality jewelry purchase at affordable price. Shop online for rings, bracelets, necklaces, and earrings made with ethically sourced materials.",
  keywords: ["Jewelry", "Jewellery", "Diamond", "Gold", "ring"],
  openGraph: {
    title: "Lanikea Jewelry",
    siteName: "Lanikea Jewelry",
    url: "https://laniakeajewelry.com",
    description:
      "Fine quality jewelry purchase at affordable price. Shop online for rings, bracelets, necklaces, and earrings made with ethically sourced materials.",
    authors: ["Vinit Churi, Vidyesh Churi, Rahul Patil"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
