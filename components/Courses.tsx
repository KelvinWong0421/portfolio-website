import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const courseList = [
    { id: 1, name: "Embedded System Design", skills: ["C++", "Microcontroller", "Tiva", "Embedded C"] },
    { id: 2, name: "Digital Logic and Systems", skills: ["Logic Gates", "Digital Circuits", "VHDL", "FPGA Design"] },
    { id: 3, name: "Discrete Mathematics and Algorithms", skills: ["Graph Theory", "Combinatorics", "Recursion" ] },
    { id: 4, name: "Computer Organization and Design", skills: ["Assembly Language", "CPU Architecture", "Memory Hierarchy", "Pipelining"] },
    { id: 5, name: "Software Engineering", skills: ["Software Lifecycle", "Agile Methodology", "UML Diagrams", "Version Control"] },
    { id: 6, name: "Data Structures", skills: ["Binary Trees", "Hash Tables", "Linked Lists", "Stacks and Queues", "Sorting Algorithms"] },
    { id: 8, name: "Energy Efficient Computing", skills: ["GEMM", "Direct Conv", "Pruning", "Decomposition", "Winograd", "Quantization", "BNN", "Sparse Conv", "KD", "CUDA", "NAS", "TVM"] },
    { id: 9, name: "Intro to Operating Systems", skills: ["Process Management","Memory Management","File Systems","Concurrency and Synchronization","Device Management","Security and Access Control","OS Kernel Design"] },
    {id: 10, name: "Intro to Database Systems", skills: ["Database Design","SQL Queries","Normalization","Transaction Management", "Concurrency Control","Database Recovery","Relational Algebra"] }
];




function Courses({}: Props) {
    return (
        <div className="flex flex-col pt-20 pb-10 justify-center items-center max-w-7xl px-10 mx-auto mb-32">
            <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl text-center mb-8 w-full mb-20'>
                Courses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {courseList.map(course => (
                    <motion.div 
                        key={course.id}
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{once:true}}
                        transition={{ duration: 1 }}
                        className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h4 className="text-xl font-bold mb-2">{course.name}</h4>
                        <div className="flex flex-wrap">
                        {course.skills.map((skill, index) => (
                            <span 
                                key={`${course.id}-${index}`} 
                                className="text-sm bg-teal-600 hover:bg-teal-700 transition-colors duration-300 font-medium text-white px-3 py-1 m-1 rounded-full cursor-pointer"
                            >
                                {skill}
                            </span>
                        ))}

                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}






      

export default Courses