import Providers from './providers'
import "./globals.css";
import { Header } from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`Poppins`}
      >
        <header className="header-loyout">
          <Header />
        </header>
        <main className="main-loyout">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
