import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomCursor from '../components/CustomCursor';

const ComingSoon = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <CustomCursor />
      {/* Spotlights */}
      <div className="absolute top-0 left-1/4 w-24 h-32 z-10 spotlight" style={{left: '10%'}} />
      <div className="absolute top-0 left-1/2 w-24 h-32 z-10 spotlight" style={{left: '50%', transform: 'translateX(-50%)'}} />
      <div className="absolute top-0 right-1/4 w-24 h-32 z-10 spotlight" style={{right: '10%'}} />
      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center animate-fade-in-slow">
        <div className="bg-black/40 rounded-xl px-16 py-10 shadow-2xl border border-gray-700 flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-300 text-center tracking-widest drop-shadow-[0_2px_20px_rgba(255,255,180,0.8)] animate-glow-soon" style={{letterSpacing: '0.15em'}}>
            COMING SOON
          </h1>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="mt-12 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 hover:from-yellow-500 hover:to-yellow-500 text-gray-900 px-10 py-4 rounded-full text-lg font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-scale-in cursor-pointer border-2 border-yellow-300"
        >
          Go Back
        </button>
      </div>
      {/* Spotlights CSS */}
      <style>{`
        .spotlight {
          background: radial-gradient(ellipse at center, rgba(255,255,200,0.7) 0%, rgba(255,255,200,0.2) 60%, rgba(0,0,0,0) 100%);
          filter: blur(2px);
        }
        .animate-glow-soon {
          animation: glow-soon 2s infinite alternate;
        }
        @keyframes glow-soon {
          0% { text-shadow: 0 0 20px #fff8b0, 0 0 40px #fff8b0, 0 0 60px #fff8b0; }
          100% { text-shadow: 0 0 40px #ffe066, 0 0 80px #ffe066, 0 0 120px #ffe066; }
        }
      `}</style>
    </div>
  );
};

export default ComingSoon; 