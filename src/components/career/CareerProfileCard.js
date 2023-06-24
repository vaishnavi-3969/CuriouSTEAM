import React from 'react';

const CareerProfileCard = ({ profile }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
    <img src={profile.image} alt={profile.title} className="w-32 h-32 rounded-full mx-auto mb-4" />
    <h2 className="text-xl font-semibold text-white text-center mb-2">{profile.title}</h2>
    <p className="text-gray-300 text-center">{profile.description}</p>
  </div>
  );
};

export default CareerProfileCard;
