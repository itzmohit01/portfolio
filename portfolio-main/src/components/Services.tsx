import React from 'react';
import { Code, Settings, Image, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices for optimal performance and scalability.',
      features: ['React & TypeScript', 'Responsive Design', 'API Integration', 'Performance Optimization']
    },
    {
      icon: Settings,
      title: 'System Architecture',
      description: 'Scalable and robust system design that grows with your business needs while maintaining security and efficiency.',
      features: ['Cloud Infrastructure', 'Database Design', 'Microservices', 'DevOps Integration']
    },
    {
      icon: Image,
      title: 'UI/UX Design',
      description: 'User-centered design approach creating intuitive interfaces that enhance user experience and drive engagement.',
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 scroll-reveal" style={{opacity: 1}}>
      <div className="w-full px-2 sm:px-4 md:px-8">
        <div className="text-center mb-16 scroll-reveal" style={{opacity: 1}}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Services That Drive
            <span className="text-blue-600 dark:text-blue-400 block">Digital Transformation</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to your unique business needs, 
            from initial concept to successful deployment and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-2xl transition-all duration-200 hover:-translate-y-2 cursor-hover glare-hover scroll-reveal" style={{opacity: 1}}>
              <div className="bg-blue-600 dark:bg-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                    <Star className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-3 fill-current" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800 rounded-2xl p-12 text-white hover:shadow-2xl transition-all duration-200 scroll-reveal" style={{opacity: 1}}>
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your ideas into powerful digital solutions 
            that drive real business results.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105 cursor-hover"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
