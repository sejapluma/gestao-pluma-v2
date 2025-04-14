declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Inicialização do GA4
export const initGA = () => {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
};

// Eventos
export const trackPageView = (url: string) => {
  if (!window.gtag) return;
  window.gtag('event', 'page_view', {
    page_path: url,
  });
};

export const trackContact = () => {
  if (!window.gtag) return;
  window.gtag('event', 'contact', {
    event_category: 'WhatsApp',
    event_label: 'Contact Button Click',
  });
};

export const trackBeginCheckout = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      currency: 'BRL',
      value: 97.00,
      items: [{
        item_name: 'Pluma Gestão',
        price: 97.00
      }]
    });
  }
}; 