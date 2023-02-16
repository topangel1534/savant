// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import Script from 'next/script'
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3349926, 6)
  }, [])
  return <>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-11072346824"/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-11072346824', {
        page_path: window.location.pathname,
        });
      `,
      }}
    />
    <Script
      dangerouslySetInnerHTML={{
        __html: `
          gtag('event', 'conversion', {'send_to': 'AW-11072346824/AjrbCMm8qowYEMi12p8p'});
        `,
        }}
    >
    </Script>
    <Component {...pageProps} />
  </>
}

export default MyApp
