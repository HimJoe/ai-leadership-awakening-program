
import React from 'react';
import { Code, LightbulbIcon, ClipboardList, Map, Users } from 'lucide-react';

const ProgramOutcomes: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12 flex items-center justify-center">
          <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Program Outcomes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-indigo-50 p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
            <div className="text-indigo-700 mb-4">
              <Code className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2">Overcome Mindset Barriers</h3>
            <p>Identify and overcome personal mindset barriers that block effective AI leadership and adoption.</p>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
            <div className="text-indigo-700 mb-4">
              <LightbulbIcon className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2">Practical AI Tools</h3>
            <p>Explore and apply AI tools and techniques to improve personal and team productivity.</p>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
            <div className="text-indigo-700 mb-4">
              <ClipboardList className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2">Implementation Strategies</h3>
            <p>Develop practical AI implementation strategies tailored to your organization's needs.</p>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
            <div className="text-indigo-700 mb-4">
              <Map className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2">Transformation Roadmap</h3>
            <p>Create a personalized leadership transformation roadmap with actionable milestones.</p>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
            <div className="text-indigo-700 mb-4">
              <Users className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2">Support Network</h3>
            <p>Build a support network of fellow executives navigating similar AI transformation challenges.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOutcomes;
