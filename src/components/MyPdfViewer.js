import React ,{useState,useEffect} from 'react'

import { useTranslation } from 'react-i18next';


 const MyPdfViewer = ({pdf,title,openPdf}) => {

  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();


const downloadFile=(url)=>{
fetch(url).then(response=>response.blob()).then(blob=>{
  const blobURL =window.URL.createObjectURL(new Blob([blob]))
  
  const fileName=url;
  const aTag =document.createElement('a')
  aTag.href=blobURL;
  aTag.setAttribute('download',fileName)
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
})




}

const handleResize = () => {
  setIsMobile(window.innerWidth <= 1060);
};


useEffect(() => {
  window.addEventListener('resize', handleResize);
  handleResize();

  return () => {
      window.removeEventListener('resize', handleResize);
  };
}, []);

  return (
    <div className='pdf-viewer'>
       <p className='note-title'>{title}</p>
       <div style={{display:'flex',flexDirection:'row', gap:'10px'}}>
        { !isMobile &&  <button  className='note-button' onClick={openPdf}> {t("openPdf")}</button>


        }

        <button onClick={()=>{downloadFile(pdf)}} className='note-button'>
        {t("downloadPdf")}
        </button>
       </div>
      
    </div>
  )
}


export default MyPdfViewer;