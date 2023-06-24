import React from 'react';

const CareerProfileDetails = ({ profileId }) => {
  // Assume the 'profiles' array contains career profile data
  const profiles = [
    {
      id: 1,
      title: 'Software Engineer',
      description: 'A software engineer designs, develops, and maintains software applications.',
      image: 'software-engineer.jpg',
      details: 'Software engineers work in various industries...',
    },
    // Add more career profiles as needed
  ];

  // Find the profile with the matching 'profileId'
  const profile = profiles.find((profile) => profile.id === profileId);

  return (
    <div>
      <h2>{profile.title}</h2>
      <p>{profile.details}</p>
    </div>
  );
};

export default CareerProfileDetails;
