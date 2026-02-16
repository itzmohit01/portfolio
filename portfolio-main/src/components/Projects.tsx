import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: 'E-Commerce Sales Prediction',
      category: 'Predictive Analysis',
      description: 'Modern e-commerce solution with advanced features including real-time inventory, payment processing, and analytics dashboard. Completed in under 1 month.',
      image: '/images/ecommerce.png',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow'],
      link: 'https://club29ratia.myshopify.com/',
      external: true
    },
    {
      title: 'Shoes AR Website',
      category: 'Web Application',
      description: 'Sport shoes AR experience and e-commerce. Built for interactive product showcasing and shopping.',
      image: '/images/shoes.png',
      tech: ['React', 'Three.js', 'AR.js', 'E-Commerce'],
      link: 'https://animeshtripathii.github.io/shoe-ar/',
      external: true
    },
    {
      title: 'AI-Powered Learning Platform',
      category: 'EdTech',
      description: 'Intelligent learning platform with personalized content recommendations and progress tracking.',
      image: '/images/learning.png',
      tech: ['React', 'AI/ML', 'Node.js', 'TensorFlow'],
      link: 'https://bhanu-partap-13.github.io/60DaysOfJava/',
      external: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 dark:bg-purple-600/20 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="w-full px-2 sm:px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects &
            <span className="text-blue-600 dark:text-blue-400 block animate-pulse">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore a selection of recent projects that showcase innovation, 
            technical excellence, and measurable business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isExternal = project.external || (project.link && project.link.startsWith('http'));
            const cardProps = isExternal
              ? {
                  onClick: (e: React.MouseEvent) => {
                    e.stopPropagation();
                    window.open(project.link, '_blank', 'noopener,noreferrer');
                  },
                  tabIndex: 0,
                  role: 'link',
                }
              : {
                  onClick: (e: React.MouseEvent) => {
                    e.stopPropagation();
                    if (project.link && project.link !== '#') navigate(project.link);
                  },
                  tabIndex: 0,
                  role: 'button',
                };
            return (
              <div
                key={index}
                className="group project-card bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in cursor-pointer relative hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20"
                style={{ animationDelay: `${index * 200}ms` }}
                {...cardProps}
                onKeyDown={e => {
                  if ((e.key === 'Enter' || e.key === ' ')) {
                    if (isExternal) {
                      window.open(project.link, '_blank', 'noopener,noreferrer');
                    } else if (project.link && project.link !== '#') {
                      navigate(project.link);
                    }
                  }
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold group cursor-pointer">
                      View Project
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/projects')}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-hover animate-glow"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
