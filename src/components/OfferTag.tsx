import { useState, useEffect } from "react";
import "./OfferTaf.css"; // CSS file import karen

const OfferTag = () => {
  const [showOffer, setShowOffer] = useState(false);

  // Offer ko kuch time baad dikhane ke liye useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOffer(true);
    }, 1000); // 1 second ke baad offer tag dikhaye

    // Cleanup function to clear timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showOffer && (
        <div className="offer-tag">
          <span>Limited Time Offer: 50% Off!</span>
        </div>
      )}
    </div>
  );
};

export default OfferTag;
