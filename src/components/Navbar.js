import React ,{useEffect, useState} from 'react'
import { Box, Typography ,Button} from "@mui/material";
import {Link} from 'react-router-dom'
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import colorstheme from '../data/theme.js';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const colors=colorstheme;


const SidebarMenu =()=>{
  return(
<div className="sidenav">

                  <Link className='sidelink' to='/'>
                  <Typography variant='h5'>Ana səhifə</Typography>
                  </Link>
                  <Link className='sidelink' to='/about'>
                  <Typography variant='h5'>Haqqımda</Typography>
                  </Link>
                  <Link className='sidelink' to='/lessons'>  
                  <Typography variant='h5'>Dərslər</Typography>
                  </Link>
                
                  <Link  to='/notes' className='sidelink'> 
                  <Typography variant='h5'>Notlar</Typography>
                  </Link>
                  <Link  to='/faqs' className='sidelink'> 
                  <Typography variant='h5'>Suallar</Typography>
                  </Link>  
                  <Link  to='/contacts' className='sidelink'> 
                  <Typography variant='h5'>Əlaqə</Typography>
                  </Link>  
                                 
            
</div>
    )
}


  const Upbar=()=>{
    return (
      <Box display="flex" p={2}  className='navbar'>
          <Box sx={{display:'flex' }} className='navbar-left'>
            <Link to='/'className='hero-header logo'>
           <Typography variant='h3'  sx={{color:colors.bronze1}} >
            Javid Baku
           </Typography>
           </Link>
              
              <Box sx={{display:'flex',marginLeft:'40px'}} >
                  <Link className='navlink' to='/about'>
                  <Typography>Haqqımda</Typography>
                  </Link>
                  <Link className='navlink' to='/lessons'>  
                  <Typography>Dərslər</Typography>
                  </Link>
                
                  <Link  to='/notes' className='navlink'> 
                  <Typography>Notlar</Typography>
                  </Link>
                  <Link  to='/faqs' className='navlink'> 
                  <Typography>Suallar</Typography>
                  </Link>                 
                                 
              </Box>
          </Box>

     <Box  className='navbar-right'>        
              <Link to='/contacts' className='navlink'>
                <LocalPostOfficeIcon  className='icon'/>
                </Link>
                <Link to='https://www.instagram.com/javid_baku_/'  className='navlink' target='_blank'>

                <InstagramIcon className='icon' />
                </Link>

                <Link to="https://wa.me/+994709209747"  className='navlink' target='_blank'>
                <WhatsAppIcon  className='icon' />
                </Link>

                <Link to='https://www.facebook.com/cavid.baku.7/'  className='navlink' target='_blank' >
                <FacebookIcon  className='icon' />
                </Link>
                <Link to='https://www.youtube.com/channel/UChR9zh9v-8FeeGyzk9uPDsA'  className='navlink' target='_blank' >
                <YouTubeIcon  className='icon' />
                </Link>                

  </Box>   
       </Box>
    );
  }

 

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu,setOpenMenu]=useState(false);
  const [sideBarOpened,setsideBarOpened]=useState(true);



  const SidebarButton=()=>{
    return(
      <div className='menu-open-icon-div' >
        <Button onClick={toggleMenu} className='menu-open-icon'>{sideBarOpened ? <MenuIcon /> :<CloseIcon/>  }</Button>
      </div>
    )
  }


  function toggleMenu() {
    
      return ( 
      setOpenMenu(currentState=> currentState?false:true),
      setsideBarOpened(currentState=> currentState?false:true)
    )
  
  }
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1060);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); 
    if(window.innerWidth >= 1060)  setOpenMenu(state=>state===!state) ;

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



 return (
  <div >
    {!isMobile && <Upbar /> }
   {isMobile &&  <SidebarButton/>}

   {openMenu && <SidebarMenu />}
  </div>
);

}


export default Navbar;

