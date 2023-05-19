import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const courseList = [
        { id: 1, name: "Embedded System Design" },
        { id: 2, name: "Digital Logic and Systems" },
        { id: 3, name: "Discrete Mathematics and Algorithms" },
        { id: 4, name: "Computer Organization and Design" },
        { id: 5, name: "Software Engineering" },
        { id: 6, name: "Data Structures" },
        { id: 7, name: "Embedded Systems" }

    ]

function Courses({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 
    justify-evenly mx-auto items-center">
            <h3 className='flex top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
             Courses
            </h3>
            <ul className=' flex flex-col gap-20 font-serif text-center text-2xl items-center mx-auto text-gray-500'>
                {courseList.map(course => (
                    <motion.li className='border-gray-700 rounded-2xl'
                        key={course.id}
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{once:true}}
                        transition={{ duration: 1 }}
                    >
                        {course.name}
                    </motion.li>
                ))}
            </ul>
        </div>
  )
}

export default Courses