export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

declare global {
  interface Window {
    fbq: any;
  }
}

export const initializePixel = () => {
  if (typeof window === 'undefined') return;
  // A inicialização já é feita no _app.tsx via Script
};

export const trackPageView = () => {
  window.fbq('track', 'PageView');
};

export const trackContact = () => {
  window.fbq('track', 'Contact');
};

export const trackInitiateCheckout = () => {
  window.fbq('track', 'InitiateCheckout');
};

export const trackBeginCheckout = () => {
  window.fbq('track', 'BeginCheckout');
}; 