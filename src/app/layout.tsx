import type {Metadata} from "next";
import {Road_Rage, Roboto, Alatsi} from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import {Toaster} from "sonner";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", '400', "500", "700"]
})

const roadRage = Road_Rage({
  variable: "--font-road",
  subsets: ['latin'],
  weight: '400'
})
const alatsi = Alatsi({
  variable: "--font-alatsi",
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: "Ticz Event Ticket Booking - HNG12",
  description: "Join us for an unforgettable experience! Secure your spot now.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${roboto.className} ${roadRage.variable} ${alatsi.variable} bg-[#02191e] px-6 lg:px-0 mb-12`}
    >
    <Toaster richColors position={'top-right'}/>
    <Navbar/>
    {children}
    </body>
    </html>
  );
}
