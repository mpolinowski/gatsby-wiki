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

        </Collapse>

      </div>
    );
  }
}

export default DrawerQI
