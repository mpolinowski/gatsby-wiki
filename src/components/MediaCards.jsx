import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'

import Reptile from '../static/contemplative-reptile.jpg'
import Paella from '../static/paella.jpg'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
})

function MediaCards(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} lg={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={Reptile}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography type="headline" component="h2">
                Lizard
              </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button dense color="primary">
                Share
              </Button>
              <Button dense color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={Paella}
              title="Good Eats"
            />
            <CardContent>
              <Typography type="headline" component="h2">
                Paella
              </Typography>
              <Typography component="p">
                Many non-Spaniards view paella as Spain's national dish, but most Spaniards consider it to be a regional Valencian dish.
              </Typography>
            </CardContent>
            <CardActions>
              <Button dense color="primary">
                Share
              </Button>
              <Button dense color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={Reptile}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography type="headline" component="h2">
                Lizard
              </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button dense color="primary">
                Share
              </Button>
              <Button dense color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={Paella}
              title="Good Eats"
            />
            <CardContent>
              <Typography type="headline" component="h2">
                Paella
              </Typography>
              <Typography component="p">
                Many non-Spaniards view paella as Spain's national dish, but most Spaniards consider it to be a regional Valencian dish.
              </Typography>
            </CardContent>
            <CardActions>
              <Button dense color="primary">
                Share
              </Button>
              <Button dense color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={Reptile}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography type="headline" component="h2">
                Lizard
              </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button dense color="primary">
                Share
              </Button>
              <Button dense color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

MediaCards.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MediaCards);
