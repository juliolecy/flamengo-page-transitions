import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Image from '../images/img-2.jpg'
import {motion} from 'framer-motion'
import { animationThree, transition } from '../animations';

const Paixao = () => {
  return (
    <motion.div initial='out'
    animate='end' 
    exit='out'
     variants={animationThree}
     
     >
       <Header/>
       <Main image={Image}
        Title={'Paixão inigualável.'}
        Description={'O time estabeleceu um total de 194 milhões de pessoas no Maracanã, numa partida contra o Fluminense para o campeonato carioca de 1963. Feito maior só foi realizado pela seleção brasileira. '}
        />
          
    </motion.div>
  )
}

export default Paixao