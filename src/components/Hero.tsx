import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import profileImg from '../images/ProfileImage1.jpg'
const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium">
                <MapPin className="w-4 h-4 mr-2" />
                Available for work
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Elhassan</span>
              </h1>
              
              <h2 className="text-2xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-300">
                .NET Full Stack Developer
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                 Highly effective and results driven Full Stack .NET Developer with comprehensive expertise spanning the entire software development lifecycle. Deeply proficient in C#, .NET Core, and gmodern frontend technologies React or Angular.
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {['React', 'React Native', 'C#', 'SQL', 'ASP.NET MVC', 'Entity Framework Core','ASP.NET Web API'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 font-semibold">
                <Download className="w-5 h-5" />
                <a href="https://drive.google.com/file/d/1HlBvk0mJRwez4b8NbnyzI4nUFE494_6C/view" target='_blank'>Download CV</a>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 justify-center lg:justify-start">
              {[
                { icon: Github, href: 'https://github.com/HassanAliAbdelhamed', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/elhassan-ali', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:hassanaliabdelhamed6.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 text-gray-600 dark:text-gray-400 hover:scale-110"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Glowing Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-glow opacity-75"></div>
              
              {/* Profile Image */}
              <div className="absolute inset-2 rounded-full overflow-hidden bg-white dark:bg-gray-800">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
        
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;