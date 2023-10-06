import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}


function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center '>
       <motion.div
        initial={{
          x:-500,
          opacity: 0,
          scale:0.5
        }}
        animate={{
          x:0,
          opacity:1,
          scale:1,
        }}
        transition={{
          duration:1.5,
        }}
        className='flex flex-row items-center'>
            {/*icon*/}
            <SocialIcon 
             url='https://github.com/KelvinWong0421/SomeOfMyWork'
             fgColor='gray'
             bgColor='transparent'
            />
            <SocialIcon 
             url='https://www.linkedin.com/in/wai-chun-wong-a13242200/'
             fgColor='gray'
             bgColor='transparent'
            />
            
        </motion.div>

        <motion.div 
        initial={{
          x:500,
          opacity: 0,
          scale:0.5
        }}
        animate={{
          x:0,
          opacity:1,
          scale:1,
        }}
        transition={{
          duration:1.5,
        }}
        
        className='flex flex-row items-center text-gray-500 cursor-pointer' >

            <SocialIcon 
             url='mailto:kelvinwong159357@gmail.com'
             fgColor='gray'
             bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'><a href='mailto:kelvinwong159357@gmail.com'>Contact Me</a></p>
        </motion.div>
    </header>
  )
}

export default Header