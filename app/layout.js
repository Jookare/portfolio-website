import './globals.css'
import { Inter } from 'next/font/google'
import Noise from "./components/noise";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Joona Kareinen',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-[#141414] overflow-x-hidden'>
      <body className={inter.className}>
        <Noise />
        {children}
      </body>
    </html>
  )
}
