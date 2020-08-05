import React from 'react'
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css";
import Container from '@material-ui/core/Container';
import "./Content3.css"
export default function Content3() {
    return (
        <Container className="content3" maxWidth="lg">
            <div>
                <p>Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
entirely.</p>
            </div>

            <Carousel className="content3-carousel" autoPlay>
                <div>
                    <img src={image1} alt="first" />

                </div>
                <div>
                    <img src={image2} alt="second" />

                </div>
                <div>
                    <img src={image3} alt="third" />

                </div>
            </Carousel>
        </Container>
    )
}
