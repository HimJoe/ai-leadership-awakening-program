
import React from 'react';

const ProgramOptions: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Program Options</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="p-6 bg-indigo-100 text-center">
              <h3 className="text-xl font-bold text-indigo-900">3-Hour Introduction</h3>
              <p className="text-indigo-700 mt-1">Virtual Format</p>
            </div>
            <div className="p-6 flex-grow">
              <div className="text-center mb-6">
                <p className="text-gray-500 text-sm uppercase">Starting at</p>
                <p className="text-4xl font-bold text-indigo-900">$450</p>
                <p className="text-gray-500">per participant</p>
              </div>
              <h4 className="font-bold mb-4">AI Leadership Foundations: From Awareness to Readiness</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>AI leadership readiness assessment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Mindset barrier identification</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Hands-on AI productivity tools</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Initial AI leadership roadmap</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic mb-6">Perfect for executives seeking to understand AI's relevance to their leadership role without a significant time commitment.</p>
            </div>
            <div className="p-6 bg-gray-50">
              <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform scale-105 z-10 border-2 border-indigo-500">
            <div className="p-6 bg-indigo-600 text-center text-white">
              <div className="inline-block px-3 py-1 bg-indigo-900 text-white text-xs rounded-full uppercase font-bold mb-2">Most Popular</div>
              <h3 className="text-xl font-bold">1-Day Intensive</h3>
              <p className="mt-1">In-Person Format</p>
            </div>
            <div className="p-6 flex-grow">
              <div className="text-center mb-6">
                <p className="text-gray-500 text-sm uppercase">Starting at</p>
                <p className="text-4xl font-bold text-indigo-900">$1,500</p>
                <p className="text-gray-500">per participant</p>
                <p className="text-sm text-indigo-600 mt-1">Team enrollment discounts available</p>
              </div>
              <h4 className="font-bold mb-4">Strategic AI Leadership: From Strategy to Implementation</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>In-depth AI leadership competencies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Industry-specific case studies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Organizational challenge workshop</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Advanced AI tools exploration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>90-day AI implementation action plan</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic mb-6">Perfect for leaders who need a structured approach to developing and implementing an AI strategy in their organization.</p>
            </div>
            <div className="p-6 bg-gray-50">
              <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded transition-colors">
                Reserve Your Spot
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="p-6 bg-indigo-100 text-center">
              <h3 className="text-xl font-bold text-indigo-900">3-Day Immersion</h3>
              <p className="text-indigo-700 mt-1">In-Person Format</p>
            </div>
            <div className="p-6 flex-grow">
              <div className="text-center mb-6">
                <p className="text-gray-500 text-sm uppercase">Custom pricing</p>
                <button className="mt-2 text-indigo-600 hover:text-indigo-800 font-bold">Contact for Details</button>
              </div>
              <h4 className="font-bold mb-4">Transformative AI Leadership: From Vision to Organizational Change</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Complete AI leadership framework</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Personalized executive coaching</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>AI implementation simulation exercises</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Comprehensive change management plans</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>AI governance framework development</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic mb-6">Perfect for senior executives responsible for comprehensive organizational transformation who need an intensive approach to leading AI initiatives.</p>
            </div>
            <div className="p-6 bg-gray-50">
              <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded transition-colors">
                Request Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOptions;
