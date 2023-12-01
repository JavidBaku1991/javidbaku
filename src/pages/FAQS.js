import React from 'react'
import Navbar from '../components/Navbar';
import { Box, Typography } from '@mui/material';

import Footer from '../components/Footer';
import colorstheme from  '../data/theme.js'
import FaqsMotion from './FaqsMotion.js';
import AccordionElement from './Accordion.js';


const colors=colorstheme;
const moveValues=
  {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 },
  }
const moveValuesLeft=
  {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  }

 const FAQS = () => {
  return (
    <Box>
         <Navbar/>
 
    <Box className='faqs'>
 



<FaqsMotion duration={{ duration: 1.5 }} move={ moveValues} >
 <Typography variant='h2' sx={{marginLeft:'10%',color:colors.bronze1, marginTop:'90px'}} >SUALLAR</Typography>
</FaqsMotion>

    <Typography variant='h6' sx={{marginLeft:'10%',color:colors.bronze1}} >Cavabı oxuya bilmək üçün <span className='faqs-span'>  sualın üzərinə toxunun!!!</span></Typography>

   
    <Box mr="10px">
      <Box className='questions'>

 <FaqsMotion duration={{duration:.5}} move={moveValues}  > 
        <Box className='accordion-faqs'> 
        <AccordionElement question={'Gitarada ifa etməyi öyrənmək üçün nə qədər zaman lazımdır?'} answer={'Gitara ilə əlaqədar əsas miflərdən biri bu alətin asan olmasıdır. Bu qətiyyən belə deyil. İlk öncə siz nəyi öyrənmək istədiyinizi dəqiqləşdirməlisiniz. Əgər siz notları, gitaranın texnikalarını və müəyyən qədər nəzəriyyəni öyrənmək istəyirsinizsə bu ən az bir neçə il intensiv məşq tələb edir. Yox əgər siz sadə mahnılara müşaiət etmək istəyirsinizsə bu bir neçə ayınızı alacaq. Lakin bir nüansı da qeyd edim ki, müşaiətin də müxtəlif səviyyələri vardır. Bu səviyyələrə görə də məşq etdiyiniz zaman periodu müxtəlif ola bilər.  '}  />
        </Box>
</FaqsMotion>
      
 <FaqsMotion duration={{duration:.9}} move={moveValues}  > 
        <Box className='accordion-faqs'> 
        <AccordionElement question={'Gitarada ifa etməyi öyrənmək üçün nə qədər zaman lazımdır?'} answer={'Gitara ilə əlaqədar əsas miflərdən biri bu alətin asan olmasıdır. Bu qətiyyən belə deyil. İlk öncə siz nəyi öyrənmək istədiyinizi dəqiqləşdirməlisiniz. Əgər siz notları, gitaranın texnikalarını və müəyyən qədər nəzəriyyəni öyrənmək istəyirsinizsə bu ən az bir neçə il intensiv məşq tələb edir. Yox əgər siz sadə mahnılara müşaiət etmək istəyirsinizsə bu bir neçə ayınızı alacaq. Lakin bir nüansı da qeyd edim ki, müşaiətin də müxtəlif səviyyələri vardır. Bu səviyyələrə görə də məşq etdiyiniz zaman periodu müxtəlif ola bilər.  '}  />
        </Box>
</FaqsMotion>
      


<FaqsMotion duration={{duration:1.6}} move={moveValuesLeft} >
<Box className='accordion-faqs'>
<AccordionElement 
question={' Gitaraya başlamadan öncə başqa alətdə ifa etmək vacibdir mi?'} answer ={'Xeyir. Lakin daha öncə musiqi biliyi olan bir şagird gitaranı daha tez qavraya bilər. Əgər gitaradan öncə hansısa aləti düşünürsünüzsə fortepianonu sizə məsləhət görərdim. '}/>
</Box></FaqsMotion>

 <FaqsMotion duration={{duration:2.3}} move={moveValues} >
<Box className='accordion-faqs'> 
<AccordionElement  
question={'Notları öyrənmək önəmlidir?'} answer={'Bəli. '}
/>
</Box></FaqsMotion>



</Box>
 </Box>



<Footer/>
    </Box>
    </Box>
   
   
  
  )
}


export default FAQS;