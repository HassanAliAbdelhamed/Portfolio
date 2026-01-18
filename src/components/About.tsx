import React from 'react';
import sectionImage from "../images/sectionImg.jpg"

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
              Building Scalable Full-Stack Web & Mobile Applications
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                I'm Elassan Ali, a Full-Stack Developer who loves turning a blank terminal into a fully functional digital ecosystem. I started with a curiosity for how things look on the screen, which naturally evolved into a deep dive into how they work behind the scenes.              </p>
              <p>
                  Today, I build everything from sleek mobile apps to complex web platforms, focusing on the entire stack. Whether it's crafting a responsive UI or engineering a secure API, I prioritize performance and user experience at every step. I don’t just write code; I build tools that people use and enjoy.
              </p>
                
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;