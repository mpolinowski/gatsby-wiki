import React from 'react'

import { withStyles } from 'material-ui/styles'
import ListSubheader from 'material-ui/List/ListSubheader'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import InboxIcon from 'material-ui-icons/MoveToInbox'
import DraftsIcon from 'material-ui-icons/Drafts'
import SendIcon from 'material-ui-icons/Send'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import Divider from 'material-ui/Divider'

import DrawerPIndoorCameras from './_drawerPIndoorCameras'
import DrawerPOutdoorCameras from './_drawerPOutdoorCameras'
import DrawerPSoftware from './_drawerPSoftware'
import DrawerPWebUserInterface from './_drawerPWebUserInterface'

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

        <DrawerPIndoorCameras />
        <DrawerPOutdoorCameras />

        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText inset primary="Lenses" />
        </ListItem>

        <DrawerPSoftware />
        <DrawerPWebUserInterface />

        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText inset primary="IN-LAN" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText inset primary="IN-PoE" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText inset primary="IN-Route" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText inset primary="IN-Motion" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText inset primary="IN-Frared" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText inset primary="IN-Mikro" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText inset primary="Downloads" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText inset primary="Usermanuals" />
        </ListItem>

      </div>
    );
  }
}

export default withStyles(styles)(DrawerIA)
