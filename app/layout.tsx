import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My App",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <div className="min-h-screen">
          <header className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex-shrink-0">
                  <Link href="/" className="text-xl font-bold text-[#3a4960] hover:text-[#913f4f] transition-colors">
                    My App
                  </Link>
                </div>
                <nav className="flex space-x-8">
                  <Link href="/" className="text-black hover:text-[#913f4f] transition-colors px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </Link>
                  <Link href="/overview" className="text-black hover:text-[#913f4f] transition-colors px-3 py-2 rounded-md text-sm font-medium">
                    Overview
                  </Link>
                  <Link href="/input" className="text-black hover:text-[#913f4f] transition-colors px-3 py-2 rounded-md text-sm font-medium">
                    Input
                  </Link>
                  <Link href="/instructions" className="text-black hover:text-[#913f4f] transition-colors px-3 py-2 rounded-md text-sm font-medium">
                    Instructions
                  </Link>
                  <Link href="/newuser" className="text-black hover:text-[#913f4f] transition-colors px-3 py-2 rounded-md text-sm font-medium">
                    New User
                  </Link>
                </nav>
              </div>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
