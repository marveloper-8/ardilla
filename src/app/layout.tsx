import './globals.css'
import logo2 from '@/assets/icons/logo.2.svg'

export const metadata = {
  title: 'Ardilla',
  description: 'Frontend Dev Test',
  icon: './assets/icons/logo.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
