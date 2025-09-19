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
import {Poppins, JetBrains_Mono} from 'next/font/google'
import './globals.css'
import Footer from './Component/Common/Footer'
import Navber from './Component/Common/Navber'
import Script from 'next/script'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '700', '800', '500', '300', '200'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: '400',
})

export const metadata = {
  title: 'Arena Web Security, The First & Most Trusted Cybersecurity Company in Bangladesh',
  description: 'cyber security course in Bangladesh, ethical hacking course Bangla, cyber security service in Bangladesh, cyber security service, cyber security training online, ethical hacking training online, CEH course Bangladesh, penetration testing course, bug bounty training, OSINT training Bangladesh, ethical hacking course with freelancing, learn cyber security from home, best cyber security institute in Bangladesh, cyber security certification BD, cyber security online class, advanced ethical hacking course, web application security training, cyber security diploma in Bangladesh, VAPT service Bangladesh, penetration testing service, red teaming service, cyber forensics service, digital forensics Bangladesh, SOC setup service, cyber threat hunting, cyber audit service, information security consultancy, SIEM integration service, cyber security monitoring service',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        {/* bKash & others */}
        <Script src="https://code.jquery.com/jquery-3.3.1.min.js" />
        <Script src="https://scripts.pay.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout.js" />
        <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" />
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N4882C6H');`}
        </Script>

        {/* Google Analytics */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-26KLNL588M" />
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
        <Script
          id="stape-events"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(a,h,e,v,n,t,s){
              if(a.cbq)return;
              n=a.cbq=function(){
                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
              };
              if(!a._cbq)a._cbq=n;
              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];
              t=h.createElement(e);
              t.async=!0;
              t.src=v;
              s=h.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script','https://sgw.stape.au/sdk/762395682168377211/events.js');
            cbq('setHost', 'https://sgw.stape.au/');
            cbq('init', '762395682168377211');
            cbq('track', 'PageView');
          `,
          }}
        />
        {/* Signals Gateway Pixel Code */}
        <Script id="Signals Gateway Pixel Code">
          {`!function(a,h,e,v,n,t,s){
    if(a.cbq)return;n=a.cbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!a._cbq)a._cbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=h.createElement(e);t.async=!0;
    t.src=v;s=h.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://sgw.stape.au/sdk/1677815512539401011/events.js');
    cbq('setHost', 'https://sgw.stape.au/');
    cbq('init', '1677815512539401011');
    cbq('track', 'PageView');`}
        </Script>

        {/* <!-- End Signals Gateway Pixel Code --> */}
        <noscript>
          <img height="1" width="1" style={{display: 'none'}} src="https://www.facebook.com/tr?id=492878632265213&ev=PageView&noscript=1" />
        </noscript>
      </head>
      <body className={`${poppins.variable} ${jetbrainsMono.variable}`}>
        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N4882C6H" height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
        </noscript>

        <Navber />
        {children}
        <Footer />
      </body>
    </html>
  )
}
