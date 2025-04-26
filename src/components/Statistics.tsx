import React from 'react';
import FadeInSection from './FadeInSection';

const Statistics = () => {
  return (
    <section className="py-16 bg-transparent border-t border-gray-100 relative z-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeInSection delay={0}>
            <div className="text-center">
              <h2 className="text-5xl font-bold text-[#248BE5] mb-2">25.000</h2>
              <p className="text-gray-600 uppercase text-sm font-medium tracking-wider">τ.μ. ΕΓΚΑΤΑΣΤΑΣΕΙΣ LOGISTICS</p>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={200}>
            <div className="text-center">
              <h2 className="text-5xl font-bold text-[#248BE5] mb-2">2000+</h2>
              <p className="text-gray-600 uppercase text-sm font-medium tracking-wider">ΟΔΙΚΕΣ ΜΕΤΑΦΟΡΕΣ ΑΝΑ ΕΤΟΣ</p>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={400}>
            <div className="text-center">
              <h2 className="text-5xl font-bold text-[#248BE5] mb-2">1000+</h2>
              <p className="text-gray-600 uppercase text-sm font-medium tracking-wider">ΕΥΧΑΡΙΣΤΗΜΕΝΟΙ ΠΕΛΑΤΕΣ</p>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={600}>
            <div className="text-center">
              <h2 className="text-5xl font-bold text-[#248BE5] mb-2">24/7</h2>
              <p className="text-gray-600 uppercase text-sm font-medium tracking-wider">ΕΞΥΠΗΡΕΤΗΣΗ ΠΕΛΑΤΩΝ</p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Statistics;