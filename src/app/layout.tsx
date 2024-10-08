import { Livvic } from "next/font/google";
import Layout from "@/components/Layout";
import "./globals.css";
const livvic = Livvic({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${livvic.className} antialiased bg-background`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
