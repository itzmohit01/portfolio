import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CustomCursor from '../components/CustomCursor';
import comingSoonImg from '../public/images/placeholder.svg';

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Mobile Apps', 'E-Commerce', 'Healthcare', 'Fintech'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'E-Commerce',
      description: 'Modern e-commerce solution with advanced features including real-time inventory, payment processing, and analytics dashboard.',
      longDescription: 'A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product management, shopping cart functionality, secure payment processing with Stripe, real-time inventory tracking, and detailed analytics dashboard for business insights.',
      image: '/images/ecommerce.png',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      link: 'https://club29ratia.myshopify.com/',
      duration: '3 months',
      team: '4 members',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      category: 'Healthcare',
      description: 'Comprehensive patient management system with appointment scheduling, medical records, and telemedicine capabilities.',
      longDescription: 'A full-featured healthcare management system that streamlines patient care with appointment scheduling, electronic medical records, telemedicine video calls, prescription management, and secure patient data handling compliant with healthcare regulations.',
      image: '/images/healthcare.png',
      tech: ['React', 'TypeScript', 'Firebase', 'WebRTC', 'MongoDB'],
      link: '#',
      duration: '6 months',
      team: '6 members',
      status: 'Coming Soon'
    },
    {
      id: 3,
      title: 'Financial Analytics Dashboard',
      category: 'Fintech',
      description: 'Real-time financial dashboard with advanced charting, predictive analytics, and automated reporting features.',
      longDescription: 'An advanced financial analytics platform featuring real-time data visualization, predictive analytics using machine learning algorithms, automated report generation, portfolio management tools, and comprehensive financial metrics tracking.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tech: ['React', 'D3.js', 'Python', 'AWS', 'TensorFlow'],
      link: '#',
      github: '#',
      duration: '4 months',
      team: '5 members',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Social Media Platform',
      category: 'Web Development',
      description: 'Modern social networking platform with real-time messaging, content sharing, and advanced privacy controls.',
      longDescription: 'A modern social networking platform with real-time messaging using WebSocket technology, content sharing with image/video upload, advanced privacy controls, user authentication, friend connections, and news feed algorithms.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      tech: ['React', 'GraphQL', 'MongoDB', 'Socket.io', 'Redis'],
      link: '#',
      github: '#',
      duration: '5 months',
      team: '7 members',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Restaurant Management App',
      category: 'Mobile Apps',
      description: 'Complete restaurant management solution with ordering, inventory, and staff management.',
      longDescription: 'A comprehensive restaurant management application featuring order management, inventory tracking, staff scheduling, customer management, and real-time analytics for restaurant operations.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      tech: ['React Native', 'Node.js', 'MySQL', 'Firebase', 'Stripe'],
      link: '#',
      github: '#',
      duration: '4 months',
      team: '5 members',
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Learning Management System',
      category: 'Web Development',
      description: 'AI-powered educational platform with personalized learning paths and progress tracking.',
      longDescription: 'An intelligent learning management system with AI-powered content recommendations, personalized learning paths, progress tracking, interactive assessments, and comprehensive analytics for educators.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      tech: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'AWS'],
      link: '#',
      github: '#',
      duration: '6 months',
      team: '8 members',
      status: 'Completed'
    }
  ];

  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <CustomCursor />
      
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-hover"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </button>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">All Projects</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-hover ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm font-medium">{project.status}</span>
                      <div className="flex gap-2">
                        <Trophy className="w-4 h-4" />
                        <span className="text-sm">5.0 Rating</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Project Stats */}
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {project.team}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    onClick={e => {
                      e.preventDefault();
                      if (project.link === '#') {
                        navigate('/coming-soon');
                      } else {
                        window.open(project.link, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 cursor-hover flex items-center justify-center"
                    href={project.link}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
