import React from 'react'

import { withStyles } from 'material-ui/styles'
import ListSubheader from 'material-ui/List/ListSubheader'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import SecurityIcon from 'material-ui-icons/Security'
import Divider from 'material-ui/Divider'

import DrawerAUWebsiteIntegration from './_drawerAUWebsiteIntegration'
import DrawerAUCGIs from './_drawerAUCGIs'
import DrawerAURestoreFW from './_drawerAURestoreFW'

class DrawerQI extends React.Component {
  state = { open: true };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>

        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <SecurityIcon />
          </ListItemIcon>
          <ListItemText inset primary="Developers" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>

          <ListItem button>
            <ListItemText primary="VPN Tunnel" />
          </ListItem>

          <DrawerAUWebsiteIntegration />
          <DrawerAUCGIs />

          <ListItem button>
            <ListItemText primary="Restore WebUI" />
          </ListItem>

          <DrawerAURestoreFW />

          <ListItem button>
            <ListItemText primary="Analogue vs Digital" />
          </ListItem>

        </Collapse>

      </div>
    );
  }
}

export default DrawerQI
