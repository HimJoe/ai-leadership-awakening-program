
import React from 'react';

const Faculty: React.FC = () => {
  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-2">Expert Faculty</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Led by experts with elite academic credentials and McKinsey consulting experience</p>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="text-center max-w-xs">
            <div className="w-40 h-40 mx-auto bg-indigo-200 rounded-full mb-4 flex items-center justify-center">
              <svg className="w-24 h-24 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-1">Your Name</h3>
            <p className="text-gray-600 mb-2">Program Director</p>
            <p className="text-sm text-gray-600">25+ years of digital transformation leadership. Former CTO at Fortune 500 companies focusing on strategic technology implementation.</p>
          </div>
          
          <div className="text-center max-w-xs">
            <div className="w-40 h-40 mx-auto bg-indigo-200 rounded-full mb-4 flex items-center justify-center">
              <svg className="w-24 h-24 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-1">McKinsey Partner</h3>
            <p className="text-gray-600 mb-2">Co-Director</p>
            <p className="text-sm text-gray-600">Former Senior Partner at McKinsey with expertise in enterprise AI strategy and organizational transformation for global organizations.</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Our combined experience spans over 25 years of digital transformation consulting with Fortune 500 companies. We've helped organizations across industries navigate the complexities of AI adoption and realize tangible business outcomes.</p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-lg font-bold shadow-lg transition-colors duration-300">
            Meet Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
