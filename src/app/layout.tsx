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
  title: "Aldess",
  description: "Aldess'portfolio :)",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
          <Script
          defer
          src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        />
       </ThemeProvider>
      </body>
    </html>
  )
}