import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function DCMCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#ddb892] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y: -100,
            opacity: 0
        }}
        transition={{
            duration: 1.5
        }}
        whileInView={{
            opacity: 1,
            y: 0
        }}
        viewport={{
            once: true
        }} 
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] 
        object-cover object-center'
        src='https://drive.google.com/uc?export=view&id=19_49rlOCoXAp0L9SmpQ7kP44UfA_sOuo'
        alt='' />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>DCM image viewer</h4>
            <p className='font-bold text-2xl mt-1'>Year: 2/2564</p>
            <div className='flex space-x-2 my-2'>
                <img 
                className='h-10 w-10 rounded-full'
                src='https://cdn.worldvectorlogo.com/logos/react-1.svg'
                />
            </div>
            {/* <p className='uppercase py-5 text-white text-md'>
                Since ... - ...
            </p> */}
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Use React, Express, Node, Flask</li>
                <li>View .dcm images</li>
                <li>View data from .csv file</li>
                <li>100GB images total</li>
            </ul>
        </div>
    </article>
  )
}

export default DCMCard