import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found - EcomSharks</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-sand to-white flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-8xl font-bold text-shark-teal/20 mb-8"
            >
              404
            </motion.div>
            
            <h1 className="text-4xl font-bold mb-6">
              Oops! Page <span className="shark-gradient-text">Not Found</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track!
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/"
                className="flex items-center gap-2 px-6 py-3 shark-gradient text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Home className="h-5 w-5" />
                Go Home
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="flex items-center gap-2 px-6 py-3 border-2 border-shark-teal text-shark-teal rounded-lg font-semibold hover:bg-shark-teal hover:text-white transition-all duration-300"
              >
                <ArrowLeft className="h-5 w-5" />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}