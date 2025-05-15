import { dir } from 'console'
import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'

const skillList=[
    {id:1, name: 'C', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'},
    {id:2, name: 'C++', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'},  
    {id:3, name: 'CSS3', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'},  
    {id:4, name: 'JavaScript', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},  
    {id:5, name: 'HTML5', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'},  
    {id:6, name: 'Next.js', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg'},
    {id:7, name: 'Node.js', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'},  
    {id:8, name: 'TypeScript', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
    {id:9, name: 'React', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',dir:true},
    {id:10, name: 'Tailwind CSS', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg',dir:true},
    {id:11, name: 'Java', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg',dir:true},
    {id:12, name: 'Python', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg',dir:true},
    {id:13, name: 'Docker', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg',dir:true},
    {id:14, name: 'Flutter', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',dir:true},
    {id:15, name: 'Dart', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original-wordmark.svg',dir:true},
    {id:16, name: 'Firebase', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg',dir:true},
]


type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1.5}} 
    className='flex flex-col pt-20 pb-10 justify-center items-center max-w-7xl px-10 mx-auto mb-32'>                                                                  
      <h3 className=' uppercase tracking-[20px] text-gray-500 text-2xl text-center mb-8 w-full mb-20'>
        Skills
      </h3>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
        {skillList.map(skill =>(
          <Skill key={skill.id} url={skill.url} name={skill.name} direction={skill.dir}/>
        ))}

        
      </div>
    </motion.div>
  )
}

export default Skills