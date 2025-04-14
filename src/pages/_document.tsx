import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💜</text></svg>" />
        
        <meta name="description" content="Sistema completo no Notion para psicólogas organizarem prontuários, planilha financeira, agenda, documentos e tudo que precisam para administrar a clínica com leveza ❤️" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gestaopluma.sejapluma.com/" />
        <meta property="og:title" content="GestãoPluma - Sistema Completo para Psicólogas" />
        <meta property="og:description" content="Sistema completo no Notion para psicólogas organizarem prontuários, planilha financeira, agenda, documentos e tudo que precisam para administrar a clínica com leveza ❤️" />
        <meta property="og:image" content="https://gestaopluma.sejapluma.com/images/mock-hero.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gestaopluma.sejapluma.com/" />
        <meta property="twitter:title" content="GestãoPluma - Sistema Completo para Psicólogas" />
        <meta property="twitter:description" content="Sistema completo no Notion para psicólogas organizarem prontuários, planilha financeira, agenda, documentos e tudo que precisam para administrar a clínica com leveza ❤️" />
        <meta property="twitter:image" content="https://gestaopluma.sejapluma.com/images/mock-hero.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 