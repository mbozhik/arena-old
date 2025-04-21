
// import {Poppins,JetBrains_Mono} from "next/font/google";
// import './globals.css'
// import Footer from './Component/Common/Footer'
// import Navber from './Component/Common/Navber'
// import Script from 'next/script'
// // import MessengerCustomerChat from 'react-messenger-customer-chat';

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   weight: ["400", "700", "800","500","300","200"], // Adjust weights as needed
// });
// const jetbrainsMono = JetBrains_Mono({
//   variable: "--font-jetbrains-mono",
//   subsets: ["latin"],
//   weight: "400",
// });

// // export const metadata = {
//   export const metadata = {
//     title: 'Arena Web Security | Master Ethical Hacking in Bangladesh',
//     description: 'Learn ethical hacking & penetration testing in Python for freelancing with our immersive courses. Become a white hat hacker and fulfill your dream.  Enroll now!',
//   };
  
// export default function RootLayout({ children }) {
  
//   return (
//     <html lang="en">
//       <Script src="https://code.jquery.com/jquery-3.3.1.min.js" />
//         <Script src="https://scripts.pay.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout.js"/>
//         <Script src="https://scripts.pay.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout.js"/>
//          <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"/>
//       <body   className={` ${poppins.variable}  ${jetbrainsMono.variable}`}
//       >
    
//         <Navber />
//         {children }
//         <Footer/>
        
//         </body>
//     </html>
//   )
// }
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Component/Common/Footer";
import Navber from "./Component/Common/Navber";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700", "800", "500", "300", "200"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Arena Web Security | Master Ethical Hacking in Bangladesh",
  description:
    "Learn ethical hacking & penetration testing in Python for freelancing with our immersive courses. Become a white hat hacker and fulfill your dream. Enroll now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N4882C6H');`}
        </Script>

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-26KLNL588M"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-26KLNL588M');`}
        </Script>

        {/* Meta Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '492878632265213');
          fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=492878632265213&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={`${poppins.variable} ${jetbrainsMono.variable}`}>
        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N4882C6H"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* bKash & others */}
        <Script src="https://code.jquery.com/jquery-3.3.1.min.js" />
        <Script src="https://scripts.pay.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout.js" />
        <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" />

        <Navber />
        {children}
        <Footer />
      </body>
    </html>
  );
}

