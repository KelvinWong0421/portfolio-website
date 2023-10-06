import React from 'react'
import Image from 'next/image'
import openhub from '../image/openhub.png'

type Props = {}

export default function Projects({}: Props) {
  return (
    <div className='flex flex-col pt-20 pb-10 justify-center items-center max-w-7xl px-10 mx-auto mb-32'>
      <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl text-center mb-8 w-full mb-20'>
        Projects
      </h3>
      <Image className='relative mx-auto object-cover sm:w-64 sm:h-64 lg:h-auto lg:w-auto'
        src={openhub} alt='openhub' width={350} height={350}/>
    </div>
  )
}