
import React from 'react';

const LeadershipGap: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-indigo-900 mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              The AI Leadership Gap
            </h2>
            <p className="text-xl mb-4">While 83% of executives cite AI as a strategic priority, only 23% have successfully implemented AI at scale.</p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 italic text-yellow-800">
              "The AI revolution demands a new leadership approach. The window for competitive advantage is rapidly closing."
            </div>
          </div>
          <div className="md:w-5/12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <div className="text-3xl font-bold text-indigo-900">83%</div>
                <div className="text-gray-600">Executives citing AI as strategic priority</div>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full mb-6">
                <div className="bg-indigo-600 h-3 rounded-full" style={{width: '83%'}}></div>
              </div>
              
              <div className="mb-4">
                <div className="text-3xl font-bold text-red-600">23%</div>
                <div className="text-gray-600">Successfully implemented AI at scale</div>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div className="bg-red-500 h-3 rounded-full" style={{width: '23%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipGap;
