import '../styles/globals.css';
import type { AppProps } from 'next/app';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <FloatingWhatsApp />
    </>
  );
}

export default MyApp; 