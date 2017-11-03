import React from 'react'

import { withStyles } from 'material-ui/styles'
import ListSubheader from 'material-ui/List/ListSubheader'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import BuildIcon from 'material-ui-icons/Build'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import NavigateNext from 'material-ui-icons/NavigateNext'

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class DrawerQICameraScanner extends React.Component {
  state = { open: false };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText inset primary="Camera Scanner" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="INSTAR Camera Tool" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="Angry IP Scanner" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="Fing CLI" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="Fing Mobile" />
          </ListItem>
        </Collapse>
      </div>
    );
  }
}

export default withStyles(styles)(DrawerQICameraScanner);
