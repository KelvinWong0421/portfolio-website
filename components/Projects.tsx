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
      <div className='w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto'>
        <Image 
          src={openhub} 
          alt='OpenHub Project'
          width={350}
          height={350}
          layout="responsive"
          objectFit="cover"
          className='rounded-lg shadow-lg'
        />
      </div>
    </div>
  )
}