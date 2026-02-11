
import React, { useEffect, useState } from 'react';
import { Code } from 'lucide-react';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 z-50 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="animate-bounce mb-8">
          <Code className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
            Bhanu Partap
          </h1>
        </div>
        
        <div className="w-64 bg-white/20 rounded-full h-2 mb-4">
          <div 
            className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-blue-200 animate-pulse">Loading Portfolio... {progress}%</p>
      </div>
    </div>
  );
};

export default Loader;
