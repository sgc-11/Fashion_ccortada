import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Placeholder data - replace with API call later
const mockModels = [
  { id: 1, name: 'Emma Stone', age: 28, height: '5\'6"', specialties: ['Runway', 'Print'], image: '/api/placeholder/400/600' },
  { id: 2, name: 'David Gandy', age: 32, height: '6\'2"', specialties: ['Commercial', 'Fitness'], image: '/api/placeholder/400/600' },
  { id: 3, name: 'Naomi Campbell', age: 35, height: '5\'9"', specialties: ['High Fashion', 'Runway'], image: '/api/placeholder/400/600' },
];

const ModelsManagement = () => {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [models, setModels] = useState(mockModels);

  // useEffect to fetch models from API once implemented
  useEffect(() => {
    // Fetch models from API and update state
    // setModels(fetchedModels);
  }, []);

  const currentModel = models[currentModelIndex];

  const nextModel = () => {
    setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length);
  };

  const prevModel = () => {
    setCurrentModelIndex((prevIndex) => (prevIndex - 1 + models.length) % models.length);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-pink-500 mb-8 text-center">Our Models</h2>
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Model Image */}
          <div className="relative w-full md:w-1/2">
            <img 
              src={currentModel.image} 
              alt={currentModel.name} 
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
              <button 
                onClick={prevModel}
                className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full transition duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextModel}
                className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full transition duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          {/* Model Info */}
          <div className="w-full md:w-1/2 p-6 bg-gray-900">
            <h3 className="text-3xl font-bold text-pink-500 mb-4">{currentModel.name}</h3>
            <div className="space-y-4 text-gray-300">
              <p><span className="font-semibold text-pink-400">Age:</span> {currentModel.age}</p>
              <p><span className="font-semibold text-pink-400">Height:</span> {currentModel.height}</p>
              <p><span className="font-semibold text-pink-400">Specialties:</span> {currentModel.specialties.join(', ')}</p>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-pink-400 mb-2">Biography</h4>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded transition duration-300">
              Book This Model
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelsManagement;