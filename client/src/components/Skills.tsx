import React from 'react'
import { motion } from 'framer-motion'
import PythonBlock from './PythonBlock'
import CBlock from './CBlock'
import CppBlock from './CppBlock'
import JavaBlock from './JavaBlock'
import JsBlock from './JsBlock'
import ReactBlock from './ReactBlock'
import SQLBlock from './SQLBlock'
import TsBlock from './TsBlock'
import MongoBlock from './MongoBlock'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div className='flex relative flex-col text-center md:text-left
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[10px] text-white text-2xl'>
        Skills
        </h3>

        {/* <h3 className='absolute top-36 uppercase tracking-[3px] text-white text-sm'>
            Hover 
        </h3> */}

        <div className='grid grid-cols-4 gap-5'>
          <PythonBlock />
          <CBlock />
          <CppBlock />
          <JavaBlock />
          <JsBlock />
          <ReactBlock />
          <SQLBlock />
          <TsBlock />
          <MongoBlock />
        </div>
    </motion.div>
  )
}

export default Skills