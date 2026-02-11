import React from 'react';
import { ArrowRight, Code, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Enhanced Background Effects with Day/Night Animation */}
      <div className="absolute inset-0">
        {/* Night mode stars */}
        <div className="dark:block hidden">
          {/* Twinkling stars */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-white/90 animate-twinkle`}
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${5 + Math.random() * 90}%`,
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: 0.7 + Math.random() * 0.3
              }}
            ></div>
          ))}
        </div>
        {/* Day mode sun and sunlight */}
        <div className="dark:hidden block">
          {/* Sun and sunlight perfectly aligned */}
          <div className="absolute top-16 right-24 flex flex-col items-center justify-center" style={{width:'256px',height:'256px'}}>
            {/* Sunlight radial gradient */}
            <div className="absolute left-1/2 top-1/2 w-64 h-64 bg-yellow-200/40 rounded-full blur-2xl pointer-events-none" style={{transform:'translate(-50%,-50%)'}}></div>
            {/* Sun rays */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 bg-yellow-200/60 rounded-full"
                style={{
                  width: '6px',
                  height: '60px',
                  transform: `translate(-50%,-100%) rotate(${i * 30}deg)`,
                  transformOrigin: 'bottom center',
                  filter: 'blur(1px)'
                }}
              ></div>
            ))}
            {/* Sun core */}
            <div className="absolute left-1/2 top-1/2 w-32 h-32 bg-yellow-300 rounded-full shadow-2xl animate-sun-pulse" style={{transform:'translate(-50%,-50%)'}}></div>
          </div>
        </div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Navigation - Center Cylinder */}
      <nav className="relative z-10 flex justify-center items-center px-8 py-6">
        <div className="flex items-center space-x-2 absolute left-8">
          <Code className="w-8 h-8 text-blue-400" />
          <span className="text-2xl font-bold">Portfolio</span>
        </div>
        
        {/* Center Cylinder Navigation */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-3 shadow-lg">
          <div className="flex space-x-8">
            <a href="#about" className="hover:text-blue-300 transition-colors duration-300 text-sm font-medium cursor-hover">About</a>
            <a href="#reviews" className="hover:text-blue-300 transition-colors duration-300 text-sm font-medium cursor-hover">Reviews</a>
            <a href="#services" className="hover:text-blue-300 transition-colors duration-300 text-sm font-medium cursor-hover">Services</a>
            <a href="#projects" className="hover:text-blue-300 transition-colors duration-300 text-sm font-medium cursor-hover">Projects</a>
            <a href="#contact" className="hover:text-blue-300 transition-colors duration-300 text-sm font-medium cursor-hover">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-8">
        <div className="text-center max-w-4xl">
          <div className="flex items-center justify-center mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
              ))}
            </div>
            <span className="ml-3 text-sm text-gray-300 animate-fade-in">Trusted by 50+ clients</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="inline-block animate-pulse" style={{ animationDelay: '0ms' }}>Transforming</span>{' '}
            <span className="inline-block animate-pulse" style={{ animationDelay: '200ms' }}>Ideas</span>{' '}
            <span className="inline-block animate-pulse" style={{ animationDelay: '400ms' }}>Into</span>
            <span className="block text-white bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
              <span className="inline-block animate-pulse" style={{ animationDelay: '600ms' }}>Digital</span>{' '}
              <span className="inline-block animate-pulse" style={{ animationDelay: '800ms' }}>Excellence</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            Professional developer specializing in cutting-edge web applications, 
            delivering innovative solutions that drive business growth and exceed client expectations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center group cursor-hover"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-white/10 cursor-hover"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
