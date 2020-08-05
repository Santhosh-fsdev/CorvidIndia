import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import "./Content4.css"
export default function Content4() {
    return (
        <div className="content4">
            <Card className="content4-card">
                <CardContent className="content4-content">
                    <h2>Hello world dfwerfr ergerge egerg</h2>
                    <Button variant="contained" color="#ffffff">
                        Secondary
</Button>
                </CardContent>
            </Card>
            <div className="footer">
                <Grid container className="footer-div">
                    <Grid className="footer-grid1" item xs={12} md={3} sm={3}>
                    <div>
                    <h1>Corvid consulting</h1>
                    <br />
                        <p>lorem 20 dfdsfsd sdfdsfsdf sdfsdfsd fsdfdsfsdf s df dsfds sdf dsfds dsf sdf sdfdsf sdf dsfdsf sd fsdfdsf dsfdsf sdf sdf ds sdf sdfdsf ds</p>
                        </div>
                    </Grid>
                    <Grid item className="footer-grid2" xs={12} md={3} sm={3}>
                    <div>
                    <h3>Products</h3>
                    <hr />
                        <ul>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                        </ul>
                    </div>
                    </Grid>
                    <Grid item className="footer-grid2" xs={12} md={3} sm={3}>
                    <div>
                    <h3>Products</h3>
                    <hr />
                        <ul>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                        </ul>
                    </div>
                    </Grid>
                    <Grid item className="footer-grid2" xs={12} md={3} sm={3}>
                    <div>
                    <h3>Products</h3>
                    <hr />
                        <ul>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                        </ul>
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
