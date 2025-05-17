import React from 'react';
import { Button } from 'antd';
import resumePath from "./../Others/AKILAN_P.pdf"

const ResumeDownload = () => {
  const handleDownload = () => {
    // Correct path to the public folder
  //  const resumePath = './../Others/AKILAN_P.pdf'; 
    console.log(resumePath) ;
    // Create a link and trigger the download
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'AKILAN_P.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='md'>  
      <Button  color="default" variant="solid"onClick={handleDownload}>
        Download Resume
      </Button>
    </div>
  );
};

export default ResumeDownload;
