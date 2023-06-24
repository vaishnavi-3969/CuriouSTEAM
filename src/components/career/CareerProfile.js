import React from 'react';
import CareerProfileList from './CareerProfileList';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import SoftwareEngineer from './software-engineer.png';
import DataScientist from './data-scientist.png';
import BioMedicalEngineer from './biomedical-engineer.png';
import EnvironmentalScientist from './environmental-scientist.png';
import CivilEngineer from './civil-engineer.png';




const CareerProfile = () => {
  const profiles = [
    {
      id: 1,
      title: 'Software Engineer',
      description: 'A software engineer designs, develops, and maintains software applications.',
      image: SoftwareEngineer,
    },
    {
        id: 2,
        title: 'Data Scientist',
        description: 'A data scientist analyzes complex data to uncover patterns, insights, and trends.',
        image: DataScientist,
      },
      {
        id: 3,
        title: 'Biomedical Engineer',
        description: 'A biomedical engineer applies engineering principles to healthcare and medical fields.',
        image: BioMedicalEngineer,
      },
      {
        id: 4,
        title: 'Environmental Scientist',
        description: 'An environmental scientist studies the environment and its impact on ecosystems.',
        image: EnvironmentalScientist,
      },
      {
        id: 5,
        title: 'Civil Engineer',
        description: 'A civil engineer designs and oversees the construction of infrastructure projects.',
        image: CivilEngineer,
      },
      {
        id: 6,
        title: 'Robotics Engineer',
        description: 'A robotics engineer designs and builds robots for various applications.',
        image: 'robotics-engineer.jpg',
      },
      {
        id: 7,
        title: 'Chemical Engineer',
        description: 'A chemical engineer applies principles of chemistry to solve engineering problems.',
        image: 'chemical-engineer.jpg',
      },
      {
        id: 8,
        title: 'Aerospace Engineer',
        description: 'An aerospace engineer designs, develops, and tests aircraft and spacecraft.',
        image: 'aerospace-engineer.jpg',
      },
      {
        id: 9,
        title: 'Graphic Designer',
        description: 'A graphic designer creates visual concepts using computer software or by hand.',
        image: 'graphic-designer.jpg',
      },
      {
        id: 10,
        title: 'Game Developer',
        description: 'A game developer designs and develops video games for various platforms.',
        image: 'game-developer.jpg',
      },
      {
        id: 11,
        title: 'Electrical Engineer',
        description: 'An electrical engineer designs, develops, and tests electrical systems and equipment.',
        image: 'electrical-engineer.jpg',
      },
      {
        id: 12,
        title: 'Industrial Designer',
        description: 'An industrial designer creates and develops designs for manufactured products.',
        image: 'industrial-designer.jpg',
      },
      {
        id: 13,
        title: 'Architect',
        description: 'An architect designs and plans the construction of buildings and structures.',
        image: 'architect.jpg',
      },
      {
        id: 14,
        title: 'Biotechnologist',
        description: 'A biotechnologist applies biological processes to develop new products and technologies.',
        image: 'biotechnologist.jpg',
      },
      {
        id: 15,
        title: 'Mechanical Engineer',
        description: 'A mechanical engineer designs and oversees the manufacturing of mechanical systems.',
        image: 'mechanical-engineer.jpg',
      },
      {
        id: 16,
        title: 'Nanotechnologist',
        description: 'A nanotechnologist studies and manipulates matter at the nanoscale level.',
        image: 'nanotechnologist.jpg',
      },
      {
        id: 17,
        title: 'Marine Biologist',
        description: 'A marine biologist studies marine organisms and their interactions with the environment.',
        image: 'marine-biologist.jpg',
      },
      {
        id: 18,
        title: 'Web Developer',
        description: 'A web developer designs and builds websites using programming languages and frameworks.',
        image: 'web-developer.jpg',
      },
      {
        id: 19,
        title: 'Chemist',
        description: 'A chemist studies the properties, composition, and reactions of substances.',
        image: 'chemist.jpg',
      },
      {
        id: 20,
        title: 'Photographer',
        description: 'A photographer captures and creates visual images using cameras and editing software.',
        image: 'photographer.jpg',
      },    
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-8 text-center text-gray-200"
      >
        Career Profiles
      </motion.h1>

      <CareerProfileList profiles={profiles} />

    </div>
  </div>
  );
};

export default CareerProfile;
