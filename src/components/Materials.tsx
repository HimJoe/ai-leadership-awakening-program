
import React from 'react';
import { FileText, BarChartIcon, Calendar, Shield } from 'lucide-react';

const Materials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Workshop Materials & Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Computer-screen-code-glitch-animation-gif-background-free.gif/640px-Computer-screen-code-glitch-animation-gif-background-free.gif" alt="AI leadership resources" className="rounded-lg shadow-lg w-full object-cover" style={{height: "300px"}} />
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Exclusive Tools & Frameworks</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-1 mr-4 mt-1">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Visual Process Flow Comparison Tool</h4>
                  <p className="text-gray-600">Compare traditional vs. AI-enhanced leadership approaches with our visual framework.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-1 mr-4 mt-1">
                  <BarChartIcon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Leadership Success Metrics Dashboard</h4>
                  <p className="text-gray-600">Track your organization's AI transformation progress with custom KPIs.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-1 mr-4 mt-1">
                  <Calendar className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Implementation Timeline Planner</h4>
                  <p className="text-gray-600">Customize your AI implementation journey with milestone planning tools.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-1 mr-4 mt-1">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Industry-Specific AI Challenges & Solutions Guide</h4>
                  <p className="text-gray-600">Navigate common obstacles with our industry-contextualized solution frameworks.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
