import { motion } from 'framer-motion';

const ContactSection = ({ variants }) => {
  return (
    <motion.div variants={variants} className="ios-card p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <div className="space-y-3 text-gray-600">
        <p>Phone: <a href="tel:401-722-7030" className="text-primary hover:text-primary/80 transition-colors">401-722-7030</a></p>
        <p>Alternative: <a href="tel:401-3068448" className="text-primary hover:text-primary/80 transition-colors">401-306-8448</a></p>
        <p>Secondary: <a href="tel:401-536-2534" className="text-primary hover:text-primary/80 transition-colors">401-536-2534</a></p>
        <p>Address: <a href="https://maps.google.com/?q=915+Dexter+St,+Central+Falls,+RI+02863" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">915 Dexter St, Central Falls, RI 02863</a></p>
      </div>
    </motion.div>
  );
};

export default ContactSection; 