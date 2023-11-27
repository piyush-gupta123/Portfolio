import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Piyush Gupta | Portfolio',
  description: 'Piyush Gupta, a fresher who wants to set foot in the IT industry to learn and grow.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950`}>
        <div className="bg-[#fbe2e3] relative -z-10 top-[-6rem] right-[-11rem] h-[31.25rem] 
        w-[31.25rem] rounded-ful blur-[10rem]
        sm:w-[68.75rem]
        "></div>
        <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] 
        w-[50rem] rounded-ful blur-[10rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
        "></div>
        <Header />
        {children}
      </body>
    </html>
  )
}
