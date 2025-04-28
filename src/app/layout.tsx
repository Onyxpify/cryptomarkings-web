import type { Metadata } from 'next'
import './globals.css'
import MyLayout from '@/components/MyLayout'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

export const metadata: Metadata = {
  title: 'Blacktinum',
  description: `At Blacktinum, we've redefined the way you trade cryptocurrencies. We combine cutting-edge artificial intelligence algorithms with a range of innovative trading tools.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="">
      <AppRouterCacheProvider>
       <MyLayout > {children} </MyLayout>
      </AppRouterCacheProvider>
      </body>
    </html>
  )
}
