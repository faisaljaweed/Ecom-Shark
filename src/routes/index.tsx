import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
// import Services from '@/pages/Services';
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";
// import AmazonManagement from "@/pages/services/AmazonManagement";
// import BrandProtection from "@/pages/services/BrandProtection";
// import EbaySetup from "@/pages/services/EbaySetup";
// import PerformanceMarketing from "@/pages/services/PerformanceMarketing";
// import ProductOptimization from "@/pages/services/ProductOptimization";
// import ShopifySetup from "@/pages/services/ShopifySetup";
import ServicesOverview from "@/pages/ServicesOverview";
import AmazonService from "@/pages/services/AmazonManagement";
import EbayService from "@/pages/services/EbaySetup";
import WalmartService from "@/pages/services/Walmart";
import ShopifyService from "@/pages/services/ShopifySetup";
import TiktokShopService from "@/pages/services/TiktokShop";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/services" element={<Services />} /> */}
      {/* <Route path="/services/*" element={<Services />} /> */}
      {/* <Route path="/services/growth-marketing" element={<AmazonManagement />} />
      <Route path="/services/brand-protection" element={<BrandProtection />} />
      <Route path="/services/conversion-optimization" element={<EbaySetup />} />
      <Route
        path="/services/paid-advertising"
        element={<PerformanceMarketing />}
      />
      <Route
        path="/services/email-marketing"
        element={<ProductOptimization />}
      />
      <Route path="/services/analytics" element={<ShopifySetup />} /> */}
      {/* <Route path="/services/shopify-setup" element={<div>Shopify Setup</div>} /> */}
      <Route path="/service" element={<ServicesOverview />} />
      <Route path="/service/amazon" element={<AmazonService />} />
      <Route path="/service/ebay" element={<EbayService />} />
      <Route path="/service/walmart" element={<WalmartService />} />
      <Route path="/service/shopify" element={<ShopifyService />} />
      <Route path="/service/tiktokshop" element={<TiktokShopService />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
