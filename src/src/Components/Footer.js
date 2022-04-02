import React from 'react'
import {useWindowDimensions} from './windowSize'


const Footer = () => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      <div className="footer" id="footer" style={{ width: width, height: height*0.1 }}>
        <div className="footer-content">
          
        </div>
      </div>
    </>
  );
}

export default Footer;