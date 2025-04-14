import '../styles/globals.css';
import type { AppProps } from 'next/app';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { useEffect } from 'react';
import Script from 'next/script';
import * as ga from '../services/GoogleAnalytics';
import * as fbPixel from '../services/MetaPixel';
import { useRouter } from 'next/router';
import { Instrument_Serif } from 'next/font/google';

const instrumentSerif = Instrument_Serif({ 
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Inicialização dos serviços
    ga.initGA();
    fbPixel.initFacebookPixel();

    // Tracking de página
    const handleRouteChange = (url: string) => {
      ga.trackPageView(url);
      fbPixel.trackPageView();
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      {/* Meta Pixel */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${fbPixel.FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />

      <Component {...pageProps} />
      <FloatingWhatsApp />

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}

export default MyApp; 