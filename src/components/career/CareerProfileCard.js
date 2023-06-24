import React from 'react';

const CareerProfileCard = ({ profile }) => {
  return (
    <div>
      <img src={profile.image} alt={profile.title} />
      <h2>{profile.title}</h2>
      <p>{profile.description}</p>
    </div>
  );
};

export default CareerProfileCard;
