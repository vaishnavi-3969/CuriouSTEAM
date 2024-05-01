import React from 'react';
import CareerProfileList from './CareerProfileList';
import { motion } from 'framer-motion';
import SoftwareEngineer from './software-engineer.png';
import DataScientist from './data-scientist.png';
import BioMedicalEngineer from './biomedical-engineer.png';
import EnvironmentalScientist from './environmental-scientist.png';
import CivilEngineer from './civil-engineer.png';
import RoboticsEngineer from './robotics-engineer.png';
import ChemicalEngineer from './chemical-engineer.png';
import AerospaceEngineer from './aerospace-engineer.png';
import GraphicDesigner from './graphic-designer.png';
import GameDeveloper from './game-developer.png';
import ElectricalEngineer from './electrical-engineer.png';
import IndustrialEngineer from './industrial-engineer.png';
import Architect from './architect.png';
import Biotechnologist from './biotechnologist.png';
import MechanicalEngineer from './mechanical-engineer.png';
import Nanotechnologist from './nanotechnologist.png';
import MarineBiologist from './marine-biologist.png';
import WebDeveloper from './web-developer.png';
import Chemist from './chemist.png';
import Photographer from './photographer.png';


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
        image: RoboticsEngineer,
      },
      {
        id: 7,
        title: 'Chemical Engineer',
        description: 'A chemical engineer applies principles of chemistry to solve engineering problems.',
        image: ChemicalEngineer,
      },
      {
        id: 8,
        title: 'Aerospace Engineer',
        description: 'An aerospace engineer designs, develops, and tests aircraft and spacecraft.',
        image: AerospaceEngineer,
      },
      {
        id: 9,
        title: 'Graphic Designer',
        description: 'A graphic designer creates visual concepts using computer software or by hand.',
        image: GraphicDesigner,
      },
      {
        id: 10,
        title: 'Game Developer',
        description: 'A game developer designs and develops video games for various platforms.',
        image: GameDeveloper,
      },
      {
        id: 11,
        title: 'Electrical Engineer',
        description: 'An electrical engineer designs, develops, and tests electrical systems and equipment.',
        image: ElectricalEngineer,
      },
      {
        id: 12,
        title: 'Industrial Designer',
        description: 'An industrial designer creates and develops designs for manufactured products.',
        image: IndustrialEngineer,
      },
      {
        id: 13,
        title: 'Architect',
        description: 'An architect designs and plans the construction of buildings and structures.',
        image: Architect,
      },
      {
        id: 14,
        title: 'Biotechnologist',
        description: 'A biotechnologist applies biological processes to develop new products and technologies.',
        image: Biotechnologist,
      },
      {
        id: 15,
        title: 'Mechanical Engineer',
        description: 'A mechanical engineer designs and oversees the manufacturing of mechanical systems.',
        image: MechanicalEngineer,
      },
      {
        id: 16,
        title: 'Nanotechnologist',
        description: 'A nanotechnologist studies and manipulates matter at the nanoscale level.',
        image: Nanotechnologist,
      },
      {
        id: 17,
        title: 'Marine Biologist',
        description: 'A marine biologist studies marine organisms and their interactions with the environment.',
        image: MarineBiologist,
      },
      {
        id: 18,
        title: 'Web Developer',
        description: 'A web developer designs and builds websites using programming languages and frameworks.',
        image: WebDeveloper,
      },
      {
        id: 19,
        title: 'Chemist',
        description: 'A chemist studies the properties, composition, and reactions of substances.',
        image: Chemist,
      },
      {
        id: 20,
        title: 'Photographer',
        description: 'A photographer captures and creates visual images using cameras and editing software.',
        image: Photographer,
      },    
  ];

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-gray-900 to-gray-500">
    <div className="container px-4 py-8 mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-8 text-4xl font-bold text-center text-gray-200 md:text-6xl"
      >
        Career Profiles
      </motion.h1>

      <CareerProfileList profiles={profiles} />

    </div>
  </div>
  );
};

export default CareerProfile;
