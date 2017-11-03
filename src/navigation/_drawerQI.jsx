import React from 'react'

import { withStyles } from 'material-ui/styles'
import ListSubheader from 'material-ui/List/ListSubheader'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import BuildIcon from 'material-ui-icons/Build'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import Divider from 'material-ui/Divider'

import DrawerQICameraScanner from './_drawerQICameraScanner'
import DrawerQILiveVideo from './_drawerQILiveVideo'
import DrawerQIUpdate from './_drawerQIUpdate'
import DrawerQIBrowserHistory from './_drawerQIBrowserHistory'

class DrawerQI extends React.Component {
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
          <ListItemText inset primary="Setup Guides" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>

          <ListItem button>
            <ListItemText primary="How does an IP Camera Work" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="After Unpacking" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="First Steps" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Power over Ethernet" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Powerline" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Direct LAN Connection" />
          </ListItem>

          <DrawerQICameraScanner />

          <ListItem button>
            <ListItemText primary="Language Selection" />
          </ListItem>

          <DrawerQILiveVideo />

          <ListItem button>
            <ListItemText primary="Creating User Accounts" />
          </ListItem>

          <DrawerQIUpdate />
          <DrawerQIBrowserHistory />

          <ListItem button>
            <ListItemText primary="Wireless Connection" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="ONVIF" />
          </ListItem>

        </Collapse>

      </div>
    );
  }
}

export default DrawerQI
