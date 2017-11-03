import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'

import ResponsiveDrawer from '../components/ResponsiveDrawer'
import './index.css'

const styles = theme => ({
  root: {
    width: '100%',
  },
  appFrame: {
    display: 'flex',
    width: '100%',
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
})

class TemplateWrapper extends React.Component {

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
      <Helmet
          title="Gatsby Wiki"
          meta={[
            { name: 'description', content: 'INSTAR Knowledgebase' },
            { name: 'keywords', content: 'INSTAR, IP Cameras' },
          ]}
        />
        <div className={classes.appFrame}>

          <ResponsiveDrawer />

          <main className={classes.content}>
            <div>
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
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(TemplateWrapper)
