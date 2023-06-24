import React from 'react';
import { motion } from 'framer-motion';
import ComputerScience from './computer-science.png';
import BusinessAdministration from './business-administration.png';
import DataScience from './data-science.png';
import Engineering from './engineering.png';
import GraphicDesign from './graphic-design.png';

const EducationalPathways = () => {
  const pathways = [
    {
      id: 1,
      title: 'Computer Science',
      description: 'Learn programming languages and algorithms to build software applications.',
      image: ComputerScience,
    },
    {
      id: 2,
      title: 'Data Science',
      description: 'Explore data analysis, machine learning, and statistical modeling techniques.',
      image: DataScience,
    },
    {
      id: 3,
      title: 'Engineering',
      description: 'Study principles of engineering and apply them to various disciplines.',
      image: Engineering,
    },
    {
      id: 4,
      title: 'Business Administration',
      description: 'Develop skills in management, marketing, finance, and entrepreneurship.',
      image: BusinessAdministration,
    },
    {
      id: 5,
      title: 'Graphic Design',
      description: 'Learn visual communication and design skills using digital tools.',
      image: GraphicDesign,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-800">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-gray-200">
        Educational Pathways
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pathways.map((pathway) => (
          <motion.div
            key={pathway.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-md"
          >
            <img src={pathway.image} alt={pathway.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-200">{pathway.title}</h3>
              <p className="text-gray-400">{pathway.description}</p>
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded mt-4">
                Explore Pathway
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationalPathways;
