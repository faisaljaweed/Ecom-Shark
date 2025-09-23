import { useState, useEffect } from "react";
import "./OfferTag.css"; // CSS file import

const OfferTag = () => {
  const [showOffer, setShowOffer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOffer(true);
    }, 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  if (!showOffer) return null;

  return (
    <div className="relative w-full overflow-hidden bg-yellow-400 h-12 flex items-center">
      {/* Scrolling text */}
      <div className="whitespace-nowrap font-bold px-6 text-sm sm:text-base md:text-lg lg:text-xl animate-marquee">
        🎉 Limited Time Offer: <span className="text-red-600">20% Off!</span> 🎉
      </div>
    </div>
  );
};

export default OfferTag;
