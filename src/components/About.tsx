import React from 'react';
import FadeInSection from './FadeInSection';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <FadeInSection direction="right">
              <img 
                src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Εγκαταστάσεις logistics" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </FadeInSection>
          </div>
          
          <div className="w-full md:w-1/2">
            <FadeInSection direction="left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Σχετικά με εμάς</h2>
              <p className="text-gray-600 mb-6">
                Η Σκλαβενίτης Μεταφορική ιδρύθηκε το 1996 και έχει εξελιχθεί σε μία από τις κορυφαίες εταιρείες 
                logistics στην Ελλάδα. Με περισσότερα από 25 χρόνια εμπειρίας στον κλάδο, προσφέρουμε ολοκληρωμένες 
                λύσεις μεταφορών και logistics σε επιχειρήσεις κάθε μεγέθους.
              </p>
              <p className="text-gray-600 mb-8">
                Διαθέτουμε σύγχρονες εγκαταστάσεις, τελευταίας τεχνολογίας εξοπλισμό και μια ομάδα έμπειρων 
                επαγγελματιών, αφοσιωμένων στην παροχή εξαιρετικών υπηρεσιών. Η δέσμευσή μας για αξιοπιστία, 
                ασφάλεια και αποτελεσματικότητα μας έχει καθιερώσει ως αξιόπιστο συνεργάτη για τις μεταφορικές 
                ανάγκες των πελατών μας.
              </p>
            </FadeInSection>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FadeInSection delay={200}>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Η Αποστολή μας</h3>
                  <p className="text-gray-600">
                    Να παρέχουμε αξιόπιστες και αποτελεσματικές λύσεις μεταφορών που συμβάλλουν στην επιτυχία των πελατών μας.
                  </p>
                </div>
              </FadeInSection>
              
              <FadeInSection delay={400}>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Το Όραμά μας</h3>
                  <p className="text-gray-600">
                    Να είμαστε ο προτιμώμενος συνεργάτης logistics στην ελληνική αγορά, ξεχωρίζοντας για την καινοτομία και την ποιότητα των υπηρεσιών μας.
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;