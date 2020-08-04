import React from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import "./Content1.css"
export default function Content1() {
    return (
        <Container className="learn-more" maxWidth="md">
            <Grid className="inter-div" container >
                <Grid className="cards" item xs={12} md={4} sm={4}>
                    <Card >
                    <CardContent>
                    <h3>shvhf</h3>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={image3}
                                title="Contemplative Reptile"
                            />
                            <p>sdfdsgfvhsgvfsdghfvsdjvfjsdvfjdvhjsfhj</p>
                            </CardContent>
                    </Card>
                </Grid>
                <Grid className="cards" item xs={12} md={4} sm={4}>
                <Card >
                <CardContent>
                    <h3>shvhf</h3>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={image2}
                                title="Contemplative Reptile"
                            />
                            <p>sdfdsgfvhsgvfsdghfvsdjvfjsdvfjdvhjsfhj</p>
                            </CardContent>
                    </Card>
                </Grid>
                <Grid className="cards" item xs={12} md={4} sm={4}>
                <Card >
                <CardContent>
                    <h3>shvhf</h3>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image={image1}
                                title="Contemplative Reptile"
                            />
                            <p>sdfdsgfvhsgvfsdghfvsdjvfjsdvfjdvhjsfhj</p>
                            </CardContent>

                    </Card>
                </Grid>

            </Grid>
            <Button className="button" variant="outlined">Learn More</Button>

        </Container>
    )
}
