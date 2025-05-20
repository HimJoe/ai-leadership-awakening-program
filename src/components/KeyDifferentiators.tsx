
import React from 'react';
import { MessageSquare, Cloud, Monitor, Building, DollarSign, Shield } from 'lucide-react';

const KeyDifferentiators: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-2">Key Differentiators</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">What makes our program unique in the executive education landscape</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="text-indigo-700 mb-4">
              <MessageSquare className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">Change Management Focus</h3>
            <p className="text-gray-600">Our program integrates proven change management methodologies specific to AI adoption challenges.</p>
          </div>
          
          <div className="p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="text-indigo-700 mb-4">
              <Cloud className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">Industry Contextualization</h3>
            <p className="text-gray-600">Content tailored to your specific industry challenges and opportunities, not generic theory.</p>
          </div>
          
          <div className="p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="text-indigo-700 mb-4">
              <Monitor className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">Hands-on AI Experience</h3>
            <p className="text-gray-600">Real-world application of AI tools during the program with immediate practical value.</p>
          </div>
          
          <div className="p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="text-indigo-700 mb-4">
              <Building className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">Elite Faculty</h3>
            <p className="text-gray-600">Led by instructors with elite academic credentials and top consulting firm experience.</p>
          </div>
          
          <div className="p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="text-indigo-700 mb-4">
              <DollarSign className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">Competitive Market Rates</h3>
            <p className="text-gray-600">Premium quality education at rates 40-50% below comparable programs from other elite institutions.</p>
          </div>
          
          <div className="p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="text-indigo-700 mb-4">
              <Shield className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">Exclusive Resources</h3>
            <p className="text-gray-600">Access to proprietary tools, frameworks, and assessments developed specifically for AI leadership.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyDifferentiators;
