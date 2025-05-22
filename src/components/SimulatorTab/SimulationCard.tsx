import React from 'react';
import { ExternalLink } from 'lucide-react';
import { SimulationData } from '../../types';

interface SimulationCardProps {
  simulation: SimulationData;
  onClick: () => void;
}

const SimulationCard: React.FC<SimulationCardProps> = ({ simulation, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={simulation.thumbnail} 
          alt={simulation.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded-full">
          {simulation.subject}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{simulation.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{simulation.description}</p>
        <button
          className="w-full flex items-center justify-center py-2 px-4 bg-primary-50 text-primary-600 rounded-md hover:bg-primary-100 transition-colors duration-200"
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          <span>Launch Simulation</span>
        </button>
      </div>
    </div>
  );
};

export default SimulationCard;