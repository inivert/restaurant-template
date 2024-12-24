import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuModal from './MenuModal';
import { Star, Flame, Search } from 'lucide-react';

const SpicyLevel = ({ level }) => {
  if (!level) return null;
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(level)].map((_, i) => (
        <Flame key={i} className="w-3.5 h-3.5 text-primary" />
      ))}
    </div>
  );
};

const PopularityBadge = () => (
  <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-md">
    <Star className="w-3.5 h-3.5 fill-yellow-400 stroke-yellow-400" />
  </div>
);

const InteractionHint = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute top-2 left-2 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full shadow-sm text-xs font-medium text-gray-600"
  >
    <Search className="w-3.5 h-3.5" />
    <span>Tap to view more</span>
  </motion.div>
);

const SkeletonLoader = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" 
      style={{ 
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite'
      }} 
    />
  </div>
);

const ImageWithBlur = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className="relative w-full h-full bg-gray-100 overflow-hidden">
      {isLoading && <SkeletonLoader />}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-300 
            ${isLoading ? 'opacity-0' : 'opacity-100'} 
            group-hover:scale-105`}
          loading="lazy"
        />
      )}
    </div>
  );
};

const MenuCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Show hint after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.div
        className="ios-card group cursor-pointer relative"
        onClick={() => setIsModalOpen(true)}
        onHoverStart={() => setShowHint(false)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-[1.5rem]">
          <ImageWithBlur src={item.image} alt={item.name} />
          {item.isPopular && <PopularityBadge />}
          <AnimatePresence>
            {showHint && <InteractionHint />}
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/60 to-transparent" />
        </div>
        <div className="p-4 -mt-6 relative bg-white">
          <div className="flex items-start justify-between gap-4 mb-1">
            <h3 className="font-semibold tracking-tight">{item.name}</h3>
            <p className="font-semibold text-primary whitespace-nowrap">
              ${item.price.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between gap-2">
            {item.dietary && (
              <span className="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                {item.dietary}
              </span>
            )}
            <SpicyLevel level={item.spicyLevel} />
          </div>
        </div>
      </motion.div>

      <MenuModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={item}
      />
    </>
  );
};

export default MenuCard; 