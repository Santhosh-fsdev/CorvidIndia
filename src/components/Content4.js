import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import "./Content4.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
export default function Content4() {
    return (
        <div className="content4">
            <Card className="content4-card">
                <CardContent className="content4-content">
                    <h2>Need a hand? Ready to talk?</h2>
                    <p>
                    Do you have a particular data-analytic problem you are trying to solve? Are you interested in learning more about data science and gathering the skills to tackle real-world data challenges? Maybe you just want to make stunning visualizations and are trying to find the right tool to do so or Are you interested to know about how ML and Data can help your SEO or Marketing ROI? Whatever your data science goals may be, contact us and we’ll guide you to the right solution!
                    </p>
                    <Button variant="contained" color="primary">
                        Reach us &
</Button>
                </CardContent>
            </Card>
            <div className="footer">
                <Grid container className="footer-div">
                    <Grid className="footer-grid1" item xs={12} md={3} sm={3}>
                    <div>
                    <h1>Corvid consulting</h1>
                    <br />
                        <p>We help companies to build comprehensive set of tools that help solve business critical challenges and accelerate innovation in data science, machine learning, and artificial intelligence at scale.</p>
                         <FontAwesomeIcon icon={faEnvelope} className="font-icons" ></FontAwesomeIcon><p> support@corvidindia.com </p>
                        </div>
                    </Grid>
                    <Grid item className="footer-grid2" xs={12} md={3} sm={3}>
                    <div>
                    <h3>Services</h3>
                    <hr />
                        <ul>
                            <li>Growth Hacking</li>
                            <li>Big Data Architecture</li>
                            <li>Advanced Analytics</li>
                        </ul>
                    </div>
                    </Grid>
                    <Grid item className="footer-grid2" xs={12} md={3} sm={3}>
                    <div>
                    <h3>Products</h3>
                    <hr />
                        <ul>
                            <li>AI & ML Products</li>
                            <li>Personalisation</li>
                            <li>Computer Vision</li>
                        </ul>
                    </div>
                    </Grid>
                    <Grid item className="footer-grid2" xs={12} md={3} sm={3}>
                    <div>
                        <h3>Drop us a line</h3>
                    </div>
                    
                    </Grid>
                    <div className="copyrights">
                        <h4>All rights reserved @2020</h4>
                    </div>
                    
                </Grid>
            </div>

        </div>
    )
}
