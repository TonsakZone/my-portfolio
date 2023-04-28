import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    dirLeft?: boolean
}

function CBlock({ dirLeft }: Props) {
    return (
        <div className='group relative flex'>
            <motion.img
            initial={{
                x: dirLeft ? -200 : 200,
                opacity: 0
            }}
            transition={{
                duration: 1
            }}
            whileInView={{
                opacity:1,
                x:0
            }}
            src='https://vjumpkung.vercel.app/image/c.png'
            className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32
            xl:h-32' />
        </div>
    )
}

export default CBlock