import React from 'react'
import {motion} from 'framer-motion'
import { Typography } from '@mui/material'
import colorstheme from  '../data/theme.js'

 const FaqsMotion = ({move,children,duration}) => {


    const colors=colorstheme;

  return (
    <motion.div sx={{width:'67%'}}
    initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={duration}
        variants={move}>
    {children}
</motion.div>  )
}


export default FaqsMotion;