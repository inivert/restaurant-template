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
            ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        />
      )}
    </div>
  );
};

const MenuModal = ({ isOpen, onClose, item }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={onClose}
          className="relative z-50"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px]"
            aria-hidden="true"
          />
          
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-lg">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="ios-card w-full overflow-hidden relative bg-white/95"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithBlur src={item.image} alt={item.name} />
                  {item.isPopular && <PopularityBadge />}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="p-6"
                >
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
                </motion.div>
              </motion.div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default MenuModal; 