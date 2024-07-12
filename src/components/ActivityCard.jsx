import Image from "next/image";
import { motion } from "framer-motion";

const ActivityCard = ({ activity }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-md rounded-lg overflow-hidden"
    >
      <div className="relative h-48 w-full">
        <Image
          src={activity.image}
          alt={activity.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
        <p className="text-gray-600 mb-2">{activity.description}</p>
        <div className="flex justify-between items-center">
          <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {activity.category}
          </span>
          <span className="text-gray-500 text-sm">{activity.duration}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityCard;
