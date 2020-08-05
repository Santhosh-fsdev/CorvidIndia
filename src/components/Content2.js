import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import Container from '@material-ui/core/Container';
import "./Content2.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";

export default function Content2() {
    return (
        <div className="content2">
            <Container maxWidth="lg">
                <h3>CorvidIndia</h3>

                <p>Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.</p>

                <div >
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                Main call to action
                  </Button>
                        </Grid>
                    </Grid>
                </div>
                <Grid container className="grid2" spacing={2} justify="center">
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
                    </Grid>
                    <Grid container className="grid2" spacing={2} justify="center">
                        <Grid className="item2" item xs={12} md={6} sm={6}>
                        <Paper className="paper-content" elevation={12} >
                                <h3>asdsdfdfdf</h3>
                                <hr />
                                <h1>sdbcvsbdvdv</h1>
                                <br />
                                <p>ddfdfdfwf weferf erferf erferger ererge erferf erferger ererge sdff ergferge ergerger gerg erer ertertert ert ertertertertertre </p>
                            </Paper>
                        </Grid>
                        <Grid   item xs={12} md={6} sm={6}>
                            
                            <img className="grid-image" src={image2} alt="firstone">

                            </img>
                        </Grid>
                    </Grid>
            </Container>
        </div>
    )
}
