import React, { useState } from 'react';
import { Rocket } from 'lucide-react';
import IdeaGenerator from './components/IdeaGenerator';
import IdeaList from './components/IdeaList';
import RoadmapView from './components/RoadmapView';
import { generateIdeasWithAI } from './utils/api';

function App() {
  const [vagueConcept, setVagueConcept] = useState('');
  const [generatedIdeas, setGeneratedIdeas] = useState<string[]>([]);
  const [selectedIdea, setSelectedIdea] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateIdeas = async (concept: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const ideas = await generateIdeasWithAI(concept);
      if (ideas && Array.isArray(ideas)) {
        setGeneratedIdeas(ideas);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setGeneratedIdeas([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">StartupGuru</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        {!selectedIdea ? (
          <>
            <IdeaGenerator 
              vagueConcept={vagueConcept}
              setVagueConcept={setVagueConcept}
              onGenerate={generateIdeas}
              isLoading={isLoading}
            />
            
            {generatedIdeas.length > 0 && (
              <IdeaList 
                ideas={generatedIdeas}
                onSelectIdea={setSelectedIdea}
              />
            )}
          </>
        ) : (
          <RoadmapView 
            idea={selectedIdea}
            onBack={() => setSelectedIdea(null)}
          />
        )}
      </main>
    </div>
  );
}

export default App;