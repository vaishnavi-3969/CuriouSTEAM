import React from 'react';
import CareerProfileList from './CareerProfileList';

const CareerProfile = () => {
  // Assume the 'profiles' array contains career profile data
  const profiles = [
    {
      id: 1,
      title: 'Software Engineer',
      description: 'A software engineer designs, develops, and maintains software applications.',
      image: 'software-engineer.jpg',
    },
    // Add more career profiles as needed
  ];

  return (
    <div>
      <h1>Career Profiles</h1>
      <CareerProfileList profiles={profiles} />
    </div>
  );
};

export default CareerProfile;
