import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

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
      <body className={`${roboto.className} scroll-smooth`}>{children}</body>
    </html>
  );
}
