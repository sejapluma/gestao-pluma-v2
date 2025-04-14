declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const initFacebookPixel = () => {
  if (typeof window === 'undefined') return;

  // Inicialização do Pixel
  !(function (f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js'
  );

  window.fbq('init', FB_PIXEL_ID);
};

// Eventos
export const trackPageView = () => {
  if (!window.fbq) return;
  window.fbq('track', 'PageView');
};

export const trackContact = () => {
  if (!window.fbq) return;
  window.fbq('track', 'Contact');
};

export const trackInitiateCheckout = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      currency: 'BRL',
      value: 97.00,
      content_name: 'Pluma Gestão',
      content_type: 'product'
    });
  }
}; 