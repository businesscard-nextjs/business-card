import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/src/styles/globals.css";
import RecoilRootProvider from "../lib/RecoilRootProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bmaker",
  description: "Make your own business card",
  icons: {
    icon: "/images/Bmaker_Logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRootProvider>
          <main>{children}</main>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
