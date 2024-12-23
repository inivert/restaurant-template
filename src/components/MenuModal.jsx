import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Flame, Star } from 'lucide-react';

const PopularityBadge = () => (
  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
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

const MenuModal = ({ isOpen, onClose, item }) => {
  if (!item) return null;

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        static
        open={isOpen}
        onClose={onClose}
        className="relative z-50"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm cursor-pointer" 
            onClick={onClose}
            aria-hidden="true" 
          />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95 rotate-12"
            enterTo="opacity-100 scale-100 rotate-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100 rotate-0"
            leaveTo="opacity-0 scale-95 rotate-12"
          >
            <Dialog.Panel 
              className="ios-card w-full max-w-lg mx-auto cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-[1.5rem]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.isPopular && <PopularityBadge />}
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <Dialog.Title className="text-2xl font-bold tracking-tight">
                      {item.name}
                    </Dialog.Title>
                    <p className="text-2xl font-bold text-primary whitespace-nowrap">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  {item.spicyLevel > 0 && (
                    <SpicyLevel level={item.spicyLevel} />
                  )}
                </div>

                <Dialog.Description className="text-gray-600 leading-relaxed">
                  {item.description}
                </Dialog.Description>

                {item.ingredients && (
                  <div className="bg-gray-50/50 rounded-2xl p-4 space-y-2">
                    <h4 className="font-medium text-gray-900">Ingredients</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.ingredients.map((ingredient, index) => (
                        <span 
                          key={index}
                          className="bg-white px-3 py-1 rounded-full text-sm text-gray-600 shadow-sm"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.dietary && (
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {item.dietary}
                    </div>
                  </div>
                )}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MenuModal; 