import React from 'react'

import { withStyles } from 'material-ui/styles'
import ListSubheader from 'material-ui/List/ListSubheader'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import InboxIcon from 'material-ui-icons/MoveToInbox'
import DraftsIcon from 'material-ui-icons/Drafts'
import PublicIcon from 'material-ui-icons/Public'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import Divider from 'material-ui/Divider'
import NavigateNext from 'material-ui-icons/NavigateNext'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: "inherit",
    color: "white",
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class DrawerIAPortForwarding extends React.Component {
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
            <PublicIcon />
          </ListItemIcon>
          <ListItemText inset primary="Port Forwarding" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="Telekom Speedport" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="D-Link" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="Netgear" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="Vodafon Easybox" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="Pirelli Router" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NavigateNext />
            </ListItemIcon>
            <ListItemText inset primary="TP-Link" />
          </ListItem>
        </Collapse>
      </div>
    );
  }
}

export default withStyles(styles)(DrawerIAPortForwarding);
