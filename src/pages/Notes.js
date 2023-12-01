import { Box, Typography } from '@mui/material';
import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.js';
import MyPdfViewer from '../components/MyPdfViewer';
import qubaninagalmasi from '../pdf/quba.pdf';
import girdimyarinbagcasina from '../pdf/girdim.pdf';
import lacin from '../pdf/lacin.pdf';
import sari  from '../pdf/sari.pdf'
import kucelere from '../pdf/kucelere.pdf'
import arzu from '../pdf/arzu.pdf'
import hardasan from '../pdf/hardasan.pdf'
import komde from '../pdf/komdeninarzulari.pdf'
import sensiz from '../pdf/sensiz.pdf'
import himn from '../pdf/himn.pdf'
import hicran from '../pdf/hicran.pdf'

import cargah from '../pdf/cargah.pdf'
import laylay from '../pdf/laylay.pdf'
import sevgilim from '../pdf/sevgilim.pdf'
import sevgilicanan from '../pdf/sevgilicanan.pdf'










 const Notes = () => {
  return (
  <>
  <Navbar />
    <div className='notes'>
   
            <h1 className='notes-header'>Azərbaycan Xalq Mahnıları</h1>
          <Box className='national'>    
                 <MyPdfViewer  pdf={qubaninagalmasi} title ='Qubanın ağ alması'/>
                  <MyPdfViewer pdf={girdimyarinbagcasina} title ='Girdim yarın bağçasına'/>
                  <MyPdfViewer pdf={lacin} title ='Laçın'/>
                  <MyPdfViewer pdf={sari} title ='Sarı gəlin'/>
                  <MyPdfViewer pdf={kucelere} title ='Küçələrə su səpmişəm'/>

       

      </Box>
      <h1 className='notes-header'>Azərbaycan Bəstəkar Əsərləri</h1>
      <Box className='composer'>
        
          
                          <MyPdfViewer pdf={himn} title ='Himn - Üzeyir Hacıbəyli '/>
                          <MyPdfViewer pdf={sensiz} title ='Sənsiz - Üzeyir Hacıbəyli '/>
                          <MyPdfViewer pdf={arzu} title ='Arzu - Niyazi '/>
                          <MyPdfViewer pdf={hardasan} title ='Hardasan? - Səid Rüstəmov '/>
                          <MyPdfViewer pdf={komde} title ='Komdenin arzuları - Arif Məlikov '/>
                          <MyPdfViewer pdf={hicran} title ='Hicran nəğməsi- Polad Bülbüloğlu'/>
                  <MyPdfViewer pdf={cargah} title ='Çargah -Asəf Zeynallı '/>
                  <MyPdfViewer pdf={laylay} title ='Lay-lay(iki gitara üçün) - Fikrət Əmirov '/>
                  <MyPdfViewer pdf={sevgilicanan} title ='Sevgili canan - Üzeyir Hacıbəyli'/>
                  <MyPdfViewer pdf={sevgilim} title ='Sevgilim - Rauf Hacıyev '/>


      </Box>


 
  
</div>
<Box className='footer-container'>
          <Footer/>
            </Box>   </>
)

}


export default Notes;
