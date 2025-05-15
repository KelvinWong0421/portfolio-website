import { motion } from 'framer-motion'
import React from 'react'



type Props = {
    direction ?: boolean;
    url: string;
    name: string;
}

function Skill({direction, url, name}: Props) {
  return (
    <div className='group relative flex cursor-pointer '>

        <motion.img 
        initial={{
            x: direction ? 100:-100,
            opacity:0,
        }}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        src = {url}
        alt = {name}
        className='rounded-xl object-cover h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 
        filter group-hover:grayscale transition duration-500 ease-in-out ' 
        
        />
        
    </div>
  )
}

export default Skill