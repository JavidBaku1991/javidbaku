import React from 'react'
import  Navbar  from '../components/Navbar.js'
import { Box, Paper,Divider, Typography } from '@mui/material'
import Footer from '../components/Footer.js'
import colorstheme from '../data/theme.js'

import men from '../images/1.jpg'


const colors=colorstheme;


 const About = () => {
  return (
    <Box>

      <Navbar />
        <Paper className='about' sx={{backgroundColor:'black'  }}>
          <Box className='about-image-container'>
                <img src={men} className='about-img' />
          </Box>
      
          <Typography variant='h6' className='about-p'> 
            
Cavid Tərlan oğlu Ələkbərli (Cavid Bakı) 1991-ci ilin fevral ayının 20-də anadan olmuşdur. 1997-ci ildə Bakı şəhəri, Yasamal rayonunun 176 saylı orta məktəbin I sinfinə getmişdir. 1999-cu ildə Ə.Bakıxanov adına 6 saylı uşaq musiqi məktəbinin II sinfinə qəbul olunmuş və 2005-ci ildə bu məktəbin piano sinfini bitirmişdir. Həmin ildə Bül-Bül adına orta ixtisas musiqi məktəbinin piano sinfinə daxil olmuş və 2008-ci ildə məktəbin məzunu olmuşdur. 2003-cü ildə Vaqif Mustafazadə adına 2 saylı incəsənət məktəbinin gitara sinfinə daxil olmuş, 2008-c ildə həmin məktəbin məzunu olmuşdur. 2008-ci ildə Beynəlxalq Mədəni Əlaqələr ixtisası üzrə Azərbaycan Dövlət Mədəniyyət və İncəsənət Universitetinin Kulturologiya fakültəsinə daxil olmuşdur. 2012-ci ildə ali təhsilini qırmızı diplomla bitirmiş, həmin ildə eyni ixtisas üzrə ali təhsilin magistratura pilləsinə daxil olmuşdur.2015-ci ildə ali təhsilin magistratura pilləsini müvəffəqiyyətlə bitirmişdir.2016-cı ildən Azərbaycan Dövlət Mədəniyyət və İncəsənət Universitetinin “Kulturologiya” fakültəsinin doktorantıdır. “Mədəniyyələrarası dialoq kontekstində Azərbaycan - İspaniya mədəni əlaqələri” məvzusu üzrə dissertasiya üzərində çalışır. 2010-2011- ci illərdə İspaniyanın Kordoba şəhərində keçirilən “Festival de la guitarra de Cordoba” festivalının gitara üzrə masterklas dərslərində iştirak etmiş, festivalın konsertlərində çıxış etmişdir. Burada dünyaca məşhur Manolo Sanlukar, Pako Serrano, Manolo Franko və Xose Antonio Rodrigez kimi gitaraçılardan dərs almışdır. 2011-ci ilin oktyabr ayında Türkiyənin İstanbul şəhərində yerləşən Pera liseyində gitara konserti ilə çıxış etmişdir. 2013-cü ildə İspaniyanın Sevilya şəhərində “Fundacion de Cristia Heeren de arte flamenco” məktəbində gitara üzrə bir aylıq intensiv kurs keçmişdir. 2014-cü ildə Türkiyənin İstanbul şəhərində “Pera musiqi festivalı”nda iştirak etmişdir. 2013- 2016-cı illərdə solo konsertlərlə çıxış etmişdir . 2016-cı ildə “Simlərin səsi ilə…” adlı ilk albomu işıq üzü görmüşdür. 2021-ci ildə “Klassik gitara üçün Azərbaycan xalq mahnıları və bəstəkar əsərləri “ adlı kitabı çap olunur. 2020-2022-ci illərdə “Caucasus-Lat” şirkətində  xarici əlaqələr üzrə vasitəçi mütəxəssis vəzifəsidə işləmişdir. Evlidir. Bir övladı var.

          </Typography>
        </Paper>

<Box>


</Box>
   
      
        <Divider/>
      <Footer/>
    </Box>
 
    )
}


export default About;