import React from 'react'

import { withStyles } from 'material-ui/styles'
import ListSubheader from 'material-ui/List/ListSubheader'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import PublicIcon from 'material-ui-icons/Public'
import Collapse from 'material-ui/transitions/Collapse'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import Divider from 'material-ui/Divider'

import DrawerIADDNSService from './_drawerIADDNSService'
import DrawerIAPortForwarding from './_drawerIAPortForwarding'
import DrawerIAThirdDDNS from './_drawerIAThirdDDNS'

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

class DrawerIA extends React.Component {
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
          <ListItemText inset primary="Remote Control" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>

          <ListItem button>
            <ListItemText primary="The P2P Service" />
          </ListItem>

          <DrawerIADDNSService />
          <DrawerIAPortForwarding />

          <ListItem button>
            <ListItemText primary="Mobile Access" />
          </ListItem>

          <DrawerIAThirdDDNS />

        </Collapse>

      </div>
    );
  }
}

export default withStyles(styles)(DrawerIA);
