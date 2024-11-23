import React from 'react';
import { CheckCircle, Clock, BookOpen, Target, DollarSign } from 'lucide-react';
import type { StartupStep } from '../../types';

interface StepCardProps {
  step: StartupStep;
  stepNumber: number;
}

function StepCard({ step, stepNumber }: StepCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full">
          <span className="text-indigo-600 font-semibold">{stepNumber}</span>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
          <p className="text-sm text-gray-500 mt-1">Estimated: {step.estimatedTimeframe}</p>
        </div>
      </div>

      <p className="text-gray-600 mb-6">{step.description}</p>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Critical Success Factors:</h4>
        <div className="flex flex-wrap gap-2">
          {step.criticalFactors.map((factor, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {factor}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {step.tasks.map((task, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-2">
              <CheckCircle className="h-5 w-5 text-indigo-600" />
              <h4 className="font-medium text-gray-900">{task.title}</h4>
            </div>
            <p className="text-gray-600 ml-8 mb-3">{task.description}</p>
            <div className="ml-8 flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>{task.timeline}</span>
              </div>
              {task.resources && (
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <BookOpen className="h-4 w-4" />
                  <span>{task.resources.join(', ')}</span>
                </div>
              )}
              {task.estimatedCost && (
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <DollarSign className="h-4 w-4" />
                  <span>{task.estimatedCost}</span>
                </div>
              )}
            </div>
            {task.metrics && (
              <div className="mt-3 ml-8">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Target className="h-4 w-4" />
                  <span>Key Metrics: {task.metrics.join(', ')}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepCard;