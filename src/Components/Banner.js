import React, {useState, useEffect} from 'react'
import classes from '../Styles/Banner.module.css'

import image1 from '../Assets/1.png'
import image2 from '../Assets/2.png'
import image3 from '../Assets/3.png'
import image4 from '../Assets/4.png'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // 
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className={classes.banner}>
           <Carousel className={classes.carousel} autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} interval='3000'>
               <img style={{borderRadius: '30px'}} className={classes.image} src={image1} alt="" />
               <img style={{borderRadius: '30px'}} className={classes.image} src={image2} alt="" />
               <img style={{borderRadius: '30px'}} className={classes.image} src={image3} alt="" />
               <img style={{borderRadius: '30px'}} className={classes.image} src={image4} alt="" />
           </Carousel>
        </div>
    )
}

export default Banner
