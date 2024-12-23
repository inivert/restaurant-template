import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MenuModal from './MenuModal';
import { Star, Flame } from 'lucide-react';

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

const ImageWithBlur = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className="relative w-full h-full bg-gray-100 overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 
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

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="ios-card group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-[1.5rem]">
          <ImageWithBlur src={item.image} alt={item.name} />
          {item.isPopular && <PopularityBadge />}
        </div>
        <div className="p-4">
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