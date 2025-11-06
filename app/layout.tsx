import './globals.css'
import React from 'react'
export const metadata = { title: 'CityAssist', description: 'Citizen Assistant PWA' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-slate-900 text-slate-100">{children}</body>
    </html>
  )
}
