import React from 'react';
import sectionImage from "../sectionImg.jpg"

const About: React.FC = () => {


  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src={sectionImage}
                alt="About Me"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:mx-0"
              />
              
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Building Modern Web & Mobile Interfaces
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                I'm Elassan Ali, a dedicated Front-End Developer with a strong passion for creating clean, interactive, and responsive user interfaces. I specialize in React for web development and React Native for building cross-platform mobile applications. My journey into development started from a curiosity to build things people can actually use — and it quickly grew into a full-time craft.
              </p>
              
              <p>
                  I turn ideas into functional and beautiful digital products. Whether it's a sleek website, a mobile app, or a complete UI system, I focus on performance, user experience, and maintainable code. I enjoy solving real-world problems through smart design and modern tools.
                  I’m always exploring new technologies and love collaborating with teams to bring creative visions to life.
              </p>
                
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;