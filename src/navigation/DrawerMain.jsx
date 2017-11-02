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

import DrawerMD from './_drawerMD'
import DrawerIA from './_drawerIA'
import DrawerIADDNSService from './_drawerIADDNSService'

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

class NestedList extends React.Component {
  state = { open: false };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>

        <List subheader={<ListSubheader>Motion Detection</ListSubheader>}>
          <DrawerMD />
        </List>

        <Divider />

        <List subheader={<ListSubheader>Remote Access</ListSubheader>}>
          <DrawerIA />
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(NestedList);
