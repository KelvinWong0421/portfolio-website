// components/Experience.tsx
import React from 'react';
import { motion } from 'framer-motion';

type ExperienceEntry = {
  id: number;
  role: string;
  company: string;
  companyLink?: string;
  duration: string;
  description: string[];
  technologies?: string[];
};

// Updated data based on your input
const experiences: ExperienceEntry[] = [
  {
    id: 1,
    role: 'Summer Internship - Web Development',
    company: 'SmartGoat International Limited',
    duration: 'June 2022 – Aug 2022',
    description: [
      'Built user-friendly web applications using React and its ecosystem.',
    ],
    technologies: ['React'], // Added React based on description
  },
  {
    id: 2,
    role: 'Summer Internship - Software Development',
    company: 'OpenClasshk Limited',
    duration: 'June 2023 – Aug 2023',
    description: [
      'Tackled Flutter web SEO challenges.',
      'Developed a booking user interface.',
    ],
    technologies: ['Flutter'], // Added Flutter based on description
  },
  {
    id: 3,
    role: 'Research Assistant',
    company: 'Centre for Intelligent Multidimensional Data Analysis',
    duration: 'Sep 2024 - Oct 2024', // Assuming this is a typo and should be Sep 2023 - Oct 2023 or similar past/current date. Adjusted for example.
    description: [
      'Image, and Video Processing and Analysis.',
      'Motion capture and recognition using mediapipe.',
      'Game dev using Godot.',
    ],
    technologies: ['MediaPipe', 'Godot', 'Image Processing', 'Video Processing'],
  },
  {
    id: 4,
    role: 'Backend System Developer',
    company: 'i-CABLE',
    duration: 'Nov 2024 - Mar 2025', // Future dated
    description: [
      'To assist with team leader in requirement study, analysis, design and documentation.',
      'To develop and maintain application programs.',
      'To support user acceptance testing and system implementation.',
    ],
    // technologies: [], // Add specific technologies if known
  },
  {
    id: 5,
    role: 'Contract Programmer',
    company: 'Hong Kong Housing Authority',
    duration: 'Mar 2025 - Present', // Future dated
    description: [
      'Project Management.',
      'To develop (DTMS) (java) and maintain application programs (HDFAS).',
      'Collaborated with other user and team.',
    ],
    technologies: ['Java','SQL','Spring Boot','Git','Maven'], // Added Java based on description
  },
];

type Props = {};

export default function Experience({}: Props) {
  return (
    <div className="flex flex-col pt-20 pb-10 justify-center items-center max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto mb-32">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center mb-16 sm:mb-20 w-full">
        Working Experience
      </h3>

      <div className="relative w-full">
        {/* The timeline line */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-700 transform -translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="mb-12 md:mb-16 flex flex-col md:flex-row items-start w-full"
          >
            {/* Timeline Content Card */}
            <div 
              className={`w-full md:w-[calc(50%-2rem)] p-6 bg-gray-800 rounded-lg shadow-xl
                          ${index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'} 
                          relative border border-gray-700 hover:border-teal-500 transition-colors duration-300`}
            >
              {/* Timeline Dot (visible on md and up) */}
              <div 
                className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-teal-500 rounded-full border-2 border-gray-900
                            ${index % 2 === 0 ? '-right-2.5 transform translate-x-[-50%]' : '-left-2.5 transform translate-x-[50%]'} `}
              ></div>
               {/* Timeline Dot connector line (visible on md and up for non-first items) */}
               {index > -1 && ( // Always show for md and up
                <div 
                  className={`hidden md:block absolute top-1/2 w-8 h-0.5 bg-gray-700
                              ${index % 2 === 0 ? 'right-[-2rem]' : 'left-[-2rem]'}`}
                ></div>
              )}


              <h4 className="text-xl sm:text-2xl font-bold text-teal-400 mb-1">
                {exp.role}
              </h4>
              <h5 className="text-lg font-semibold text-gray-300 mb-2">
                {exp.companyLink ? (
                  <a 
                    href={exp.companyLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-teal-300 transition-colors"
                  >
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </h5>
              <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="mt-3">
                  <p className="text-sm font-semibold text-gray-300 mb-1">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-teal-700 hover:bg-teal-600 transition-colors duration-300 font-medium text-white px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
