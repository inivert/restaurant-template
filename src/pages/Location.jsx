import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Location = () => {
  return (
    <div className="min-h-screen pb-safe-bottom pt-[4.5rem]">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="ios-card overflow-hidden">
            <div className="aspect-[16/9] rounded-t-3xl overflow-hidden">
              <iframe
                title="Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.8754833583483!2d-71.39291548872267!3d41.8123542792284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e444d01f4a7c8f%3A0x8c1d0f8b8b8b8b8b!2s915%20Dexter%20St%2C%20Central%20Falls%2C%20RI%2002863!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-500"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-2xl p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Find Us</h2>
                  <p className="text-gray-600 mb-6">
                    915 Dexter St<br />
                    Central Falls, RI 02863
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://maps.google.com/?q=915+Dexter+St+Central+Falls+RI+02863"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ios-btn ios-btn-primary"
                    >
                      Get Directions
                    </a>
                    <a
                      href="tel:401-722-7030"
                      className="ios-btn bg-gray-100 hover:bg-gray-200 text-gray-900"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Location; 