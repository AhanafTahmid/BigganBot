import React, { useState } from 'react';
import { simulations } from '../../data/simulationsData';
import SimulationCard from './SimulationCard';
import { SimulationData } from '../../types';

const AtomSimulator: React.FC = () => {
  const [activeSim, setActiveSim] = useState<SimulationData | null>(null);
  // Filter simulations related to atoms only
  const atomSimulations: SimulationData[] = simulations.filter(sim =>
    sim.title.toLowerCase().includes('atom') ||
    sim.subject.toLowerCase().includes('atom')
  );

  return (
    <div>
      {!activeSim ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {atomSimulations.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">No atom simulators found.</div>
          ) : (
            atomSimulations.map((sim) => (
              <SimulationCard
                key={sim.id}
                simulation={sim}
                onClick={() => setActiveSim(sim)}
              />
            ))
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
            onClick={() => setActiveSim(null)}
          >
            ← Back to Simulators
          </button>
          <h2 className="text-2xl font-bold mb-4">{activeSim.title}</h2>
          <iframe
            src={activeSim.url}
            title={activeSim.title}
            className="w-full h-[70vh] rounded-lg border"
            style={{ minHeight: 400 }}
            allowFullScreen
          />
          <p className="mt-4 text-gray-700 max-w-2xl text-center">{activeSim.description}</p>
        </div>
      )}
    </div>
  );
};

export default AtomSimulator;
