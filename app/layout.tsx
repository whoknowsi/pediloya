import './globals.css'
import { Poppins } from '@next/font/google'
import Link from 'next/link'
import Image from 'next/image'
const poppins = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={poppins.className} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className="p-4 bg-white shadow-lg">
          <Link className="flex gap-1 items-center cursor-pointer" href="/">
            <Image src="/logo.png" alt="logo" width="35" height="35"/>
            <h1 className="text-2xl font-bold italic text-red-first">PediloYa</h1>
          </Link>
        </header>
        <main className="flex justify-center p-4 gap-4 max-w-6xl mx-auto"> 
          {children}
        </main>
      </body>
    </html>
  )
}
