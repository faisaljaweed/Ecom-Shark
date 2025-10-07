import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppRoutes from "@/routes";
import ScrollToTop from "./components/ScrollToTop";
import Modal from "./components/Modal";
import MetaPixel from "./components/MetaPixel";

function App() {
  return (
    <HelmetProvider>
      <MetaPixel />
      <Helmet>
        <title>EcomSharks - We Scale Ecommerce Brands with Precision</title>
        <meta
          name="description"
          content="Scale your ecommerce brand with precision. Expert growth marketing, conversion optimization, and data-driven strategies that deliver explosive results."
        />
        <meta
          name="keywords"
          content="ecommerce growth, conversion optimization, growth marketing, ecommerce scaling, digital marketing"
        />
        <meta name="author" content="EcomSharks" />
        <meta
          property="og:title"
          content="EcomSharks - We Scale Ecommerce Brands with Precision"
        />
        <meta
          property="og:description"
          content="Scale your ecommerce brand with precision. Expert growth marketing, conversion optimization, and data-driven strategies that deliver explosive results."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ecomsharks.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="EcomSharks - We Scale Ecommerce Brands with Precision"
        />
        <meta
          name="twitter:description"
          content="Scale your ecommerce brand with precision. Expert growth marketing, conversion optimization, and data-driven strategies that deliver explosive results."
        />
        <link rel="canonical" href="https://ecomsharks.com" />
      </Helmet>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen relative">
          <Navigation />

          {/* Navigation ke neeche offer strip */}

          <main className="pt-16">
            <AppRoutes />
          </main>

          <Footer />
        </div>
        <Modal>
          {/* <div className="text-center">
            <h2 className="text-2xl text-white font-bold mb-4 text-blue-600">
              🎉 Welcome <span className="text-lime-700"> to Ecom Sharks!</span>
            </h2>
            <p className=" mb-4 text-white">
              Enjoy browsing our products and services.  
              Don’t miss our latest offers!
            </p> */}
          {/* <img
              src="https://source.unsplash.com/400x200/?technology,website"
              alt="Welcome Banner"
              className="rounded-lg mb-4"
            /> */}
          {/* <button
              className="bg-lime-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => setIsModalOpen(false)}
            >
              Let’s Go 🚀
            </button>
          </div> */}
        </Modal>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
