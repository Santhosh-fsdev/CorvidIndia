import React from 'react'

import Container from '@material-ui/core/Container';
import "./Content2.css";

export default function Content2() {
    return (
        <div className="content2">
            <Container maxWidth="lg">
                <h3>Who We Are - Group of Digital Growth hackers, Big data and AI consultants.</h3>

                <p>We are a team of problem solvers led by Growth strategists, ML and Analytics wizards to solve clients toughest problems in automation, digital growth, data democratisation, data-led transformations and scaling. We build Data products based on Machine Learning and AI. Predictive Analytics, NLP engineering, Computer Vision, Deep learning are our favourite. Either be an SEO problem or Digital marketing strategy or Conversion rate optimisation ML can help in more ways than you can think. If you want to know-how let's have a chat with coffee?</p>

                <div >
                    {/* <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                Know More
                  </Button>
                        </Grid>
                    </Grid> */}
                </div>
                {/* <Grid container className="grid2" spacing={2} justify="center">
                <Grid className="item2" item xs={12} md={6} sm={6}>
                        <Paper className="paper-content" elevation={12} >
                                <h3>Our Products</h3>
                                <hr />
                                <br />
                                <p>Intelligent platform with powerfull products can take your business to the next step. In the age of data and AI if you are not taking advantage of this technology you are leaving your place to your competitor. </p>
                            </Paper>
                        </Grid>
                        <Grid   item xs={12} md={6} sm={6}>
                            
                        <FontAwesomeIcon icon={faCubes} className="font-icons1" />
                        </Grid>
                        
                    </Grid> */}
                    {/* <Grid container className="grid2" spacing={2} justify="center">
                    <Grid  item xs={12} md={6} sm={6}>
                            <img className="grid-image" src={image1} alt="firstone">

                            </img>
                        </Grid>
                        <Grid className="item2" item xs={12} md={6} sm={6}>
                            <Paper className="paper-content" elevation={12} >
                                <h3>asdsdfdfdf</h3>
                                <hr />
                                <h1>sdbcvsbdvdv</h1>
                                <br />
                                <p>ddfdfdfwf weferf erferf erferger ererge sdff ergferge ergerger gerg erer ertertert ert ertertertertertre</p>
                            </Paper>
                        </Grid>
                    </Grid> */}
            </Container>
        </div>
    )
}
