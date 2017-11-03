import React from 'react'

import { withStyles } from 'material-ui/styles'
import ListSubheader from 'material-ui/List/ListSubheader'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'

import DrawerP from './_drawerP'
import DrawerQI from './_drawerQI'
import DrawerMD from './_drawerMD'
import DrawerIA from './_drawerIA'
import DrawerAU from './_drawerAU'

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  listSubheader: {
    background: 'white',
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
        <List subheader={<ListSubheader className={classes.listSubheader}>Products</ListSubheader>}>
          <DrawerP />
        </List>

        <Divider />

        <List subheader={<ListSubheader className={classes.listSubheader}>Quick Installation</ListSubheader>}>
          <DrawerQI />
        </List>

        <Divider />

        <List subheader={<ListSubheader className={classes.listSubheader}>Motion Detection</ListSubheader>}>
          <DrawerMD />
        </List>

        <Divider />

        <List subheader={<ListSubheader className={classes.listSubheader}>Internet Access</ListSubheader>}>
          <DrawerIA />
        </List>

        <Divider />

        <List subheader={<ListSubheader className={classes.listSubheader}>Advanced User</ListSubheader>}>
          <DrawerAU />
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(NestedList);
