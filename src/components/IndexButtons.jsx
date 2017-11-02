import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link'

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

function IndexButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Link to="/search/" style={{ textDecoration: 'none' }}>
        <Button raised color="primary" className={classes.button}>
          ElasticSearch
        </Button>
      </Link>
      <Link to="/page-1/" style={{ textDecoration: 'none' }}>
        <Button raised color="primary" className={classes.button}>
          Sorted Table
        </Button>
      </Link>
      <Link to="/page-2/" style={{ textDecoration: 'none' }}>
        <Button raised color="primary" className={classes.button}>
          GraphQL Table
        </Button>
      </Link>
      <Link to="/nestedroutes/" style={{ textDecoration: 'none' }}>
        <Button raised color="primary" className={classes.button}>
          Forms &amp; Photogrids
        </Button>
      </Link>
    </div>
  );
}

IndexButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexButtons);
