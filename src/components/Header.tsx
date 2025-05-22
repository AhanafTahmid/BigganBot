import React from 'react';
import { Atom, Headphones } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between md:px-6 lg:px-8">
        <div className="flex items-center">
          <Atom className="h-8 w-8 text-primary-600" />
          <div className="ml-3">
            <h1 className="text-xl font-semibold text-gray-900">BigganBot</h1>
            <p className="text-sm text-gray-500 hidden sm:block">Interactive Learning Platform</p>
          </div>
        </div>
        
        <div className="flex items-center mt-3 sm:mt-0">
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search topics..." 
              className="py-2 pl-4 pr-10 w-40 lg:w-64 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <button 
            aria-label="Voice Assistant"
            className="ml-4 flex items-center py-2 px-4 bg-primary-50 text-primary-600 rounded-full hover:bg-primary-100 transition-colors duration-200"
          >
            <Headphones className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Assistant</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;