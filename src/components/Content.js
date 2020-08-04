import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import "./Content.css";

export default function Content() {

  return (

    <div className="content1" >
      <Container maxWidth="md">
        <h3>CorvidIndia</h3>

        <p>Something short and leading about the collection below—its contents, the creator, etc.
        Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.</p>

        <div >
          <Grid container spacing={2} justify="left">
            <Grid item>
              <Button variant="contained" color="primary">
                Main call to action
                  </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}