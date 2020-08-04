import React from 'react'
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css";


export default function Slider() {
    return (
        <div>
             <Carousel className="carousel" autoPlay>
                <div>
                    <img src={image1} alt="first"/>
                    
                </div>
                <div>
                    <img src={image2} alt="second" />
                    
                </div>
                <div>
                    <img src={image3} alt="third" />
                    
                </div>
            </Carousel>
        </div>
    )
}
