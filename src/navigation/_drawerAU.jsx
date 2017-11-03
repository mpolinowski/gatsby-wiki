import React from 'react'

import { withStyles } from 'material-ui/styles'
import ListSubheader from 'material-ui/List/ListSubheader'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import SecurityIcon from 'material-ui-icons/Security'
import Divider from 'material-ui/Divider'

import DrawerAUWebsiteIntegration from './_drawerAUWebsiteIntegration'
import DrawerAUCGIs from './_drawerAUCGIs'
import DrawerAURestoreFW from './_drawerAURestoreFW'

class DrawerQI extends React.Component {
  state = { open: false };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <ListItem button>
          <ListItemIcon>
            <SecurityIcon />
          </ListItemIcon>
          <ListItemText inset primary="VPN Tunnel" />
        </ListItem>

        <DrawerAUWebsiteIntegration />
        <DrawerAUCGIs />

        <ListItem button>
          <ListItemIcon>
            <SecurityIcon />
          </ListItemIcon>
          <ListItemText inset primary="Restore WebUI" />
        </ListItem>

        <DrawerAURestoreFW />

        <ListItem button>
          <ListItemIcon>
            <SecurityIcon />
          </ListItemIcon>
          <ListItemText inset primary="Analogue vs Digital" />
        </ListItem>

      </div>
    );
  }
}

export default DrawerQI
