
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showProjectText, setShowProjectText] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      setIsHovering(true);
      
      // Check if hovering over project cards
      if (target.closest('.project-card') || target.closest('[data-project-card]')) {
        setShowProjectText(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setShowProjectText(false);
    };

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .cursor-hover, .project-card, [data-project-card]');
    
    const addListeners = () => {
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    const removeListeners = () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };

    addListeners();
    window.addEventListener('mousemove', updatePosition);

    // Re-add listeners when DOM changes
    const observer = new MutationObserver(() => {
      removeListeners();
      const newElements = document.querySelectorAll('button, a, .cursor-hover, .project-card, [data-project-card]');
      newElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      removeListeners();
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-200 ease-out"
        style={{
          left: position.x - 10,
          top: position.y - 10,
          transform: `scale(${isHovering ? 2 : 1})`
        }}
      >
        <div className="w-5 h-5 bg-white rounded-full"></div>
      </div>

      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[9998] opacity-50 transition-transform duration-300 ease-out"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          transform: `scale(${isHovering ? 1.5 : 1})`
        }}
      >
        <div className="w-10 h-10 border-2 border-blue-400 dark:border-blue-300 rounded-full"></div>
      </div>

      {/* Project hover text - moved to cursor area */}
      {showProjectText && (
        <div
          className="fixed pointer-events-none z-[9997] text-white bg-black/80 px-3 py-1 rounded-lg text-sm font-medium transition-opacity duration-200"
          style={{
            left: position.x + 20,
            top: position.y + 20
          }}
        >
          View this project
        </div>
      )}
    </>
  );
};

export default CustomCursor;
