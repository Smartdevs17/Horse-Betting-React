import React, {useState, useEffect} from "react";
import classes from '../Styles/Banner.module.css'

const Iframe = () => {

   let screenWidth = window.screen.width
   const [width, setwidth] = useState(screenWidth);

   const [url, seturl] = useState(`https://www.youtube.com/embed/VMAk1_bcv90`);

   window.addEventListener('resize', () => {
     setwidth(window.screen.width)
   })

   const handleIndian = () => {
     seturl(`https://www.youtube.com/embed/byNaO_zn2fI`)
   }

   const handleInternational = () => {
     seturl(`https://www.youtube.com/embed/VMAk1_bcv90`)
   }

  return (
    <div className={classes.iframe}>
      <div className={classes.twoButtons}>
        <button onClick={handleIndian} className={classes.btn}>INDIAN</button>
        <button onClick={handleInternational} className={classes.btn}>INTERNATIONAL</button>
      </div>
      <iframe
        width={width}
        height="315"
        src={url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Iframe;





