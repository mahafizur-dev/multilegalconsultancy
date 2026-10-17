import type { Metadata, Viewport } from "next";
import { Archivo, Libre_Baskerville } from "next/font/google";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/brand";
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
  metadataBase: new URL(SITE_URL),
  title: "MCL | Multilegal Consultancy",
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: "Multilegal Consultancy | Corporate & Taxation Law Firm, Dhaka",
    description: SITE_DESCRIPTION,
    locale: "en_BD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multilegal Consultancy | Corporate & Taxation Law Firm, Dhaka",
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#2d1c0d",
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
