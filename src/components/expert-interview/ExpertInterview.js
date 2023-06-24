import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

const ExpertInterview = () => {
  const [experts, setExperts] = useState([]);
  const [isSessionConfirmed, setSessionConfirmed] = useState(false);
  const professions = [
    'Software Engineer',
    'Data Scientist',
    'Biomedical Engineer',
    'Environmental Scientist',
    'Civil Engineer',
    'Robotics Engineer',
    'Chemical Engineer',
    'Aerospace Engineer',
    'Graphic Designer',
    'Game Developer',
    'Electrical Engineer',
    'Industrial Designer',
    'Architect',
    'Biotechnologist',
    'Mechanical Engineer',
    'Nanotechnologist',
    'Marine Biologist',
    'Web Developer',
    'Chemist',
    'Photographer',
  ];

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=40')
      .then((response) => response.json())
      .then((data) => {
        const updatedExperts = data.results.map((expert) => ({
          ...expert,
          profession: professions[Math.floor(Math.random() * professions.length)],
        }));
        setExperts(updatedExperts);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSessionConfirmation = () => {
    setSessionConfirmed(true);
    setTimeout(() => {
      setSessionConfirmed(false);
    }, 7000);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-800">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-gray-200">
        Expert Interviews
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experts.map((expert) => (
          <motion.div
            key={expert.login.uuid}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={expert.picture.large} alt={expert.name.first} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-200">
                {expert.name.first} {expert.name.last}
              </h3>
              <p className="text-gray-400">Profession: {expert.profession}</p>
              <p className="text-gray-400">Session Fee: ${Math.floor(Math.random() * 200) + 50}</p>
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded mt-4"
                onClick={handleSessionConfirmation}
              >
                Book Session
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {isSessionConfirmed && (
        <div className="fixed inset-0 flex items-center justify-center">
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Session Confirmed!</h2>
            <p className="text-gray-700">Your session has been successfully booked.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertInterview;
