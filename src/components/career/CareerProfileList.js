import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const CareerProfileList = ({ profiles }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {profiles.map((profile) => (
        <motion.div
          key={profile.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden bg-gray-800 rounded-lg shadow-md"
        >
          <img src={profile.image} alt={profile.title} className="w-full" />
          <div className="p-4">
            <h3 className="mb-2 text-lg font-semibold text-gray-200 md:text-xl">{profile.title}</h3>
            <p className="text-gray-400">{profile.description}</p>
            <Link
              to={`/career-profiles/${profile.id}`}
              className="flex items-center mt-4 text-blue-500 hover:text-blue-400"
            >
              Learn More <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </motion.div>
      ))}

  </div>
  );
};

export default CareerProfileList;
