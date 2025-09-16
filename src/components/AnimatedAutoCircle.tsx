import  { useState } from "react";
import "./RotatingIcons.css"; 
import amazon from "../images/img/amazon.png";
import ebay from "../images/img/ebay.png";
import shopify from "../images/img/Shopify.png";
import walmart from "../images/img/Walmart.png";
import alibaba from "../images/img/Alibabaa.png";
import esty from "../images/img/etsy.png";
import wix from "../images/img/wix.png";
import woo from "../images/img/woo.png";
const RotatingIcons = () => {
  const [centerImage, setCenterImage] = useState(
    amazon
  );

  const outerIcons = [
    { link: "/service/amazon", img: amazon },
    { link: "/service/walmart", img: walmart },
    { link: "/service/ebay", img: ebay },
    { link: "/service/shopify", img: shopify },
  ];

  const innerIcons = [
    { link: "/", img: alibaba },
    { link: "/", img: esty },
    { link: "/", img: wix },
    { link: "/", img: woo },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-10 md:px-10 md:pl-[250px]">
      {/* Left Column */}
      <div className="flex-1 text-center md:text-left max-w-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Automate Your Growth with EcomSharks 
        </h2>
        <p className="text-md text-white">
          Breaking into international Amazon markets requires specialized knowledge and steady strategies. Our team plays an important role in enabling brands to extend their brands across the frontiers of world commerce.
        </p>
      </div>

      {/* Right Column (Rotating Circles) */}
      <div className="flex-1 flex items-center justify-center">
        <div className="main main-tech-main">
          {/* Outer rotating circle */}
          <div className="big-circle">
            {outerIcons.map((icon, i) => (
              <div
                key={i}
                className="icon-block"
                onMouseEnter={() => setCenterImage(icon.img)}
              >
                <a href={icon.link} target="_blank" rel="noopener noreferrer">
                  <img src={icon.img} alt="social icon" />
                </a>
              </div>
            ))}
          </div>

          {/* Inner rotating circle */}
          <div className="circle">
            {innerIcons.map((icon, i) => (
              <div
                key={i}
                className="icons-block"
                onMouseEnter={() => setCenterImage(icon.img)}
              >
                <a href={icon.link} target="_blank" rel="noopener noreferrer">
                  <img src={icon.img} alt="social icon" />
                </a>
              </div>
            ))}
          </div>

          {/* Center logo */}
          <div className="center-logo">
            <img src={centerImage} alt="Center Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingIcons;
