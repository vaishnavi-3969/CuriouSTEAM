import React from 'react';

const CareerProfileDetails = ({ profile }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center text-gray-200">
        {profile.title}
      </h2>
      <div className="flex justify-center mb-8">
        <img src={profile.image} alt={profile.title} className="w-1/2" />
      </div>
      <p className="text-gray-200">{profile.description}</p>
    </div>
  );
};

export default CareerProfileDetails;
