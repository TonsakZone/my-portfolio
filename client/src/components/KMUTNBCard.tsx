import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function KMUTNBCard({}: Props) {
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
        src='https://www.eng.kmutnb.ac.th/wp-content/uploads/2019/08/LOGO-KMUTNB--300x300.png'
        alt='' />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>UNIVERSITY</h4>
            <p className='font-bold text-2xl mt-1'>King Mongkuts University of Teachnology North Bangkok</p>
            {/* <div className='flex space-x-2 my-2'>
                <img 
                className='h-10 w-10 rounded-full'
                src=''
                />
            </div> */}
            <p className='uppercase py-5 text-white text-md'>
                Since 2020 - Present
            </p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Year 1: Studied Python, C</li>
                <li>Year 2: Studied C++, Java, React, Javascript</li>
                <li>Year 3: Studied SQL, C++</li>
            </ul>
        </div>
    </article>
  )
}

export default KMUTNBCard