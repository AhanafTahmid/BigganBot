import React, { useState } from 'react';
import SimulationCard from './SimulationCard';
import SimulationViewer from './SimulationViewer';
import { SimulationData } from '../../types';
import { simulations } from '../../data/simulationsData';

const SimulatorTab: React.FC = () => {
  const [selectedSimulation, setSelectedSimulation] = useState<SimulationData | null>(null);
  const [activeSubject, setActiveSubject] = useState<string>('all');

  const subjects = ['all', ...Array.from(new Set(simulations.map(sim => sim.subject)))];
  
  const filteredSimulations = activeSubject === 'all' 
    ? simulations 
    : simulations.filter(sim => sim.subject === activeSubject);

  return (
    <div className="space-y-6">
      {selectedSimulation ? (
        <SimulationViewer 
          simulation={selectedSimulation} 
          onBack={() => setSelectedSimulation(null)} 
        />
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Interactive Simulations</h2>
            <div className="flex space-x-2 items-center">
              <span className="text-sm text-gray-500">Filter by:</span>
              <select 
                value={activeSubject}
                onChange={(e) => setActiveSubject(e.target.value)}
                className="text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>
                    {subject.charAt(0).toUpperCase() + subject.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSimulations.map((simulation) => (
              <SimulationCard
                key={simulation.id}
                simulation={simulation}
                onClick={() => setSelectedSimulation(simulation)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SimulatorTab;