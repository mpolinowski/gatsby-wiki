import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
// import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    width: 900,
    height: 800,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

import bike from '../static/bike.jpg'
import breakfast from '../static/breakfast.jpg'
import burgers from '../static/burgers.jpg'
import camera from '../static/camera.jpg'
import hats from '../static/hats.jpg'
import honey from '../static/honey.jpg'
import morning from '../static/morning.jpg'
import mushroom from '../static/mushroom.jpg'
import olive from '../static/olive.jpg'
import plant from '../static/plant.jpg'
import star from '../static/star.jpg'
import vegetables from '../static/vegetables.jpg'

const tileData = [
 {
   img: bike,
   title: 'bike',
   author: 'bike',
   featured: true,
 },
 {
   img: breakfast,
   title: 'breakfast',
   author: 'breakfast',
   featured: true,
 },
 {
   img: burgers,
   title: 'burgers',
   author: 'burgers',
   featured: true,
 },
 {
   img: camera,
   title: 'camera',
   author: 'camera',
   featured: true,
 },
 {
   img: hats,
   title: 'hats',
   author: 'hats',
   featured: true,
 },
 {
   img: honey,
   title: 'honey',
   author: 'honey',
   featured: true,
 },
 {
   img: morning,
   title: 'morning',
   author: 'morning',
   featured: true,
 },
 {
   img: mushroom,
   title: 'mushroom',
   author: 'mushroom',
   featured: true,
 },
 {
   img: olive,
   title: 'olive',
   author: 'olive',
   featured: true,
 },
 {
   img: plant,
   title: 'plant',
   author: 'plant',
   featured: true,
 },
 {
   img: star,
   title: 'star',
   author: 'star',
   featured: true,
 },
 {
   img: vegetables,
   title: 'vegetables',
   author: 'vegetables',
   featured: true,
 },
];

function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
          <Subheader>December</Subheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton>
                  <InfoIcon color="rgba(255, 255, 255, 0.54)" />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
