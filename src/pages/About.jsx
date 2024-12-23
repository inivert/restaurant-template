import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ImageWithLoading = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={false}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        className="absolute inset-0 bg-gray-100"
      />
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

const About = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
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
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const values = [
    {
      title: "Quality Ingredients",
      description: "We source only the finest ingredients from trusted suppliers.",
      image: "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca"
    },
    {
      title: "Cultural Fusion",
      description: "Blending traditional and modern culinary techniques.",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554"
    },
    {
      title: "Family Atmosphere",
      description: "Creating a warm and welcoming environment for all guests.",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de"
    }
  ];

  return (
    <div className="min-h-screen pb-safe-bottom pt-[4.5rem]">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-8 max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="ios-card overflow-hidden">
            <div className="relative aspect-[21/9] overflow-hidden rounded-t-3xl">
              <ImageWithLoading
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
                alt="Restaurant interior"
                className="w-full h-full"
              />
            </div>
            <div className="p-6 md:p-8">
              <h1 className="text-3xl font-bold mb-4">About Cultura Mixta</h1>
              <p className="text-gray-600">
                Welcome to Cultura Mixta, where culinary traditions meet modern innovation. Our restaurant is a celebration of diverse flavors and cultural fusion, bringing together the best of global cuisine in a warm, inviting atmosphere.
              </p>
            </div>
          </motion.div>

          {/* Our Story */}
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
                <ImageWithLoading
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf"
                  alt="Chef preparing food"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div variants={itemVariants} className="ios-card p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="ios-card overflow-hidden"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithLoading
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="ios-card p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="space-y-3 text-gray-600">
              <p>Phone: <a href="tel:401-722-7030" className="text-primary">401-722-7030</a></p>
              <p>Alternative: <a href="tel:401-3068448" className="text-primary">401-306-8448</a></p>
              <p>Secondary: <a href="tel:401-536-2534" className="text-primary">401-536-2534</a></p>
              <p>Address: 915 Dexter St, Central Falls, RI 02863</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 