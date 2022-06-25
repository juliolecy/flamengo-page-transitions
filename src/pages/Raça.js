import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main';
import Image from '../images/img-1.jpg'
import { motion } from 'framer-motion'
import {animationOne, transition} from '../animations/index'


const Raça = () => {
  return (
    <motion.div initial='out'
     animate='in' 
     exit='out'
      variants={animationOne}
      transition={transition}
      >
       <Header/>
       <Main 
       image={Image}
       Title={'O maior.'}
       Description={'Flamengo é o time com mais conquistas no século XXI. Ao todo são 21 conquistas.'}
       />
       
    </motion.div>
  )
}

export default Raça;