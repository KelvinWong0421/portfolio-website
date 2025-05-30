import React from 'react';
import { motion } from 'framer-motion';
import pic from '../image/about.jpg';
import Image from 'next/image';

type Props = {};

export default function About({}: Props) {
  return (
    <div className='flex flex-col pt-20 pb-10 justify-center items-center max-w-7xl px-10 mx-auto mb-32'>
      <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl text-center mb-8 w-full mb-20'>
        About Me
      </h3>

      <motion.div 
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className='flex-shrink-0 flex-wrap mb-10'
      >
        <Image src={pic} className='mb-20 md:mb-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[400px]' alt="About Image"/>
      </motion.div>

      <div className=' text-white leading-relaxed my-4 text-xl font-medium text-left md:px-10 mb-20 '>
        <p className='font-semibold'>
        Hello! I&apos;m a Computer Engineering student at <strong>The Chinese University of Hong Kong (CUHK)</strong>. 
          My academic journey has been deeply rooted in exploring the intricacies of computer systems and software. 
          Over the years, I&apos;ve been fortunate to immerse myself in various projects and internships, each offering a unique learning experience. 
          As I continue my educational voyage, I&apos;m eager to harness my passion and see the innovative avenues it leads me to in the world of computer engineering.
        </p>
      </div>
    </div>
  );
}

