import { ArrowRight } from 'lucide-react'
import  AmazomMockup from "../../../images/mockup.png";

import Walmart from "../../../images/img/Walmart.png";
import Shopify from "../../../images/img/Shopify.png";
import Ebay from "../../../images/img/ebay.png";
import AmazonWarehouse  from "../../../images/close-up-warehouse-view.jpg"
import { Link } from 'react-router-dom';

const Center_Services_Content = () => {
    const services = [
    {
      id: 1,
      name: "Shopify Dropshipping",
      icon: Shopify,
      link: "/service/shopify",
    },
    {
      id: 2,
      name: "Walmart Dropshipping",
      icon: Walmart,
      link: "/service/walmart",
    },
    {
      id: 3,
      name: "EBay Automation",
      icon: Ebay,
      link: "/service/ebay",
    },
  ];
  return ( <>
    {/* Mockup Image */}
         <section className=" py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Mobile Mockup */}
        <div className="flex justify-center">
          <img
            src={AmazomMockup}
            alt="Amazon Store"
            className="rounded-2xl shadow-xl max-w-[250px] md:max-w-[800px]"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
             <span className="text-[#a3e635]"> Effortless Store Management </span>  That Works Like A Charm
            </h2>
            <p className="text-white text-sm leading-relaxed">
              Get everything under our Amazon seller automation service. Our team of
              specialists has got you covered, from setting up your store to everyday
              operations. Bid farewell to manual errors and shake hands with automation.
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
             <span className="text-[#a3e635]"> Smart Pricing Strategies</span> For Maximum Gains
            </h2>
            <p className="text-white text-sm leading-relaxed">
              Best of all, with pricing automation tools, the price options are optimized
              for maximum efficiency in real time. Our solution guarantees that you always
              maintain your competition while getting higher returns.
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            <span className="text-[#a3e635]">  Inventory Management </span> Without The Hassle
            </h2>
            <p className="text-white text-sm leading-relaxed">
              Never again have to worry about stockouts! With our inventory monitoring,
              and management, always keep your automated Amazon store stocked.
            </p>
          </div>
        </div>
      </div>


      {/* Mockup Image */}


      {/* Store Card */}
         <section className="py-12">
  <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
    {services.map((service) => (
    <Link to={service.link} key={service.id}>
    <div
        key={service.id}
        className="bg-black rounded-2xl p-6 flex items-center justify-center gap-7 shadow-md hover:shadow-xl transition-all duration-300"
      >
        {/* Icon Left */}
        <img
          src={service.icon}
          alt={service.name}
          className="w-12 h-12 md:w-24 md:h-24 rounded-full bg-white p-2"
        />

        {/* Text + Button Right */}
        <div className="ml-4 flex flex-col">
          <h3 className="text-white text-lg font-bold leading-snug"> {service.name.split(" ")[0]} <br /> {service.name.split(" ")[1]}</h3>

          <a
            href={service.link}
            className="flex items-center space-x-2 text-[#a3e635] font-semibold hover:underline mt-2"
          >
            <span>Read More</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </Link>
    ))}
  </div>
</section>

      {/* Store Card */}
      {/* Ware House Card */}
       <section className="py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10 items-center">
        
        {/* Left Side - Image + Box */}
        <div className="relative">
          <img
            src={AmazonWarehouse}
            alt="Amazon Warehouse"
            className="rounded-xl shadow-lg"
          />
          <div className="absolute -bottom-6 left-6 bg-[#a3e635] text-black px-6 py-4 rounded-xl shadow-md">
            <span className="text-4xl text-white font-bold">10+</span>
            <p className="text-sm text-white font-medium">years of experience</p>
          </div>
        </div>

        {/* Center Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Beyond Basics: The Rocket Retail Distinguish Offerings
          </h2>
          <p className="text-white mb-6">
            Whether you're just starting or scaling rapidly, our automation
            services grow with your business. We don't just automate tasks – we
            enhance your brand. From enhanced content strategies to reputation
            management, we elevate your presence on Amazon.
          </p>
          <button className="bg-[#a3e635] text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition">
           <Link to="/contact"> Let’s Talk</Link>
          </button>
        </div>

        {/* Right Side - Who We Are */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Who We Are</h3>
          <ul className="space-y-3">
            {[
              "Scalable Solutions for Every Stage of Growth",
              "FBA Automation Expert Help",
              "Holistic Brand Management",
              "Post-Sale Insights and Optimization",
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-2 text-white">
                <ArrowRight className="text-[#a3e635]" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
      {/* Ware House Card */}
      </section>
    </>
  )
}
export default Center_Services_Content;