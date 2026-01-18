import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaSass, FaReacteurope, FaBootstrap } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMui, SiStyledcomponents, SiFigma } from 'react-icons/si';
import { TbBrandCSharp, TbFileTypeSql } from "react-icons/tb";


const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'React', icon: <FaReact className="text-blue-500" /> },
        { name: 'React Native', icon: <FaReacteurope className="text-black dark:text-white" /> },
      ],
    },
    {
      title: 'Backend Technologies',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'C#', icon: <TbBrandCSharp className="text-cyan-500" /> },
        { name: 'SQL', icon: <TbFileTypeSql className="text-purple-500" /> },
        { name: 'ADO.NET' },
        { name: 'Entity Framework Core' },
        { name: 'ASP.NET Core MVC' },
        { name: 'ASP.NET Core Web Api '},
        { name: 'Signal R'},
      ],
    },
     {
      title: 'UI/UX & Styling',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Bootstrap', icon: <FaBootstrap className="text-cyan-500" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: 'Material UI', icon: <SiMui className="text-blue-500" /> },
        { name: 'Styled Components', icon: <SiStyledcomponents className="text-pink-400" /> },
        { name: 'Sass/SCSS', icon: <FaSass className="text-pink-500" /> },
        { name: 'Figma', icon: <SiFigma className="text-purple-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 py-4">
          {skillCategories.map((category, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-8">
                <div className={`inline-block bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                  {category.title}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-6 py-4">
                {category.skills.map((skill, j) => (
                  <div key={j} className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm hover:scale-105 transition-all">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-base font-medium text-gray-900 dark:text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
