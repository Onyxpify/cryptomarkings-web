import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MyLayout from '@/components/MyLayout'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blackinum',
  description: `At Blackinum, we've redefined the way you trade cryptocurrencies. We combine cutting-edge artificial intelligence algorithms with a range of innovative trading tools.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/blockvilla.svg" sizes="32x32" />
      </head>
      <body className={inter.className}>
       <MyLayout > {children} </MyLayout>
      </body>
    </html>
  )
}
