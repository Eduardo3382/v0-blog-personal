import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Eduardo de la Fuente | Tech Enthusiast & Educator',
  description: 'Apasionado por la tecnología, motivado a aprender siempre y guiando a otros en su viaje tecnológico.',
  generator: 'v0.app',
  metadataBase: new URL('https://eduardo.net.ar'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Eduardo de la Fuente | Tech Enthusiast & Educator',
    description: 'Apasionado por la tecnología, motivado a aprender siempre y guiando a otros en su viaje tecnológico.',
    url: 'https://eduardo.net.ar', // Update this if you have a custom domain
    siteName: 'Eduardo de la Fuente',
    locale: 'es_ES',
    type: 'website',
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
