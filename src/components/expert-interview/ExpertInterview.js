import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

const ExpertInterview = () => {
  const [experts, setExperts] = useState([]);
  const [isSessionConfirmed, setSessionConfirmed] = useState(false);


  useEffect(() => {
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
    <div className="container px-4 py-8 mx-auto bg-gray-800">
      <h1 className="mb-8 text-4xl font-bold text-center text-gray-200 md:text-6xl">
        Expert Interviews
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {experts.map((expert) => (
          <motion.div
            key={expert.login.uuid}
            className="overflow-hidden bg-gray-900 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={expert.picture.large} alt={expert.name.first} className="object-cover w-full h-64" />
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-gray-200 md:text-xl">
                {expert.name.first} {expert.name.last}
              </h3>
              <p className="text-gray-400">Profession: {expert.profession}</p>
              <p className="text-gray-400">Session Fee: ${Math.floor(Math.random() * 200) + 50}</p>
              <button
                className="px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded hover:bg-blue-400"
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
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Session Confirmed!</h2>
            <p className="text-gray-700">Your session has been successfully booked.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertInterview;
