import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Lammi Me',
  description: 'Сеть салонов экспертного класса по ламинации ресниц и бровей',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className='html'>
      <body className={`${montserrat.className} max-w-[100vw] overflow-x-hidden`}>{children}</body>
    </html>
  )
}
