import React from 'react';
import { Rocket, Target, Users, TrendingUp, BarChart } from 'lucide-react';

interface PlanOverviewProps {
  idea: string;
  overview: string;
  problemStatement: string;
  targetMarket: {
    demographics: string[];
    psychographics: string[];
    marketSize: string;
  };
  valueProposition: string;
}

function PlanOverview({ idea, overview, problemStatement, targetMarket, valueProposition }: PlanOverviewProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <div className="flex items-center space-x-3 mb-6">
        <Rocket className="h-8 w-8 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">Startup Plan</h2>
      </div>

      <h3 className="text-xl font-semibold text-indigo-600 mb-4">{idea}</h3>
      <p className="text-gray-600 mb-6">{overview}</p>

      <div className="grid gap-6 mb-8">
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-2">Problem Statement</h4>
          <p className="text-gray-600">{problemStatement}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-2">Value Proposition</h4>
          <p className="text-gray-600">{valueProposition}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Target Market</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-2">Demographics</h5>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {targetMarket.demographics.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-2">Psychographics</h5>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {targetMarket.psychographics.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-2">Market Size</h5>
              <p className="text-gray-600">{targetMarket.marketSize}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-lg">
          <Target className="h-5 w-5 text-indigo-600" />
          <span className="text-gray-700 font-medium">Clear Objectives</span>
        </div>
        <div className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-lg">
          <Users className="h-5 w-5 text-indigo-600" />
          <span className="text-gray-700 font-medium">Target Audience</span>
        </div>
        <div className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-lg">
          <BarChart className="h-5 w-5 text-indigo-600" />
          <span className="text-gray-700 font-medium">Growth Metrics</span>
        </div>
      </div>
    </div>
  );
}

export default PlanOverview;