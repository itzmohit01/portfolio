import React, { useRef } from 'react';
import { Award, Users, Clock, Trophy } from 'lucide-react';

// Magnet effect for heading
function useMagnetEffect() {
  const ref = useRef(null);
  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  }
  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0,0)';
  }
  return { ref, handleMouseMove, handleMouseLeave };
}

const About = () => {
  const stats = [
    { icon: Trophy, number: '15+', label: 'Projects Completed', color: 'text-blue-600' },
    { icon: Users, number: '10+', label: 'Happy Clients', color: 'text-green-600' },
    { icon: Clock, number: '2+', label: 'Years Experience', color: 'text-purple-600' },
    { icon: Award, number: '15+', label: 'Certificates', color: 'text-orange-600' }
  ];

  const technologies = [
    { name: 'Python & Pandas', level: '95%', color: 'bg-blue-500' },
    { name: 'Scikit-Learn', level: '90%', color: 'bg-green-500' },
    { name: 'Seaborn', level: '85%', color: 'bg-blue-600' },
    { name: 'Matplotlib', level: '80%', color: 'bg-yellow-500' },
    { name: 'SQL', level: '98%', color: 'bg-orange-500' },
    { name: 'TensorFlow', level: '95%', color: 'bg-blue-400' },
    { name: 'PowerBI', level: '75%', color: 'bg-purple-500' },
    { name: 'Tableau', level: '85%', color: 'bg-green-600' }
  ];

  const magnet = useMagnetEffect();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-100/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me &
            <span className="text-blue-600 dark:text-blue-400 block">My Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate data scientist with expertise in advanced analytical methods,
            dedicated to extracting actionable insights that drive strategic business success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 cursor-hover group"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{stat.number}</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3
              ref={magnet.ref}
              onMouseMove={magnet.handleMouseMove}
              onMouseLeave={magnet.handleMouseLeave}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6 inline-block transition-transform duration-200 cursor-pointer select-none"
              style={{ display: 'inline-block' }}
            >
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group relative p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 shadow border-2 border-transparent hover:border-blue-500 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Animated border effect */}
                  <span className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent group-hover:border-blue-500 group-hover:animate-glow-border"></span>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-hover">{tech.name}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{tech.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 group-hover:bg-gray-300 dark:group-hover:bg-gray-600 transition-colors">
                    <div 
                      className={`h-2 rounded-full ${tech.color} transition-all duration-1000 group-hover:shadow-lg`}
                      style={{ width: tech.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in delay-300">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Me?</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-hover">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Clean, maintainable code following best practices
                </li>
                <li className="flex items-start hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-hover">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Responsive designs that work on all devices
                </li>
                <li className="flex items-start hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-hover">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Fast delivery without compromising quality
                </li>
                <li className="flex items-start hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-hover">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ongoing support and maintenance
                </li>
                <li className="flex items-start hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-hover">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Transparent communication throughout the project
                </li>
              </ul>

              <div className="mt-8">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-hover"
                >
                  Let's Work Together
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
