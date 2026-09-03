import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Header2 from "@/components/layout/header-2";
import {
  getAllBuyCranes,
  getAllRentCranes,
  getGlobalSettings,
} from "@/data/loader";
import Providers from "./providers";
import { Toaster } from "sonner";
import { type ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Kanoocranes Tower crane rental company in the UAE and the middle east",
  description:
    "Kanoocranes Tower crane rental company in the UAE and the middle east. We are the provide of Tower cranes in the middle east region.",
  robots: {
    index: false,
    follow: false,
  },
};

async function loader() {
  const [data, rentCranes, buyCranes] = await Promise.all([
    getGlobalSettings(),
    getAllRentCranes(),
    getAllBuyCranes(),
  ]);

  if (!data && data.data) throw new Error("Failed to fetch global settings");
  if (data.status?.toString().startsWith(4)) throw new Error(data.statusText);

  return {
    header: data.data?.header,
    footer: data.data?.footer,
    rentCranes: rentCranes.data,
    buyCranes: buyCranes.data,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { header, footer, rentCranes, buyCranes } = await loader();

  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        manrope.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Header {...header} rentCranes={rentCranes} buyCranes={buyCranes} />
        <Header2 {...header} rentCranes={rentCranes} buyCranes={buyCranes} />
        <Providers>{children}</Providers>
        <Footer {...footer} />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
