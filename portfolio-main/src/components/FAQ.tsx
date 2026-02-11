import React, { useEffect, useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const faqRefs = useRef([]);

  const faqs = [
    {
      question: "How can digital transformation help my business grow?",
      answer: "Digital transformation revolutionizes your business by streamlining operations, enhancing customer experiences, and opening new revenue streams. We help you leverage technology to automate processes, reach wider audiences, and stay competitive in today's digital marketplace."
    },
    {
      question: "What's the typical timeline for a web development project?",
      answer: "Most projects take 2-8 weeks depending on complexity. Simple websites can be ready in 2-3 weeks, while complex applications with custom features may take 6-8 weeks. We provide detailed timelines after understanding your specific requirements."
    },
    {
      question: "Do you provide ongoing support after the website launch?",
      answer: "Absolutely! We offer comprehensive post-launch support including regular updates, security monitoring, performance optimization, and technical assistance. Our goal is to ensure your digital presence continues to drive results long after launch."
    },
    {
      question: "How do you ensure my website will attract customers?",
      answer: "We combine stunning design with proven marketing strategies. This includes SEO optimization, mobile responsiveness, fast loading speeds, compelling content, and user-friendly navigation. Every element is crafted to convert visitors into customers."
    },
    {
      question: "Can you help migrate my existing business online?",
      answer: "Yes! We specialize in helping traditional businesses establish their digital presence. From creating your first website to setting up e-commerce solutions, we guide you through every step of going online and reaching new customers."
    },
    {
      question: "What makes your development approach different?",
      answer: "We focus on understanding your business goals first, then craft technology solutions that drive real results. Our approach combines cutting-edge development with business strategy, ensuring your investment delivers measurable growth and customer satisfaction."
    }
  ];

  useEffect(() => {
    const observers = faqRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/10 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="w-full px-2 sm:px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked
            <span className="text-blue-600 dark:text-blue-400 block">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about digital transformation and web development
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={el => faqRefs.current[index] = el}
              className={`border border-gray-200 dark:border-gray-700 rounded-2xl p-6 transition-all duration-700 cursor-pointer hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-500 ${
                visibleItems.has(index) 
                  ? 'text-gray-900 dark:text-white shadow-lg' 
                  : 'text-gray-400 dark:text-gray-600'
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="w-full flex items-center justify-between">
                <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                )}
              </div>
              
              {openIndex === index && (
                <div className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-6">
              Let's discuss your project and answer any questions you may have.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 cursor-hover"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
