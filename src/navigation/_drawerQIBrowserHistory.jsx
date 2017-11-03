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

class DrawerQIBrowserHistory extends React.Component {
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
          <ListItemText inset primary="How to clear your Browsing History" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="Internet Explorer" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="Mozilla Firefox" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="Google Chrome" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="Opera" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="Microsoft Edge" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="Vivaldi" />
          </ListItem>
        </Collapse>
      </div>
    );
  }
}

export default withStyles(styles)(DrawerQIBrowserHistory);
