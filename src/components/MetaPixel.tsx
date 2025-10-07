// src/components/MetaPixel.tsx
import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const MetaPixel = () => {
  useEffect(() => {
    // Check if fbq is already loaded
    if (window.fbq) return;

    // Create fb script
    const script = document.createElement("script");
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      
      fbq('init', '690913913886124'); // 👈 apna pixel id yahan lagayen
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);
  }, []);

  return null; // ye component koi UI render nahi karega
};

export default MetaPixel;
