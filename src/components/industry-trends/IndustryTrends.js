import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ai from './ai.png';
import blockchain from './blockchain.png';
import cybersecurity from './cybersecurity.png';
import iot from './iot.png';
import renewableEnergy from './renewable-energy.png';


const IndustryTrends = () => {
  const trends = [
    {
      id: 1,
      title: 'Artificial Intelligence',
      description: 'AI technology is transforming industries and enabling new possibilities.',
      image: ai,
    },
    {
      id: 2,
      title: 'Blockchain Technology',
      description: 'Blockchain is revolutionizing the way we secure transactions and data.',
      image: blockchain,
    },
    {
      id: 3,
      title: 'Internet of Things (IoT)',
      description: 'IoT connects devices and enables data exchange for smart systems.',
      image: iot,
    },
    {
      id: 4,
      title: 'Cybersecurity',
      description: 'Protecting digital systems and data from unauthorized access and attacks.',
      image: cybersecurity,
    },
    {
      id: 5,
      title: 'Renewable Energy',
      description: 'Clean energy sources like solar and wind are gaining momentum.',
      image: renewableEnergy,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-800">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-gray-200">
        Industry Trends
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {trends.map((trend) => (
            <motion.div
              key={trend.id}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="bg-gray-900">
                <img src={trend.image} alt={trend.title} className="w-full h-48 object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{trend.title}</h3>
                <p className="text-gray-700">{trend.description}</p>
                <div className="flex justify-end mt-4">
                  <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded">
                    Read More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default IndustryTrends;
