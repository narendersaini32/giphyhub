import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    top: '10%',
    position: 'relative'
  },
  h5: {
    textAlign: 'center'
  }
});

function Welcome(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography className={classes.h5} variant="h5" component="h3">
          Welcome to Giphy Hub.
        </Typography>
      </Paper>
    </div>
  );
}

Welcome.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(styles)(Welcome);
