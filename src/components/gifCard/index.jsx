import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const styles = theme => {
  return {
    card: {
      maxWidth: 345,
      margin: 10,
      minWidth: 222,
      transition: 'all 0.5s ease-in-out',
      '&:hover': {
        transform: 'scale(1.5)',
        zIndex: 4
      }
    },
    media: {
      height: 246,
      backgroundSize: 'cover',
      backgroundColor: theme.palette.primary.main
    },
    buttonRoot: {
      margin: 'auto'
    }
  };
};

function GifCard(props) {
  const { classes, url } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={`${url}`} />
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          className={classes.buttonRoot}
          onClick={() => {
            window.open(url); // eslint-disable-line
          }}
        >
          Download
        </Button>
      </CardActions>
    </Card>
  );
}

GifCard.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  url: PropTypes.string.isRequired
};

export default withStyles(styles)(GifCard);
