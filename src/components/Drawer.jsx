import { AnimatePresence, motion } from "framer-motion";
import { UtensilsCrossed, Clock, MapPin, Info, X } from "lucide-react";
import { Link } from "react-router-dom";

const DrawerItem = ({ to, icon: Icon, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="drawer-item group"
  >
    <div className="drawer-icon">
      <Icon className="w-5 h-5 text-gray-700" />
    </div>
    <span className="font-medium">{children}</span>
  </Link>
);

const Drawer = ({ isOpen, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40"
            onClick={handleClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.2 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm 
              bg-white/95 z-50 
              rounded-l-[2.5rem] overflow-hidden
              shadow-[-8px_0_32px_rgba(0,0,0,0.08)]"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6">
                <h2 className="text-2xl font-bold tracking-tight">Menu</h2>
                <button
                  onClick={handleClose}
                  className="rounded-full p-2 hover:bg-gray-100/80 active:scale-90 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 pb-4">
                <div className="space-y-2.5">
                  <DrawerItem 
                    to="/menu" 
                    icon={UtensilsCrossed}
                    onClick={handleClose}
                  >
                    Our Menu
                  </DrawerItem>

                  <DrawerItem 
                    to="/about" 
                    icon={Info}
                    onClick={handleClose}
                  >
                    About Us
                  </DrawerItem>

                  <DrawerItem 
                    to="/location" 
                    icon={MapPin}
                    onClick={handleClose}
                  >
                    Location
                  </DrawerItem>

                  <div className="ios-card mt-4 p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="drawer-icon">
                        <Clock className="w-5 h-5 text-gray-700" />
                      </div>
                      <h3 className="font-bold text-lg tracking-tight">Opening Hours</h3>
                    </div>
                    <div className="space-y-3 text-[15px]">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Monday - Friday</span>
                        <span className="font-medium">11:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Saturday</span>
                        <span className="font-medium">10:00 AM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Sunday</span>
                        <span className="font-medium">10:00 AM - 9:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>

              <div className="p-6 border-t border-gray-200/50">
                <a
                  href="https://www.doordash.com/store/cultura-mixta-family-restaurant-central-falls-28991678/?utm_source=mx_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ios-btn ios-btn-doordash w-full flex items-center justify-center gap-2"
                >
                  Order Now on DoorDash
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer; 