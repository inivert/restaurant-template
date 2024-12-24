import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect, lazy, Suspense } from 'react';
import OptimizedImage from '../components/OptimizedImage.tsx';

// Lazy load the values section since it's below the fold
const ValuesSection = lazy(() => import('./sections/ValuesSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

const About = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen pb-safe-bottom pt-[4.5rem]">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-8 max-w-4xl mx-auto"
        >
          {/* Hero Section - Priority Loading */}
          <motion.div variants={itemVariants} className="ios-card overflow-hidden">
            <div className="relative aspect-[21/9] overflow-hidden rounded-t-3xl">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
                width={1200}
                height={514}
              />
            </div>
            <div className="p-6 md:p-8">
              <h1 className="text-3xl font-bold mb-4">About Cultura Mixta</h1>
              <p className="text-gray-600">
                Welcome to Cultura Mixta, where culinary traditions meet modern innovation. Our restaurant is a celebration of diverse flavors and cultural fusion, bringing together the best of global cuisine in a warm, inviting atmosphere.
              </p>
            </div>
          </motion.div>

          {/* Our Story - Priority Loading */}
          <motion.div variants={itemVariants} className="ios-card p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 mb-4">
                  Founded in 2020, Cultura Mixta has become a beloved destination for food enthusiasts seeking unique dining experiences. Our expert chefs craft each dish with passion and precision, using only the finest ingredients sourced from local and international suppliers.
                </p>
                <p className="text-gray-600">
                  We take pride in offering a menu that reflects our commitment to quality, creativity, and cultural diversity. From traditional favorites to innovative fusion dishes, every item is carefully prepared to delight your senses and create memorable dining moments.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf"
                  alt="Chef preparing food"
                  className="w-full h-full object-cover"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </motion.div>

          {/* Lazy loaded sections */}
          <Suspense fallback={
            <div className="animate-pulse space-y-8">
              <div className="ios-card p-6 h-96 bg-gray-100" />
              <div className="ios-card p-6 h-48 bg-gray-100" />
            </div>
          }>
            <ValuesSection variants={itemVariants} />
            <ContactSection variants={itemVariants} />
          </Suspense>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 