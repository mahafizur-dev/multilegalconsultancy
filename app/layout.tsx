import type { Metadata } from "next";
import { Archivo, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const baskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

// ওয়েবসাইটের টাইটেল এবং ডেসক্রিপশন আপডেট করা হলো
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
      className={`${archivo.variable} ${baskerville.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream">{children}</body>
    </html>
  );
}
