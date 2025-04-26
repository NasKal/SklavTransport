import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Επικοινωνήστε μαζί μας</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Είμαστε εδώ για να απαντήσουμε σε όλες τις ερωτήσεις σας και να σας προσφέρουμε τις καλύτερες λύσεις για τις ανάγκες μεταφοράς της επιχείρησής σας
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeInSection direction="right">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Στοιχεία Επικοινωνίας</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#248BE5] mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Διεύθυνση</h4>
                    <p className="text-gray-600">Λεωφ. Αθηνών 374, Χαϊδάρι 124 62, Αθήνα</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#248BE5] mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Τηλέφωνο</h4>
                    <p className="text-gray-600">+30 210-555-0132</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#248BE5] mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">contact@sklavenitis-transport.gr</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[#248BE5] mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Ωράριο Λειτουργίας</h4>
                    <p className="text-gray-600">Δευτέρα - Παρασκευή: 08:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="left">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Φόρμα Επικοινωνίας</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ονοματεπώνυμο
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#248BE5] focus:border-[#248BE5]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#248BE5] focus:border-[#248BE5]"
                    required
                  />
                </div>
                
              
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Μήνυμα
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#248BE5] focus:border-[#248BE5]"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#248BE5] text-white py-3 px-6 rounded-md hover:bg-[#0F4C81] transition-colors font-medium"
                >
                  Αποστολή Μηνύματος
                </button>
              </form>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;