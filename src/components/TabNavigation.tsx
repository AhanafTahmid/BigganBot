import React from 'react';
import { TabProps } from '../types';

interface TabNavigationProps {
  tabs: TabProps[];
  activeTab: number;
  onChange: (index: number) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex -mb-px space-x-8 overflow-x-auto no-scrollbar">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => onChange(index)}
            className={`
              relative py-4 px-1 flex items-center text-sm font-medium whitespace-nowrap
              transition-colors duration-200 hover:text-primary-600
              ${activeTab === index 
                ? 'text-primary-600 border-primary-600' 
                : 'text-gray-500 border-transparent hover:text-gray-700'}
            `}
            aria-current={activeTab === index ? 'page' : undefined}
          >
            {tab.icon}
            {tab.label}
            {activeTab === index && (
              <div 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
              />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;