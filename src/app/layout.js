import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './Component/Common/Footer'
import Navber from './Component/Common/Navber'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })
// export const metadata = {
  export const metadata = {
    title: 'Arena Web Security | Master Ethical Hacking in Bangladesh',
    description: 'Learn ethical hacking & penetration testing in Python for freelancing with our immersive courses. Become a white hat hacker and fulfill your dream.  Enroll now!',
  };
  
export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <Script src="https://code.jquery.com/jquery-3.3.1.min.js" />
        <Script src="https://scripts.pay.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout.js"/>
        <Script src="https://scripts.pay.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout.js"/>
         <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"/>
      <body className={inter.className}>
        <Navber/>
        {children}
        <Footer/>
        
        </body>
    </html>
  )
}
