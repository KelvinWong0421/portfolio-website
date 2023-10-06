import { dir } from 'console'
import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'

const skillList=[
    {id:1,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'},
    {id:2,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'},  
    {id:3,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'},  
    {id:4,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},  
    {id:5,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'},  
    {id:6,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg'},
    {id:7,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'},  
    {id:8,url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
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
    className='flex flex-col pt-20 pb-10 justify-center items-center max-w-7xl px-10 mx-auto mb-32'>                                                                  
      <h3 className=' uppercase tracking-[20px] text-gray-500 text-2xl text-center mb-8 w-full mb-20'>
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