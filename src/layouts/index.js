import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import List from 'material-ui/List'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Hidden from 'material-ui/Hidden'
import Divider from 'material-ui/Divider'
import MenuIcon from 'material-ui-icons/Menu'
import MenuItem from 'material-ui/Menu/MenuItem'
import ListSubheader from 'material-ui/List/ListSubheader';
import TextField from 'material-ui/TextField'

import { mailFolderListItems, otherMailFolderListItems } from './tileData'
import NestedList from './tileDataClass'
import Logo from '../static/instar_250x65.png'
import './index.css'

const drawerWidth = 250

const styles = theme => ({
  root: {
    width: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    color: '#333',
    backgroundColor: '#fff',
    zIndex: 10,
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      color: 'white',
      backgroundColor: '#137bdf',
      position: 'relative',
      height: '100%',
      marginBottom: '-5000px',
      paddingBottom: '5000px',
      zIndex: 1,
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  menu: {
    width: 200,
  },
})

class TemplateWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <Link className="navbar-brand" to="/"> <img src={Logo} alt="INSTAR Deutschland GmbH" className="logo" /> </Link>
        <div className={classes.drawerHeader} />
        <List subheader={<ListSubheader>Products</ListSubheader>}>{mailFolderListItems}</List>
        <Divider />
        <List subheader={<ListSubheader>Quick Installation</ListSubheader>}>{otherMailFolderListItems}</List>
        <Divider />
        <NestedList />
        <Divider />
      </div>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                Instar Wiki
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              type="temporary"
              anchor={theme.direction === 'rtl' ? 'left' : 'right'}
              open={this.state.mobileOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
              onRequestClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden mdDown implementation="css">
            <Drawer
              type="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <div>
              <Helmet
                  title="Gatsby Wiki"
                  meta={[
                    { name: 'description', content: 'INSTAR Knowledgebase' },
                    { name: 'keywords', content: 'INSTAR, IP Cameras' },
                  ]}
                />
              <div
                  style={{
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '0px 1.0875rem 1.45rem',
                    paddingTop: 0,
                  }}
                >
                  {this.props.children()}
                </div>
              </div>
          </main>
        </div>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(TemplateWrapper)
