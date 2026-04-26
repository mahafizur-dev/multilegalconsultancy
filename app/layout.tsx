import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ওয়েবসাইটের টাইটেল এবং ডেসক্রিপশন আপডেট করা হলো
export const metadata: Metadata = {
  title: "MCL | Multilegal Consultancy",
  description:
    "A Corporate & Taxation Law Firm stationed in Dhaka, Bangladesh providing a one-stop-service to national and multinational companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
