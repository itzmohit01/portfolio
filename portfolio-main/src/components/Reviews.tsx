import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO, TechIndia Solutions',
      company: 'TechIndia Solutions',
      rating: 5,
      review: 'Bahut hi achha kaam kiya hai! Project time pe deliver hua aur quality bhi outstanding thi. Highly recommended for any web development work.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      language: 'Hindi'
    },
    {
      name: 'Priya Sharma',
      position: 'Founder, StartupDelhi',
      company: 'StartupDelhi',
      rating: 5,
      review: 'Exceptional work quality and professional communication. The project was delivered on time and exceeded our expectations. Very satisfied with the results!',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      language: 'English'
    },
    {
      name: 'Vikram Reddy',
      position: 'Managing Director',
      company: 'Hyderabad Digital',
      rating: 5,
      review: 'Professional, reliable, and incredibly talented developer. Delivered a high-quality solution that transformed our digital presence completely.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      language: 'English'
    },
  ];

  const getLanguageFlag = (language: string) => {
    switch (language) {
      case 'Hindi': return '🇮🇳';
      case 'Punjabi': return '🏛️';
      case 'English': return '🇬🇧';
      default: return '🇮🇳';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="w-full px-2 sm:px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Clients
            <span className="text-blue-600 dark:text-blue-400 block animate-pulse">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied Indian clients have to say about our work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-500 hover:-translate-y-2 animate-fade-in group hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 cursor-hover animate-review-float"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-16 h-16 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300 hover:shadow-lg border-4 border-blue-200 dark:border-blue-700"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{review.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">{review.position}</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">{review.company}</p>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full mt-1 inline-block group-hover:bg-blue-100 dark:group-hover:bg-blue-800 transition-colors">
                    {getLanguageFlag(review.language)} {review.language}
                  </span>
                </div>
              </div>
              
              <div className="flex mb-4 items-center gap-2">
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold text-xs shadow-md animate-bounce-slow">
                  {review.rating} / 5
                </span>
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"></span>
                <span className="text-xs text-blue-400 dark:text-blue-300 animate-fade-in">Verified</span>
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-blue-200 dark:text-blue-600 absolute -top-2 -left-2 group-hover:text-blue-300 dark:group-hover:text-blue-500 transition-colors animate-spin-slow" />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic pl-6 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors animate-fade-in">
                  "{review.review}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800 rounded-2xl p-8 text-white animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Join Our Happy Clients</h3>
            <p className="text-blue-100 mb-6">
              Ready to start your project? Let's create something amazing together.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 cursor-hover"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
