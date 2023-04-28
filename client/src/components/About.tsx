import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import axios from 'axios';

type Props = {}

function About({}: Props) {
    const [message, setMessage] = useState<string>('');
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        // axios.get('http://localhost:8080/message?id=3')
        //   .then(response => {
        //     setMessage(response.data);
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
        axios.get('http://103.2.115.18:8080/about')
        .then(response => {
          setData(response.data);
          console.log(data);
          
        })
        .catch(error => {
          console.error(error);
        });
      }, []);
  return (
    <motion.div 
    initial= {{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1.5
    }}
    className='h-screen flex flex-col relative text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[10px] text-white text-2xl'>About</h3>
        <motion.img
        initial={{
            x: -200,
            opacity: 0
        }}
        transition={{
            duration: 1.2
        }}
        whileInView={{
            opacity: 1,
            x: 0
        }}
        viewport={{
            once: true
        }} 
        src="https://drive.google.com/uc?export=view&id=1n_wj7n0UVppCaVle3TZEXzUrw8EdAH0G"
        alt='profile'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'/>

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a {" "} <span className='underline decoration-[#7F5539]/50'> little</span>{" "} background
            </h4>
            <p className='text-lg'>
                {/* Hello, my name is Supphakorn Innuphat. You can call me Tonsak. I'm studying in faculty of applied science, major in computer science at King Mongkut's University of Technology North Bangkok. */}
                {data[0]}
                <br/>
                <br/>
                {/* Age: 21 */}
                {data[1]}
                <br/>
                {/* Birthdate: March 14, 2002 */}
                {data[2]}
                <br/>
                {/* Hobbies: Play game, play piano */}
                {data[3]}
                <br/>
                {data[4]}
            </p>
        </div>
    </motion.div>
  )
}

export default About