import { ThemeProvider } from 'next-themes';
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const outfit = Outfit({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Portfolio - Aldess",
  description: "Hello, I'm Aldess :D",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
          <Script
          async
          defer
          src="/stats/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        />
       </ThemeProvider>
      </body>
    </html>
  )
}