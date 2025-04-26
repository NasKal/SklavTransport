import React from 'react';
import { Truck, Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Truck className="h-8 w-8 text-[#248BE5] mr-2" />
              <span className="text-xl font-bold">Σκλαβενίτης</span>
            </div>
            <p className="text-gray-400 mb-6">
              Αξιόπιστες λύσεις μεταφορών και logistics για επιχειρήσεις όλων των μεγεθών από το 1996.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Χρήσιμοι Σύνδεσμοι</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Αρχική</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Σχετικά με εμάς</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Υπηρεσίες</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Επικοινωνία</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Υπηρεσίες</h3>
            <ul className="space-y-3">
              <li><a href="#road-transport" className="text-gray-400 hover:text-white transition-colors">Οδικές Μεταφορές</a></li>
              <li><a href="#sea-transport" className="text-gray-400 hover:text-white transition-colors">Θαλάσσιες Μεταφορές</a></li>
              <li><a href="#air-transport" className="text-gray-400 hover:text-white transition-colors">Αεροπορικές Μεταφορές</a></li>
              <li><a href="#warehousing" className="text-gray-400 hover:text-white transition-colors">Αποθήκευση & Διανομή</a></li>
              <li><a href="#customs" className="text-gray-400 hover:text-white transition-colors">Εκτελωνισμός</a></li>
              <li><a href="#consulting" className="text-gray-400 hover:text-white transition-colors">Συμβουλευτικές Υπηρεσίες</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Επικοινωνία</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#248BE5] mr-3 mt-0.5" />
                <span className="text-gray-400">Λεωφ. Αθηνών 374, Χαϊδάρι 124 62, Αθήνα</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#248BE5] mr-3" />
                <span className="text-gray-400">+30 210-555-0132</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#248BE5] mr-3" />
                <span className="text-gray-400">contact@sklavenitis-transport.gr</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-[#248BE5] mr-3" />
                <span className="text-gray-400">Δευτέρα - Παρασκευή: 08:00 - 17:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Σκλαβενίτης Μεταφορική. Με επιφύλαξη παντός δικαιώματος.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Όροι Χρήσης</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Πολιτική Απορρήτου</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;