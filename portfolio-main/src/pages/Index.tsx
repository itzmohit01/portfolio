import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import NameBanner from '../components/NameBanner';
import Loader from '../components/Loader';
import CustomCursor from '../components/CustomCursor';
import DarkModeToggle from '../components/DarkModeToggle';
import FAQ from '../components/FAQ';
import UserReviews from '../components/UserReviews';
import TextEffectSection from '../components/TextEffectSection';
import Footer from '../components/Footer';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <CustomCursor />
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Reviews />
      <Services />
      <FAQ />
      <TextEffectSection />
      <UserReviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
