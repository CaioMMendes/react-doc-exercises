import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React doc study",
  description: "Studying react doc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  flex  flex-col`}>
        <main className="m-auto w-full max-w-screen-2xl flex-1 md:flex md:justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
