import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["400", "500", "600", "700"],
  });

const geistMono = Geist_Mono({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Brian's Portofolio",
  description: "A simple portofolio about Brian Ricardo Tamin",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
	<html
	  lang="en"
	  className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
	>
	  <body className="min-h-full flex flex-col">{children}</body>
	</html>
  );
}
