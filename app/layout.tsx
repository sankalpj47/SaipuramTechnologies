import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar/Navbar";


export const metadata: Metadata = {
  title: "Saipuram Technologies",
  description: "Accelerating drug discovery with AI precision",
    icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-[#1E2128]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar/>
          <main> 
          {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
