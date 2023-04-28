import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    dirLeft?: boolean
}

function JsBlock({ dirLeft }: Props) {
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
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png'
            className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32
            xl:h-32' />
        </div>
    )
}

export default JsBlock