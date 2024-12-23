import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Flame } from 'lucide-react';
import { useState, useEffect } from 'react';

const PopularityBadge = () => (
  <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
    <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
    <span className="text-sm font-medium">Popular</span>
  </div>
);

const SpicyLevel = ({ level }) => {
  if (!level) return null;
  return (
    <div className="flex items-center gap-1">
      {[...Array(level)].map((_, i) => (
        <Flame key={i} className="w-4 h-4 text-primary" />
      ))}
    </div>
  );
};

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
          className={`w-full h-full object-cover transition-opacity duration-300 
            ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        />
      )}
    </div>
  );
};

const MenuModal = ({ isOpen, onClose, item }) => {
  if (!item) return null;

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  const modalVariants = {
    closed: { y: "100%" },
    open: { y: 0 }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={onClose}
          className="relative z-50"
        >
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px]"
            aria-hidden="true"
          />
          
          <div className="fixed inset-0 overflow-hidden">
            <div className="flex min-h-full items-end justify-center p-0">
              <Dialog.Panel className="w-full max-w-lg">
                <motion.div
                  variants={modalVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{
                    type: "tween",
                    duration: 0.28,
                    ease: [0.98, 0.15, 0, 1]
                  }}
                  className="w-full overflow-hidden relative bg-white/95 rounded-t-[3rem] shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 shadow-inner" />
                    <ImageWithBlur src={item.image} alt={item.name} />
                    {item.isPopular && <PopularityBadge />}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/95 via-white/50 to-transparent" />
                  </div>

                  <div className="p-8 -mt-8 relative">
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <Dialog.Title className="text-2xl font-bold">
                        {item.name}
                      </Dialog.Title>
                      <span className="text-xl font-bold text-primary">
                        ${item.price}
                      </span>
                    </div>

                    {item.spicyLevel > 0 && (
                      <SpicyLevel level={item.spicyLevel} />
                    )}

                    <p className="text-gray-600 mb-4">
                      {item.description}
                    </p>

                    {item.ingredients && (
                      <div className="space-y-2">
                        <h4 className="font-medium">Ingredients:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.ingredients.map((ingredient, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-full text-sm 
                                bg-gray-100 text-gray-700"
                            >
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.dietary && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-500">
                          {item.dietary}
                        </span>
                      </div>
                    )}

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <button
                        onClick={onClose}
                        className="w-full ios-btn ios-btn-primary"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </motion.div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default MenuModal;
