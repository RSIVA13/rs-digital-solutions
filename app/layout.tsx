import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

export const metadata: Metadata = {
  title: "RS Digital Solutions in Kolathur Chennai | Web Design & Development Company",
  description:
    "RS Digital Solutions in Kolathur, Chennai offers professional web design, web development and digital marketing services for small businesses.",
  
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}