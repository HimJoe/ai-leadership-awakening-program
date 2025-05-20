
import React from 'react';
import { Mail } from 'lucide-react';

const Faculty: React.FC = () => {
  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-2">Expert Faculty</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Led by experts with elite academic credentials and McKinsey consulting experience</p>
        
        <div className="flex flex-col items-center justify-center">
          <div className="text-center max-w-3xl">
            <p className="text-gray-600 mb-6">Our combined experience spans over 25 years of digital transformation consulting with Fortune 500 companies. We've helped organizations across industries navigate the complexities of AI adoption and realize tangible business outcomes.</p>
            
            <div className="flex items-center justify-center text-indigo-700 mb-6">
              <Mail className="w-6 h-6 mr-2" />
              <a href="mailto:aiconnectors.org@gmail.com" className="text-indigo-700 hover:text-indigo-900 transition-colors">
                aiconnectors.org@gmail.com
              </a>
            </div>
            
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-lg font-bold shadow-lg transition-colors duration-300">
              Meet Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
