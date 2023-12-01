import React from 'react'
import { Box, Divider } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Typography } from '@mui/material';
import YouTubePlayer from '../components/YouTubePlayer';
import FaqsMotion from './FaqsMotion.js';

 const Lessons = () => {
  return (
<Box className='lessons'> 
        <Navbar />
        <Box className='lessons-header'>
                    <FaqsMotion duration={{ duration: 1.5 }} move={   {
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}>
                        <Typography variant='h2'>Dərslər</Typography>
                        
                    </FaqsMotion>
            </Box>
            <Box className='lessons-container'> 
                   <Box className='lessons-list'>
                  <Box>
                        <YouTubePlayer youtubeLink='0LegO-u1JpU' className='home-video ' /> 
                  
                    <Typography variant='h5' className='lessons-subheader'>Dərs 1: Gitaranın tarixi. </Typography>
                  </Box>


                  <Box>
                        <YouTubePlayer youtubeLink='_8rRp8A_6OQ' className='home-video ' />
                   
                     
                     <Typography variant='h5' className='lessons-subheader'>Dərs 2:Gitaranın hissələri, oturuş qaydaları və əllərin düzülüşü </Typography>
                    </Box>
                 
                    <Box>
                                <YouTubePlayer youtubeLink='vyyWIhvzfX0' className='home-video  ' />
                       
                    
                    <Typography variant='h5' className='lessons-subheader'>Dərs 3: Barmaqların adları və Apoyando-Tirando texnikaları. </Typography>
                    </Box>
                  
             <Box>
               
                    <YouTubePlayer youtubeLink='vRr1PvITdcY' className='home-video ' />
               
                    <Typography variant='h5' className='lessons-subheader'>Dərs 4: Notlar. </Typography>
             </Box>

              <Box>
               
                     <YouTubePlayer youtubeLink='9_1mPDvGDnw' className='home-video ' />
                                  
                     <Typography variant='h5' className='lessons-subheader'>Dərs 5:Notların tətbiqi. </Typography>
             </Box> 
                 

             <Box>
               
                     <YouTubePlayer youtubeLink='Fy8ogjbp3vc' className='home-video  ' />
                                 
                    <Typography variant='h5' className='lessons-subheader'>Dərs 6: İşarələr və səs uzunluqları.</Typography>
               </Box>

               <Box>
               
                <YouTubePlayer youtubeLink='Kp7BXGFX_zs' className='home-video ' />
               
                      <Typography variant='h5' className='lessons-subheader'>Dərs 7: Leqato və Stakkato. </Typography>
               </Box>
                  
            
               <Box>
               
                       <YouTubePlayer youtubeLink='818DYRexviM' className='home-video ' /> 
                              
                    <Typography variant='h5' className='lessons-subheader'>Dərs 8: Barre. </Typography>
               </Box>
                  
               <Box>
               
                     <YouTubePlayer youtubeLink='xKyMZBqmn50' className='home-video  ' />
                                   
                     <Typography variant='h5' className='lessons-subheader'>Dərs 9:Etüd (D.Aguado). </Typography>
               </Box>
                 

               <Box>
                        <YouTubePlayer youtubeLink='VNW5EeQPS-o' className='home-video ' />
                                     
                     <Typography variant='h5' className='lessons-subheader'>Dərs 10:  Romans (V.Qomes). </Typography>
               </Box>

               <Box>
               
                     <YouTubePlayer youtubeLink='3jv0XQAjDDk' className='home-video ' />
               
                    
                     <Typography variant='h5' className='lessons-subheader'>Dərs 11: 10 ən məşhur klassik gitaraçı. </Typography>
               </Box>
                 
            
               <Box>
               
                    <YouTubePlayer youtubeLink='4li2NWig6Xs' className='home-video  ' />
                              
                    <Typography variant='h5' className='lessons-subheader'>Dərs 12: Flajolet texnikası. </Typography>
               </Box>
                 
                  
                
               <Box>
               
                     <YouTubePlayer youtubeLink='V5X-g5xoOIE' className='home-video ' />
              
                    
                     <Typography variant='h5' className='lessons-subheader'>Dərs 13: Arpecio. </Typography>
               </Box>
                 

               <Box>
               
                     <YouTubePlayer youtubeLink='4cGEwzNYoNQ' className='home-video ' />
              
                    
                     <Typography variant='h5' className='lessons-subheader'>Dərs 14: Gitaranın köklənməsi. </Typography>
               </Box>

               <Box>
               
                     <YouTubePlayer youtubeLink='BA4Gcb5-ULI' className='home-video  ' />
              
                    
                     <Typography variant='h5' className='lessons-subheader'>Dərs 15: Tremolo. </Typography>
               </Box>
                 
                 
               <Box>
               
                      <YouTubePlayer youtubeLink='i-L8MAULGX8' className='home-video ' />
              
                  
                    <Typography variant='h5' className='lessons-subheader'>Dərs 16: Simlərin çıxarılması və taxılması.. </Typography>
               </Box>
                  
               <Box>
               
                     <YouTubePlayer youtubeLink='BA4Gcb5-ULI' className='home-video ' />
              
                   
                    <Typography variant='h5' className='lessons-subheader'>Dərs 17: Qammalar. </Typography>
               </Box>
                  


              
               <Box>
               
                      <YouTubePlayer youtubeLink='7v8XK4PHecM' className='home-video ' />
              
                 <Typography variant='h5' className='lessons-subheader'>Dərs 18:Re major - Si minor qammaları. </Typography>
               </Box>
                  

               <Box>
               
                      <YouTubePlayer youtubeLink='ppzjvvujVEk' className='home-video  ' />
              
                  
                    <Typography variant='h5' className='lessons-subheader'>Dərs 19: Melizmlər. </Typography>
               </Box>


               <Box>
               
                 <YouTubePlayer youtubeLink='ufPtlkC6oNU' className='home-video ' />  
                           
                     <Typography variant='h5' className='lessons-subheader'>Dərs 20: 10 ən məşhur flamenko gitaraçı. </Typography>
               </Box>
                  
               <Box>
               
                      <YouTubePlayer youtubeLink='yE165QmtPkQ' className='home-video ' />
              
                  
                    <Typography variant='h5' className='lessons-subheader'>Dərs 21:Qubanın ağ alması. </Typography>
               </Box>
                 
               <Box>
               
                         <YouTubePlayer youtubeLink='jNFAnV129mo' className='home-video  ' />
              
                
                     <Typography variant='h5' className='lessons-subheader'>Dərs 22:  Nüanslar. . </Typography>
               </Box>
                 
               <Box>
               
                   <YouTubePlayer youtubeLink='o7AzOdCNzFE' className='home-video ' />
              
                 
                    <Typography variant='h5' className='lessons-subheader'>Dərs 23: Gündəlik məşqləri haqqında. </Typography>
               </Box>
                  

               <Box>
               
                     <YouTubePlayer youtubeLink='PEdiCxZARC8' className='home-video ' />
              
                    
                     <Typography variant='h5' className='lessons-subheader'>Dərs 24:  Flamenko dərsləri: Rasgeado (Rasgueado) . </Typography>
               </Box>

               <Box>
               
                    <YouTubePlayer youtubeLink='z1IJ7mAQT-k' className='home-video  ' />
              
                   
                     <Typography variant='h5' className='lessons-subheader'>Dərs 25: Alzapua. </Typography>
               </Box>
                 

               <Box>
               
                       <YouTubePlayer youtubeLink='YGhCzhVAz9g' className='home-video ' />
              
                 
                    <Typography variant='h5' className='lessons-subheader'>Dərs 26: Pikado. </Typography>
               </Box>
                 
                  
               <Box>
               
                     <YouTubePlayer youtubeLink='aeYS_ePpmX4' className='home-video ' />
              
                    
                     <Typography variant='h5' className='lessons-subheader'>Dərs 27: On ikilik ritmlər. </Typography>
               </Box>
                 
                
                
                        
              </Box>
         </Box>


        

        <Box className='footer-contaner'>
          <Footer/>
            </Box> 
</Box>
    )
}


export default Lessons;