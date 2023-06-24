import React from 'react';
import CareerProfileCard from './CareerProfileCard';

const CareerProfileList = ({ profiles }) => {
  return (
    <div>
      {profiles.map((profile) => (
        <CareerProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default CareerProfileList;
