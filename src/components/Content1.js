import React from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';

import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpaceShuttle, faDatabase, faArrowsAlt, faShoppingCart,faLightbulb,faSuperscript} from '@fortawesome/free-solid-svg-icons'
import CardContent from '@material-ui/core/CardContent';
import "./Content1.css"
export default function Content1() {
    return (
        
        
        <Container className="learn-more" maxWidth="lg">
        <h1>Our Services</h1>
        <Paper  elevation={12}>
            <Grid className="inter-div" container >
            
            
                <Grid className="cards" item xs={12} md={3} sm={3}>
                
                    <Card >
                    <CardContent>
                    <h3>Growth Hacking</h3>
                            <CardMedia>
                            <FontAwesomeIcon icon={faSpaceShuttle} className="font-icons" />
                            </CardMedia>
                            <p>Whether you're brand new, or have been in business for a while, growth is essential. Do you have strategy for funding innovation and growth?</p>
                            </CardContent>
                    </Card>
                </Grid>
                <Grid className="cards" item xs={12} md={3} sm={3}>
                <Card >
                <CardContent>
                    <h3>Big Data Architecture</h3>
                            <CardMedia>
                            <FontAwesomeIcon icon={faDatabase} className="font-icons" />
                            </CardMedia>
                            <p>Designing and Managing big data in the cloud for growth and scaling. Empower end-users with Deeper insights and Enhanced analytical abilities.</p>
                            </CardContent>
                    </Card>
                </Grid>
                <Grid className="cards" item xs={12} md={3} sm={3}>
                <Card >
                <CardContent>
                    <h3>Advanced Analytics</h3>
                            <CardMedia>
                            <FontAwesomeIcon icon={faArrowsAlt} className="font-icons" />

                            </CardMedia>
                            <p>We'll help you use Data to transform the performance of your digital team. Digital Analytics audit, Implementation, Consulting & Optimisation.</p>
                            </CardContent>

                    </Card>
                </Grid>
                
            </Grid>
            <Grid className="inter-div" container >
            
            
                <Grid className="cards" item xs={12} md={3} sm={3}>
                
                    <Card >
                    <CardContent>
                    <h3>Conversion Rate Optimisation</h3>
                    <CardMedia>
                            <FontAwesomeIcon icon={faShoppingCart} className="font-icons" />

                            </CardMedia>
                            <p>Company size big or small if you have enough data and tough problems to solve ML and AI can come for rescue</p>
                            </CardContent>
                    </Card>
                </Grid>
                <Grid className="cards" item xs={12} md={3} sm={3}>
                <Card >
                <CardContent>
                    <h3>Business Intelligence</h3>
                    <CardMedia>
                            <FontAwesomeIcon icon={faLightbulb} className="font-icons" />

                            </CardMedia>
                            <p>Embrace data-led culture in your business. Helping COO, CMO, CEO's vision of data-led transformation, single customer view and data democratisation in business.</p>
                            </CardContent>
                    </Card>
                </Grid>
                <Grid className="cards" item xs={12} md={3} sm={3}>
                <Card >
                <CardContent>
                    <h3>Machine Learning & AI</h3>
                    <CardMedia>
                            <FontAwesomeIcon icon={faSuperscript} className="font-icons" />

                            </CardMedia>
                            <p>Company size big or small if you have enough data and tough problems to solve ML and AI can come for rescue.</p>
                            </CardContent>

                    </Card>
                </Grid>
                
            </Grid>
            
            <Button className="button" variant="outlined">Learn More</Button>
            </Paper>
        </Container>
    )
}
