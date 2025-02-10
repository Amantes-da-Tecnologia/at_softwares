import type { Metadata } from "next";
import { Source_Code_Pro, Source_Sans_3 } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "AT Software",
  description: "WebSite at AT Software",
};

const SourceSans3 = Source_Sans_3({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SourceSans3.className} antialiased h-dvh`}
      >
        {children}
      </body>
    </html>
  );
}
