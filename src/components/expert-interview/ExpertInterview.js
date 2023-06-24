import React, { useEffect, useState } from 'react';

const ExpertInterview = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=40')
      .then((response) => response.json())
      .then((data) => setExperts(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-800">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-gray-200">
        Expert Interviews
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experts.map((expert) => (
          <div key={expert.login.uuid} className="bg-gray-900 rounded-lg overflow-hidden shadow-md">
            <img src={expert.picture.large} alt={expert.name.first} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-200">
                {expert.name.first} {expert.name.last}
              </h3>
              <p className="text-gray-400">Session Fee: ${Math.floor(Math.random() * 200) + 50}</p>
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded mt-4">
                Book Session
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertInterview;
