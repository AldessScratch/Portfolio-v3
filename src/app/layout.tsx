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
      <body className='background-colors'>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
          <div className="fixed -top-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full opacity-30 blur-3xl"></div>
          <div className="fixed top-1/2 -right-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full opacity-30 blur-3xl"></div>
          <div className="fixed -bottom-40 left-1/3 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full opacity-30 blur-3xl"></div>
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