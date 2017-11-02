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
import StarBorder from 'material-ui-icons/StarBorder'

import DrawerMDNotification from './_drawerMDNotification'
import DrawerMDSetup from './_drawerMDSetup'
import DrawerMDSDCard from './_drawerMDSDCard'
import DrawerMDAlarmFTP from './_drawerMDAlarmFTP'
import DrawerMDRouterFTP from './_drawerMDRouterFTP'
import DrawerMDCloud from './_drawerMDCloud'

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

class DrawerMD extends React.Component {
  state = { open: false };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <DrawerMDSetup />

        <DrawerMDNotification />

        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText inset primary="Video Recording" />
        </ListItem>

        <DrawerMDSDCard />
        <DrawerMDAlarmFTP />
        <DrawerMDRouterFTP />

        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText inset primary="FTP Server Setup" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText inset primary="Alarmserver" />
        </ListItem>

        <DrawerMDCloud />
      </div>
    );
  }
}

export default withStyles(styles)(DrawerMD);
