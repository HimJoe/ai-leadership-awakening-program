
import React from 'react';
import Header from '../components/Header';
import LeadershipGap from '../components/LeadershipGap';
import ProgramOutcomes from '../components/ProgramOutcomes';
import TransformationModel from '../components/TransformationModel';
import KeyDifferentiators from '../components/KeyDifferentiators';
import ProgramOptions from '../components/ProgramOptions';
import Materials from '../components/Materials';
import Faculty from '../components/Faculty';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <LeadershipGap />
      <ProgramOutcomes />
      <TransformationModel />
      <KeyDifferentiators />
      <ProgramOptions />
      <Materials />
      <Faculty />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
