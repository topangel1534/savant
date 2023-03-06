// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import Script from 'next/script'
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3349926, 6);
    TagManager.initialize({ gtmId: 'GTM-TVP88WP' });
  }, [])
  return <>
    <Script 
      id='tawk-to' 
      strategy='afterInteractive'
      dangerouslySetInnerHTML={{
      __html: `
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/63ef889531ebfa0fe7edd0fa/1gpfqr1os';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
      `,
      }}
    />
    <Script 
      id='twitter-conversion-tracking' 
      strategy='afterInteractive'
      dangerouslySetInnerHTML={{
      __html: `
        !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
        },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
        a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
        twq('config','odyig');
      `,
      }}
    />
    <Component {...pageProps} />
  </>
}

export default MyApp
