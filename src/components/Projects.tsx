import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';
import qw from '../qw.jpg';
import qm from '../qm.jpg';
import serviov from '../serviov.jpg';
import burger from '../burger.jpg';
import sonny from '../sonny.jpg';
import { Javascript } from '@mui/icons-material';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: '+ قرآن',
      description: 'Quran+ is an online platform dedicated to serving the Holy Quran through a seamless and spiritual experience for users worldwide. The platform offers a range of features that allow you to listen to the Qur’an recited by a distinguished group of sheikhs, read and reflect upon its meanings, and engage in daily recitations at your own pace.',
      image: qw,
      technologies: ['React', 'Bootstrap','Materail UI'],
      category: 'Web',
      liveUrl: 'https://quranplus.vercel.app/',
      githubUrl: 'https://github.com/example',
      featured: true,
    },
    {
      id: 2,
      title: '+ قرآن',
      description: 'Quran Light is a powerful mobile app designed to help Muslims around the world connect to the Holy Quran wherever they are. If you want to listen to your favorite reciter, Quran Light is your perfect companion.',
      image: qm,
      technologies: ['React Native', 'Javascript', 'Nativewind'],
      category: 'Mobile',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.hassanali2.quranplus&pcampaignid=web_share&pli=1',
      // githubUrl: 'https://github.com/example',
      featured: true,
    },
    {
      id: 3,
      title: 'The Survivor',
      description: 'A blog that tells true stories whose heroes are Palestinian children and infants in Gaza. Israeli aircraft missiles killed their families while they were safe and asleep, turning them into a lone survivor who witnessed the episodes of the crime.',
      image: serviov,
      technologies: ["Javascript",'Bootstrap', "React"],
      category: 'Web',
      liveUrl: 'https://survivor-7d697.web.app/',
      // githubUrl: 'https://github.com/example',
      featured: false,
    },
    {
      id: 4,
      title: 'Make Your Burger',
      description: 'A platform that allows you to build your own burger step by step, selecting the type of bread, meat, cheese, vegetables, and sauces to suit your taste.',
      image: burger,
      technologies: ["Javascript",'Bootstrap', "React"],
      category: 'Web',
      liveUrl: 'https://hassanaliabdelhamed.github.io/Burger/',
      githubUrl: 'https://github.com/HassanAliAbdelhamed/Burger',
      featured: false,
    },
    {
      id: 5,
      title: 'Sonny Landing Page',
      description: 'A modern, responsive landing page, smooth animations, and optimized performance built with Bootstrap and wow.js.',
      image: sonny,
      technologies: ['HTML', 'CSS', 'Bootsrap', 'WOW.JS'],
      category: 'Web',
      liveUrl: 'https://hassanaliabdelhamed.github.io/Sony/',
      githubUrl: 'https://github.com/HassanAliAbdelhamed/sony',
      featured: false,
    },
  ];

  const categories = ['All', 'Web', 'Mobile'];
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and experience
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 card-hover ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm font-medium text-primary-500 dark:text-primary-400">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 text-center flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-500 dark:hover:text-primary-400 font-semibold py-2 px-4 rounded-xl transition-all duration-300 text-center flex items-center justify-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;