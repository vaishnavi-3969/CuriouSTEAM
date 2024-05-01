import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CareerIcon from '../../assets/career-icon.png';
import ExpertInterview from '../../assets/expert-interview.png';
import EducationalPathway from '../../assets/educational-pathway.png';
import TrendsIcon from '../../assets/trends-icon.png';
import EventsIcon from '../../assets/events-icon.png';
import ResourcesIcon from '../../assets/resources-icon.png';
import Logo from '../../assets/logo.gif';
import Typewriter from 'typewriter-effect';

export default function Home() {
  const featureCards = [
    {
      title: 'Career Profiles',
      description: 'Explore various STEAM career paths and their opportunities',
      icon: CareerIcon,
      link: '/career-profile',
    },
    {
      title: 'Expert Interviews',
      description: 'Gain insights from experienced professionals in STEAM fields.',
      icon: ExpertInterview,
      link: '/expert-interview',
    },
    {
      title: 'Educational Pathways',
      description: 'Discover the educational routes to pursue a successful STEAM career.',
      icon: EducationalPathway,
      link: '/educational-pathway',
    },
    {
      title: 'Industry Trends',
      description: 'Stay updated with the latest trends and innovations in the STEAM world.',
      icon: TrendsIcon,
      link: '/industry-trends',
    },
    {
      title: 'Events and Conferences',
      description: 'Find information about upcoming STEAM events, workshops, and conferences.',
      icon: EventsIcon,
      link: '/events',
    },
    {
      title: 'Resources and Tools',
      description: 'Access valuable resources and tools to enhance your STEAM skills and knowledge.',
      icon: ResourcesIcon,
      link: '/resources',
    },
  ];

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-gray-000 to-gray-200">
      <div className="container px-4 py-8 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="flex items-center justify-center bg-white rounded-full w-35 h-35">
            <img src={Logo} alt="CuriouSTEAM Logo" className="h-25 w-25" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 md:text-6xl">
            <Typewriter
              options={{
                strings: ['CuriouSTEAM'],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 50,
              }}
            />
          </h1>
          <div className="w-3 h-3 ml-2 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 animate-ping"></div>
        </motion.div>
        <motion.div>
          <p className="text-lg text-gray-900 md:text-xl">
            CuriouSTEAM is a platform that aims to inspire and empower the next generation of STEAM
            leaders by providing them with the necessary resources and tools to pursue their dream
            careers.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card, index) => (
            <Link to={card.link} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-6 bg-gray-800 rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                    <img src={card.icon} alt={card.title} className="w-6 h-6" />
                  </div>
                  <h2 className="ml-2 text-lg font-semibold">{card.title}</h2>
                </div>
                <p className="text-sm">{card.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
