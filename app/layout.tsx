import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import type { Viewport } from "next"
import { Toaster } from "@/components/ui/toaster"
import { OnlineTracker } from "@/components/online-tracker"
import { CookieConsent } from "@/components/cookie-consent"
import { LegalFooter } from "@/components/legal-footer"

export const metadata: Metadata = {
  title: "تأمين سريع وموثوق",
  description: "احصل على أفضل عروض التأمين في السعودية - مقارنة سريعة وآمنة",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar">
      <body>
        {children}
        <LegalFooter />
        <CookieConsent />
        <Toaster />
        <OnlineTracker />
      </body>
    </html>
  )
}
