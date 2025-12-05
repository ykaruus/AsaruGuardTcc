import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Updated metadata for AsaruGuard
export const metadata: Metadata = {
  title: "AsaruGuard - Protegendo seu futuro digital",
  description:
    "Segurança web de classe mundial para sua empresa. AsaruGuard oferece proteção, confiança e inovação tecnológica.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/asaru-guard.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/asaru-guard.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/asaru-guard.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/asaru-guard.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
