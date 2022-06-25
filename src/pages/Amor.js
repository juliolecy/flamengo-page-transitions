import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main';
import Image from '../images/img-3.jpg'
import {motion} from 'framer-motion'
import { animationTwo, transition } from '../animations';

const Amor = () => {
  return (
    <motion.div 
    initial='out'
    animate='in' 
    exit='out'
     variants={animationTwo}
   
     >
       <Header/>
       <Main image={Image}
       Title={'O mais amado.'}
       Description={'O time lidera o ranking com 32,5 milhões de torcedores. 16,5% do Brasil é flamenguista.'}
       />
      
    </motion.div>
  )
}

export default Amor;