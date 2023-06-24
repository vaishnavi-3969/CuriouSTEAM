import React from 'react';
import { motion } from 'framer-motion';

const ResourcesAndTools = () => {
  const variants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const resources = [
    {
      id: 1,
      title: 'Codecademy',
      description: 'Online interactive platform for learning coding skills.',
      link: 'https://www.codecademy.com/',
    },
    {
      id: 2,
      title: 'Figma',
      description: 'A collaborative interface design tool.',
      link: 'https://www.figma.com/',
    },
    {
      id: 3,
      title: 'Stack Overflow',
      description: 'Q&A platform for programmers.',
      link: 'https://stackoverflow.com/',
    },
    {
      id: 4,
      title: 'Coursera',
      description: 'Online learning platform with various courses.',
      link: 'https://www.coursera.org/',
    },
    {
      id: 5,
      title: 'GitHub',
      description: 'A platform for hosting and collaborating on code projects.',
      link: 'https://github.com/',
    },
    {
      id: 6,
      title: 'Medium',
      description: 'An online publishing platform for sharing articles and stories.',
      link: 'https://medium.com/',
    },
    {
      id: 7,
      title: 'Dribbble',
      description: 'A community for showcasing and discovering design work.',
      link: 'https://dribbble.com/',
    },
    {
      id: 8,
      title: 'Khan Academy',
      description: 'An educational website with video lessons on various subjects.',
      link: 'https://www.khanacademy.org/',
    },
    {
      id: 9,
      title: 'Dev.to',
      description: 'A community-driven platform for sharing and discussing code.',
      link: 'https://dev.to/',
    },
    {
      id: 10,
      title: 'Google Developers',
      description: 'Resources, guides, and tools for developers by Google.',
      link: 'https://developers.google.com/',
    },
    {
      id: 11,
      title: 'Adobe Creative Cloud',
      description: 'A suite of creative software and services by Adobe.',
      link: 'https://www.adobe.com/creativecloud.html',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-800">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-gray-200">
        Resources and Tools
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.id}
            className="bg-white rounded-lg overflow-hidden shadow-md"
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{ delay: index * 0.1 }}
          >
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{resource.title}</h3>
              <p className="text-gray-700">{resource.description}</p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded mt-4"
              >
                Visit Website
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesAndTools;
