import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuCard from '../components/MenuCard';
import { menuData } from '../data/menuData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('specials');
  const categoriesRef = useRef(null);

  const categories = [
    { id: 'specials', label: 'Specials' },
    { id: 'starters', label: 'Starters' },
    { id: 'mains', label: 'Mains' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'drinks', label: 'Drinks' },
  ];

  useEffect(() => {
    const container = categoriesRef.current;
    if (!container) return;
    
    const button = container.querySelector(`[data-category="${activeCategory}"]`);
    if (button) {
      const containerWidth = container.offsetWidth;
      const scrollLeft = button.offsetLeft - (containerWidth / 2) + (button.offsetWidth / 2);
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen pb-safe-bottom pt-[4.5rem]">
      <div className="nav-blur sticky top-[3.5rem] z-20">
        <div className="container mx-auto">
          <div 
            ref={categoriesRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide py-3"
          >
            <div className="flex gap-2 mx-auto px-4">
              {categories.map(({ id, label }) => (
                <button
                  key={id}
                  data-category={id}
                  onClick={() => setActiveCategory(id)}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all
                    ${activeCategory === id 
                      ? 'text-white shadow-lg' 
                      : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                  {activeCategory === id && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      initial={false}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400,
                        damping: 25
                      }}
                    />
                  )}
                  <span className="relative z-10 transition-transform duration-200 active:scale-90">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.3,
              ease: [0.23, 1, 0.32, 1]
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            {menuData[activeCategory]?.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Menu; 