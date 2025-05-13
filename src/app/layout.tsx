import type { Metadata } from 'next'
import './globals.css'
import MyLayout from '@/components/MyLayout'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

export const metadata: Metadata = {
  title: 'Blacktinum',
  description: `AI-powered crypto trading reimagined — automate your profits, even while you sleep.`,
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
