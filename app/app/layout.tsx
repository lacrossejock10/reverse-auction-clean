import type { Metadata } from 'next'
import { Navigation } from './components/navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'VT Reverse Auction',
  description: 'Find and request VT memorabilia through reverse auctions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>VT Reverse Auction</title>
        <meta name="description" content="Find and request VT memorabilia through reverse auctions" />
      </head>
      <body className="min-h-screen bg-background">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
