import React from 'react'

import { withStyles } from 'material-ui/styles'
import ListSubheader from 'material-ui/List/ListSubheader'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import NavigateNext from 'material-ui-icons/NavigateNext'

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class DrawerQILiveVideo extends React.Component {
  state = { open: false };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary="Live Video (Flash)" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="ActiveX" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="QuickTime" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="MJPEG" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="Avast Internet Security" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="Kaspersky 2013" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="Kaspersky 2014" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="Kaspersky 2017" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="AVG Internet Security" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="AVIRA Security" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="F-Secure Security" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="GDATA Security" />
          </ListItem>
        </Collapse>
      </div>
    );
  }
}

export default withStyles(styles)(DrawerQILiveVideo);
