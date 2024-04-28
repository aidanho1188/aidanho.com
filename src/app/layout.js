import {Inter} from 'next/font/google'
import './globals.css'
const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Aidan Ho',
  description: "Aidan Ho's personal website",
}

export default function RootLayout({children}) {
  const currentYear = new Date().getFullYear()

  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <footer> Built with Next.js and Vercel. © {currentYear} Aidan Ho. All rights reserved.</footer>
      </body>
    </html>
  )
}
