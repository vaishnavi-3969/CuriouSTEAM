import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion, AnimatePresence } from 'framer-motion';

const EventsAndConferences = () => {
  const events = [
    {
      id: 1,
      title: 'Tech Conference 2023',
      location: { lat: 37.7749, lng: -122.4194 },
      date: 'October 15-17, 2023',
    },
    {
      id: 2,
      title: 'Design Summit',
      location: { lat: 51.5074, lng: -0.1278 },
      date: 'November 5-7, 2023',
    },
    {
      id: 3,
      title: 'Data Science Expo',
      location: { lat: 40.7128, lng: -74.006 },
      date: 'December 3-5, 2023',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-800">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-gray-200">
        Events and Conferences
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-64">
                <MapContainer center={event.location} zoom={13} className="h-full">
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
                  />
                  <Marker position={event.location}>
                    <Popup>{event.title}</Popup>
                  </Marker>
                </MapContainer>
              </div>
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{event.title}</h3>
                <p className="text-gray-700">{event.date}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EventsAndConferences;
