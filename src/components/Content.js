import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import "./Content.css";

export default function Content() {

  return (

    <div className="content1" >
      <Container maxWidth="md">
        <h3>Corvid Consulting - Growth Hacking, Data Science, Analytics, AI Consulting Firm</h3>

        <p>We help companies to build comprehensive set of tools that help solve business critical challenges and accelerate innovation in data science, machine learning, and artificial intelligence at scale.</p>

        <div >
          <Grid container spacing={2} style={{justifyContent:"left"}}>
            <Grid item>
              <Button variant="contained" color="primary">
                Get Started
                  </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}