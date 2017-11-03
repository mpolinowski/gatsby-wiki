import React from 'react'
import Link from 'gatsby-link'

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'

const ResultCards = ({image, title, abstract, link}) => (

    <Grid item xs={12} sm={6} lg={4}>
      <Card style={{ maxWidth: 345 }}>
        <CardMedia
          style={{ height: 200 }}
          image={image}
          title={abstract}
        />
        <CardContent>
          <Typography type="headline" component="h4">
            {title}
          </Typography>
          <Typography component="p">
            {abstract}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={link} style={{ textDecoration: 'none' }}>
            <Button dense color="primary">
              Read
            </Button>
          </Link>
          <Button dense color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
)

export default ResultCards
