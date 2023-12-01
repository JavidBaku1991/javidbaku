import React from 'react'
import Logo from '../images/jb.png'
import { Box, Divider, Typography, colors } from '@mui/material'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import HomeIcon from '@mui/icons-material/Home';
import { motion } from "framer-motion";
import FaqsMotion from '../pages/FaqsMotion';

 const Footer = () => {
  return (
<footer  className='footer-container' >
    <Box className='footer'>
        <Box className='footer-up'>
                  <FaqsMotion sx={{width:'33%'}}
            duration={{ duration: 0.5 }}
            move={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }} >
        <img  src={Logo} className='footer-logo' alt='image'/>
        <Box sx={{display:'flex',flexDirection:'column'}} className='footer-info-container'>      
              <h3 className='footer-info'><PhoneAndroidIcon  className='footer-icon' />+(994)70-920-97-47 </h3>
              <h3 className='footer-info'>  <MarkEmailReadIcon className='footer-icon'/>  cavid-de-baku91@mail.ru </h3>
              <h3 className='footer-info'>  <HomeIcon className='footer-icon'/> Bakı şəhəri, Nərimanov rayonu,  </h3>
              <h3 className='footer-info'>   Faiq Yusifov küçəsi 172A  </h3>
        </Box>
 </FaqsMotion>
   </Box>
 
    <motion.div className='rights'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
      }}
    >
         <h1 className='rights-info' > JAVID BAKU  &copy;Bütün hüquqlar qorunur. </h1> 
        </motion.div>
          </Box>
   
</footer>
    )
}

export default Footer;

