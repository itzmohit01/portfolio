import React, { useState } from 'react';
import { X, Star, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  github?: string;
  longDescription: string;
}

const ProjectsGallery = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const allProjects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full-Stack Development',
      description: 'Modern e-commerce solution with advanced features including real-time inventory, payment processing, and analytics dashboard.',
      longDescription: 'A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product management, shopping cart functionality, secure payment processing with Stripe, real-time inventory tracking, and detailed analytics dashboard for business insights.',
      image: 'https://inc42.com/wp-content/uploads/2022/06/Ecommerce-Industry.jpg',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: 'https://club29ratia.myshopify.com/'
    },
    {
      id: 2,
      title: 'Shoes AR Website',
      category: 'Web Application',
      description: 'Sport shoes AR experience and e-commerce. Built for interactive product showcasing and shopping.',
      longDescription: 'A sport shoes AR website for interactive product showcasing and e-commerce. Built with React, AR.js, and Three.js.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      tech: ['React', 'Three.js', 'AR.js', 'E-Commerce'],
      link: 'https://animeshtripathii.github.io/shoe-ar/'
    },
    {
      id: 3,
      title: 'AI-Powered Learning Platform',
      category: 'EdTech',
      description: 'Intelligent learning platform with personalized content recommendations and progress tracking.',
      longDescription: 'An AI-powered educational platform that provides personalized learning experiences, adaptive content recommendations, progress tracking, interactive quizzes, video streaming, and comprehensive analytics for educators.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      tech: ['React', 'AI/ML', 'Node.js', 'TensorFlow'],

    },
    {
      id: 4,
      title: 'Real Estate Management',
      category: 'Business Application',
      description: 'Complete real estate management solution with property listings, virtual tours, and CRM integration.',
      longDescription: 'A comprehensive real estate management system featuring property listings with high-quality images, virtual tour integration, lead management CRM, mortgage calculator, property comparison tools, and agent dashboard.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
      link: '#',
      github: '#'
    }
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-900">All Projects</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-hover"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project) => (
              <a 
                key={project.id}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-hover block"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                      5.0 Rating
                    </div>
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/90 z-60 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors cursor-hover"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {selectedProject.category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{selectedProject.longDescription}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={selectedProject.link} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-hover flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </a>
                  {selectedProject.github && (
                    <a href={selectedProject.github} className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors cursor-hover flex items-center">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsGallery;
