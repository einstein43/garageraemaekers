 import { NavBar } from '@/components/organisms/navBar.component'
import './globals.css'
import { Montserrat } from 'next/font/google'

export const metadata = {
  title: 'Raemaekers',
  description: 'Garage Raemaekers. Merkonafhankelijke reparaties voor luxewagens, lichte bedrijfswagens en vrachtwagens. Gelegen te Nederweert-eind.',
}

const montserrat = Montserrat({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
