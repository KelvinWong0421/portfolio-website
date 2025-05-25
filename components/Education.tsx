// components/Education.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'; // Assuming you have heroicons

type Course = {
  code: string;
  title: string;
  units: string;
  // grade: string; // Grade removed
};

type Term = {
  name: string;
  courses: Course[];
  unitsPassed: string; // Still here if needed internally, but won't display in header
  termGPA: string; // Still here if needed internally, but won't display in header
};

type EducationDetails = {
  degree: string;
  major: string;
  university: string;
  graduationDate: string;
  terms: Term[];
};

// Parsed education data (as structured in Step 1)
const educationData: EducationDetails = {
  degree: "Bachelor of Engineering",
  major: "Computer Engineering",
  university: "The Chinese University of Hong Kong (CUHK)",
  graduationDate: "2021 - 2024",
  terms: [
    {
      name: "2021-22 Term 1",
      courses: [
        { code: "ENGG1110", title: "Problem Solving By Programming", units: "3.0" },
        { code: "GENA1000", title: "College Biweekly Assembly", units: "0.0" },
        { code: "GENA1112", title: "Aspects of General Education", units: "2.0" },
        { code: "MATH1020", title: "General Mathematics", units: "3.0" },
        { code: "MATH1510", title: "Calculus for Engineers", units: "3.0" },
        { code: "PHED1043", title: "Table Tennis (Men)", units: "1.0" },
        { code: "PHYS1003", title: "General Physics for Engineers", units: "3.0" },
        { code: "UGFH1000", title: "In Dialogue with Humanity", units: "3.0" },
      ],
      unitsPassed: "18.0",
      termGPA: "2.878",
    },
    {
      name: "2021-22 Term 2",
      courses: [
        { code: "CSCI1040", title: "Hands-on Introduction to Python", units: "1.0" },
        { code: "ENGG1120", title: "Linear Algebra for Engineers", units: "3.0" },
        { code: "ENGG1130", title: "Multivariable Calculus for Engineers", units: "3.0" },
        { code: "ENGG1910", title: "Demystifying Artificial Intelligence", units: "3.0" },
        { code: "GENA1000", title: "College Biweekly Assembly", units: "0.0" },
        { code: "GENA1113", title: "Student-oriented Teaching and Seminar", units: "2.0" },
        { code: "UGEA2160", title: "Mainstream Chinese Philosophical Thought", units: "3.0" },
      ],
      unitsPassed: "15.0",
      termGPA: "2.640",
    },
    {
      name: "2022-23 Term 1",
      courses: [
        { code: "CENG2010", title: "Digital Logic Design Laboratory", units: "1.0" },
        { code: "CSCI1120", title: "Introduction to Computing Using C++", units: "3.0" },
        { code: "ELEG2202", title: "Fundamentals of Electric Circuits", units: "3.0" },
        { code: "ENGG2020", title: "Digital Logic and Systems", units: "3.0" },
        { code: "ENGG2720", title: "Complex Variables for Engineers", units: "2.0" },
        { code: "ENGG2760", title: "Probability for Engineers", units: "2.0" },
        { code: "GENA1000", title: "College Biweekly Assembly", units: "0.0" },
        { code: "GENA2212", title: "Debates in Human Values", units: "2.0" },
      ],
      unitsPassed: "16.0",
      termGPA: "2.788",
    },
    {
      name: "2022-23 Term 2",
      courses: [
        { code: "CENG2030", title: "Fundamentals of Embedded Systems", units: "3.0" },
        { code: "CENG3420", title: "Computer Organization and Design", units: "3.0" },
        { code: "CSCI2100", title: "Data Structures", units: "3.0" },
        { code: "CSCI3100", title: "Software Engineering", units: "3.0" },
        { code: "ELTU3014", title: "English for Engineering Students II", units: "2.0" },
        { code: "ENGG2740", title: "Differential Equations for Engineers", units: "2.0" },
        { code: "ENGG2780", title: "Statistics for Engineers", units: "2.0" },
        { code: "GENA1000", title: "College Biweekly Assembly", units: "0.0" },
      ],
      unitsPassed: "18.0",
      termGPA: "2.356",
    },
    {
      name: "2023-24 Term 1",
      courses: [
        { code: "CENG2400", title: "Embedded System Design", units: "3.0" },
        { code: "CENG4998", title: "Final Year Project I", units: "3.0" },
        { code: "CENG5030", title: "Energy Efficient Computing", units: "3.0" },
        { code: "CSCI3150", title: "Introduction to Operating Systems", units: "3.0" },
        { code: "CSCI3170", title: "Introduction to Database Systems", units: "3.0" },
        { code: "CSCI3190", title: "Introduction to Discrete Mathematics & Algorithms", units: "3.0" },
        { code: "GENA1000", title: "College Biweekly Assembly", units: "0.0" },
      ],
      unitsPassed: "18.0",
      termGPA: "2.883",
    },
    {
      name: "2023-24 Term 2",
      courses: [
        { code: "CENG3430", title: "Rapid Prototyping of Digital Systems", units: "3.0" },
        { code: "CENG4120", title: "Computer-aided Design for VLSI Circuits", units: "3.0" },
        { code: "CENG4999", title: "Final Year Project II", units: "3.0" },
        { code: "CSCI3250", title: "Computers and Society", units: "2.0" },
        { code: "CSCI3251", title: "Engineering Practicum", units: "1.0" },
        { code: "CSCI3290", title: "Computational Imaging and Vision", units: "3.0" },
        { code: "GENA1000", title: "College Biweekly Assembly", units: "0.0" },
      ],
      unitsPassed: "15.0",
      termGPA: "2.850",
    },
  ],
};

type Props = {};

const TermItem: React.FC<{ term: Term }> = ({ term }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="mb-6 p-4 bg-gray-800 rounded-2xl shadow-lg border border-gray-700" // Increased rounded
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg sm:text-xl font-semibold text-teal-400 hover:text-teal-300 transition-colors py-2"
      >
        {term.name}
        <div className='flex items-center'>
            {/* <span className='text-sm text-gray-400 mr-4'>{`GPA: ${term.termGPA} | Units: ${term.unitsPassed}`}</span> Removed GPA and Units */}
            {isOpen ? <ChevronUpIcon className="h-6 w-6" /> : <ChevronDownIcon className="h-6 w-6" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-3 border-t border-gray-700">
              <div className="grid grid-cols-12 gap-x-4 text-xs font-semibold text-gray-400 mb-2 px-2">
                <div className="col-span-3 sm:col-span-2">Code</div>
                <div className="col-span-7 sm:col-span-8">Title</div> {/* Adjusted col-span */}
                <div className="col-span-2 text-center">Units</div> {/* Adjusted col-span and text-align */}
                {/* <div className="col-span-2 sm:col-span-1 text-center">Grade</div> Removed Grade Header */}
              </div>
              <ul className="space-y-1 text-sm">
                {term.courses.map((course, index) => (
                  <li key={index} className="grid grid-cols-12 gap-x-4 items-center py-1.5 px-2 rounded hover:bg-gray-700/50 transition-colors">
                    <span className="col-span-3 sm:col-span-2 text-gray-300">{course.code}</span>
                    <span className="col-span-7 sm:col-span-8 text-gray-400">{course.title}</span> {/* Adjusted col-span */}
                    <span className="col-span-2 text-center text-gray-400">{course.units}</span> {/* Adjusted col-span */}
                    {/* <span className="col-span-2 sm:col-span-1 text-center text-gray-300 font-medium">{course.grade}</span> Removed Grade */}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Education({}: Props) {
  const { degree, major, university, graduationDate, terms } = educationData;

  return (
    <div className="flex flex-col pt-20 pb-10 justify-center items-center max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto mb-32">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center mb-12 sm:mb-16 w-full">
        Education
      </h3>

      <motion.div 
        className="w-full text-center mb-12 bg-gray-800/50 p-6 rounded-2xl shadow-xl border border-gray-700" // Increased rounded
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="text-2xl sm:text-3xl font-bold text-teal-400">{degree} in {major}</h4>
        <p className="text-lg sm:text-xl text-gray-300 mt-1">{university}</p>
        <p className="text-md text-gray-400 mt-1">{graduationDate}</p>
      </motion.div>

      <div className="w-full">
        {terms.map((term) => (
          <TermItem key={term.name} term={term} />
        ))}
      </div>
    </div>
  );
}