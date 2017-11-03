import React from 'react'

import { withStyles } from 'material-ui/styles'
import ListSubheader from 'material-ui/List/ListSubheader'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import BuildIcon from 'material-ui-icons/Build'
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
        <ListItem button>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText inset primary="How does an IP Camera Work" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText inset primary="After Unpacking" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText inset primary="First Steps" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText inset primary="Power over Ethernet" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText inset primary="Powerline" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText inset primary="Direct LAN Connection" />
        </ListItem>

        <DrawerQICameraScanner />

        <ListItem button>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText inset primary="Language Selection" />
        </ListItem>

        <DrawerQILiveVideo />

        <ListItem button>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText inset primary="Creating User Accounts" />
        </ListItem>

        <DrawerQIUpdate />
        <DrawerQIBrowserHistory />

        <ListItem button>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText inset primary="Wireless Connection" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText inset primary="ONVIF" />
        </ListItem>

      </div>
    );
  }
}

export default DrawerQI
