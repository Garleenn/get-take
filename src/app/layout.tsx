import Providers from './providers'
import "./globals.css";
import { Header } from "@/components/Header";

import { Inter } from 'next/font/google'

const openSans = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={openSans.className}>
      <body
        className={`Poppins`}
      >
        <header className="header-loyout shadow-2xl">
          <Header />
        </header>
        <main className="main-loyout">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
