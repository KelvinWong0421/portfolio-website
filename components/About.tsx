import React from 'react'
import { motion } from 'framer-motion'
import monkey from '../Image/monkey-technology.gif'
import Image from 'next/image'


type Props = {}


export default function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 
    justify-evenly mx-auto items-center'>
      <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.div 
        initial={{
          x:-200,
          opacity:0
        }}
        transition={{
          duration:1
        }}

        whileInView={{ x:0, opacity:1}}
        viewport={{once:true}}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-covenpmr md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      >
        <Image src={monkey} className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        alt="My Image"/>
      </motion.div>

      <div className='text-white leading-relaxed my-4 text-xl font-medium text-left md:px-10 '>
        <p className=' font-semibold'>
          I am currently a student at The Chinese University of Hong Kong (CUHK) studying Computer Engineering. 
          My program focuses on computer systems and software, and I have had the opportunity to participate in
          different projects and gain hands-on experience through internships. I am excited to continue my education
          and see where my passion for computer engineering takes me in the future.</p>
      </div>


    </div>
  )
}