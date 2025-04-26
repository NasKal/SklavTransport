import React from 'react';
import { Truck, Ship, Plane, Package } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Services = () => {
  const services = [
    {
      icon: <Truck className="h-8 w-8 text-[#0F4C81]" />,
      title: "Οδικές Μεταφορές",
      description: "Έγκαιρες και αξιόπιστες οδικές μεταφορές σε όλη την Ελλάδα και την Ευρώπη, με σύγχρονο στόλο οχημάτων και έμπειρους οδηγούς.",
      link: "#road-transport"
    },
    {
      icon: <Ship className="h-8 w-8 text-[#0F4C81]" />,
      title: "Θαλάσσιες Μεταφορές",
      description: "Αποτελεσματικές θαλάσσιες μεταφορές για μεγάλα φορτία και μεγάλες αποστάσεις, συνδέοντας όλα τα μεγάλα λιμάνια.",
      link: "#sea-transport"
    },
    
    {
      icon: <Package className="h-8 w-8 text-[#0F4C81]" />,
      title: "Αποθήκευση & Διανομή",
      description: "Σύγχρονες εγκαταστάσεις αποθήκευσης και ολοκληρωμένα συστήματα διανομής για αποτελεσματική διαχείριση των προϊόντων σας.",
      link: "#warehousing"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInSection threshold={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Οι Υπηρεσίες Μας</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Προσφέρουμε ολοκληρωμένες λύσεις μεταφορών και logistics για να καλύψουμε όλες τις ανάγκες της επιχείρησής σας
            </p>
          </div>
        </FadeInSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeInSection threshold={0.2} key={index} delay={index * 100}>
              <div className="bg-white p-8 rounded-lg shadow-sm transition-transform hover:-translate-y-1 duration-300">
                <div className="inline-block p-3 bg-blue-100 rounded-lg mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href={service.link} className="text-[#0F4C81] font-medium hover:text-blue-300 inline-flex items-center">
                  Μάθετε περισσότερα
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
