import { dir } from 'console'
import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'

const skillList=[
    {id:1,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',dir:false},
    {id:2,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',dir:false},  
    {id:3,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',dir:false},  
    {id:4,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',dir:false},  
    {id:5,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',dir:false},  
    {id:6,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',dir:false},
    {id:7,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',dir:false},
    {id:8,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',dir:false},
    {id:9,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',dir:true},
    {id:10,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg',dir:true},
    {id:11,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg',dir:true},
    {id:12,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg',dir:true},
    

]


type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1.5}} 
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 
    justify-evenly mx-auto items-center'>                                                                  
      <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <div className='grid grid-cols-4 gap-5'>
        {skillList.map(skill =>(
          <Skill key={skill.id} url={skill.url} direction={skill.dir}/>
        ))}

        
      </div>
    </motion.div>
  )
}

export default Skills