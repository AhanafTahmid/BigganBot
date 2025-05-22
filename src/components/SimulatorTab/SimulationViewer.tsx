import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { SimulationData } from '../../types';

interface SimulationViewerProps {
  simulation: SimulationData;
  onBack: () => void;
}

const SimulationViewer: React.FC<SimulationViewerProps> = ({ simulation, onBack }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center mb-4">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span>Back to simulations</span>
        </button>
      </div>
      
      <div className="bg-white rounded-lg overflow-hidden shadow-sm">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">{simulation.title}</h2>
          <p className="text-gray-600 mt-2">{simulation.description}</p>
        </div>
        
        <div className="relative aspect-video w-full">
          <iframe
            src={simulation.url}
            title={simulation.title}
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        
        <div className="p-4 bg-gray-50">
          <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Learning Points</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Understand the basic concepts through interactive visualization</li>
            <li>Practice applying theoretical knowledge in a simulated environment</li>
            <li>Experiment with different parameters to observe outcomes</li>
            <li>Develop intuition about scientific phenomena</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimulationViewer;