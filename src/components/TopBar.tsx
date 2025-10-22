import React from 'react';
import { PhoneCall } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-gray-100 py-2 px-4 text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <PhoneCall size={16} className="mr-1" />
            <span>+30 210-555-0132</span>
          </div>
          <span className="hidden md:inline-block">•</span>
          <span className="hidden md:inline-block">contact@transport.gr</span>
        </div>
        <div className="flex items-center">
          <span>Δευ-Παρ: 08:00 - 17:00</span>
          <span className="hidden md:inline-block ml-4 border-l border-gray-300 pl-4">
            <a href="#track" className="text-gray-700 hover:text-[#0F4C81] transition-colors">
              ΠΑΡΑΚΟΛΟΥΘΗΣΗ & ΕΝΤΟΠΙΣΜΟΣ
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
