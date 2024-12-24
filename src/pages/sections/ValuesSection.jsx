import { motion } from 'framer-motion';
import OptimizedImage from '../../components/OptimizedImage.tsx';

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

const ValuesSection = ({ variants }) => {
  return (
    <motion.div variants={variants} className="ios-card p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6">Our Values</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <motion.div 
            key={index}
            variants={variants}
            className="ios-card overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <OptimizedImage
                src={value.image}
                alt={value.title}
                className="w-full h-full object-cover"
                width={400}
                height={300}
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
  );
};

export default ValuesSection; 