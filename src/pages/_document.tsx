import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K48PTF57');`
          }}
        />
        {/* End Google Tag Manager */}

        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💜</text></svg>" />
        
        <meta name="description" content="Sistema completo no Notion para psicólogas organizarem prontuários, planilha financeira, agenda, documentos e tudo que precisam para administrar a clínica com leveza ❤️" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gestaopluma.sejapluma.com/" />
        <meta property="og:title" content="GestãoPluma - Sistema Completo para Psicólogas" />
        <meta property="og:description" content="Sistema completo no Notion para psicólogas organizarem prontuários, planilha financeira, agenda, documentos e tudo que precisam para administrar a clínica com leveza ❤️" />
        <meta property="og:image" content="https://gestaopluma.sejapluma.com/images/comp.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gestaopluma.sejapluma.com/" />
        <meta property="twitter:title" content="GestãoPluma - Sistema Completo para Psicólogas" />
        <meta property="twitter:description" content="Sistema completo no Notion para psicólogas organizarem prontuários, planilha financeira, agenda, documentos e tudo que precisam para administrar a clínica com leveza ❤️" />
        <meta property="twitter:image" content="https://gestaopluma.sejapluma.com/images/comp.png" />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K48PTF57"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 