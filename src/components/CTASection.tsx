
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your AI Leadership?</h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">Join executives from leading organizations who have accelerated their AI journey through our transformative program.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-indigo-900 hover:bg-indigo-100 py-3 px-8 rounded-lg font-bold shadow-lg transition-colors duration-300">
            Download Brochure
          </button>
          <button className="bg-indigo-600 border-2 border-white hover:bg-indigo-700 text-white py-3 px-8 rounded-lg font-bold shadow-lg transition-colors duration-300">
            Request Information
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
