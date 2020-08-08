import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSitemap, faUsers,faDesktop, faCogs, faCreditCard, faCalendar} from '@fortawesome/free-solid-svg-icons';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

import "./Content3.css"
export default function Content3() {
    return (
        <Container className="content3" maxWidth="lg">
            {/* <div>
                <p>Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
entirely.</p>
            </div> */}
            <h1 >Our Products</h1>

            <Carousel className="content3-carousel" autoPlay showThumbs={false}>
                <div>
                <Card className="content3-card">
                    <CardContent>
                    <h3>AI & ML Products</h3>
                            <CardMedia>
                            <FontAwesomeIcon icon={faSitemap} className="font-icons" />
                            
                            </CardMedia>
                            <p>Design, build and deploy custom solutions that leverage state-of-the-art artificial intelligence to move your organization towards its' goals faster than ever before. Embed our readymade ML pipelines in your web applications</p>
                            </CardContent>
                    </Card>
                    

                </div>
                <div>
                <Card className="content3-card">
                    <CardContent>
                    <h3>Personalisation</h3>
                            <CardMedia>
                            <FontAwesomeIcon icon={faUsers} className="font-icons" />
                            </CardMedia>
                            <p>Seamlessly Test, Target, and Personalize Every Aspect of Your Digital Presence. Our Tagless Solution Reduces Website Latency & Increases Data Accuracy And Conversions. Faster Site Performance. Better Data. Increase Revenue. Optimize Everything.</p>
                            </CardContent>
                    </Card>

                </div>
                <div>
                <Card className="content3-card">
                    <CardContent>
                    <h3>Computer Vision</h3>
                            <CardMedia>
                            <FontAwesomeIcon icon={faDesktop} className="font-icons" />
                            </CardMedia>
                            <p>Extract meaning from images and videos using custom deep learning solutions to identify, segment, and track objects. Application for large scale categorization, Semantic Segmentation, line Annotation, Bounding Box, Cuboid Annotation. Learn how to use this for SEO and better UX for your website.</p>
                            </CardContent>
                    </Card>

                </div>
                <div>
                <Card className="content3-card">
                    <CardContent>
                    <h3>Recommendation Engine</h3>
                            <CardMedia>
                            <FontAwesomeIcon icon={faCogs} className="font-icons" />
                            
                            </CardMedia>
                            <p>Powerful AI-driven algorithms to automatically promote, weight & filter recommendations. We maximise your business results by showing the most relevant offers to your users. Track users actions. Promote best offers. Identify opportunities.</p>
                            </CardContent>
                    </Card>
                    

                </div>
                <div>
                <Card className="content3-card">
                    <CardContent>
                    <h3>Price monitoring</h3>
                            <CardMedia>
                            <FontAwesomeIcon icon={faCreditCard} className="font-icons" />
                            </CardMedia>
                            <p>Watch competitor prices on online shopping platforms in Real-time for pricing & stocks. Will customize for your products & services. Comparison and repricing tool, meant to help eCommerce professionals keep an eye on their competitors, or retailers.</p>
                            </CardContent>
                    </Card>

                </div>
                <div>
                <Card className="content3-card">
                    <CardContent>
                    <h3>Realtime Pulse</h3>
                            <CardMedia>
                            <FontAwesomeIcon icon={faCalendar} className="font-icons" />
                            </CardMedia>
                            <p>Analyze user behaviour across your sites with Real-Time data analysis. The key to unlocking customer insights & driving customer experience. Business gets insights or can draw conclusions immediately (or very rapidly after) the data enters their system.</p>
                            </CardContent>
                    </Card>

                </div>
            </Carousel>
        </Container>
    )
}
