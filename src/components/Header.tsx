
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Executive AI Leadership Program</h1>
          <h2 className="text-xl md:text-2xl font-light mb-6 italic">Leadership Transformation for the AI Era</h2>
          <p className="text-lg md:text-xl mb-8">Premium AI leadership programs delivered by faculty with elite academic and top consulting pedigrees, thoughtfully priced for broader executive access.</p>
          <button className="bg-white text-indigo-900 hover:bg-indigo-100 py-3 px-8 rounded-lg font-bold shadow-lg transition-colors duration-300">
            Request Program Details
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
