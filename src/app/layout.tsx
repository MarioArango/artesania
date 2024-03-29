import { IChildren } from '@/interfaces/IChildren'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ProviderDesign from '@/providers/Design'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artesania',
  description: 'Venta de artesania',
}

export default function RootLayout({ children }: IChildren) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <ProviderDesign>
            <Layout>
              {children}
            </Layout>
        </ProviderDesign>
        </body>
    </html>
  )
}
