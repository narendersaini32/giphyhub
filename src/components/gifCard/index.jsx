import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import { Share } from '../reuseableComponents';

const styles = theme => {
  return {
    card: {
      backgroundColor: theme.palette.primary.light,
      maxWidth: 324,
      margin: 10,
      minWidth: 222,
      height: 'fit-content',
      transition: 'all 0.5s ease-in-out',
      '&:hover': {
        transform: 'scale(1.02)'
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
  const { classes, url, downloadButton } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={`${url}`} />
      </CardActionArea>
      <CardActions>{downloadButton && <Share url={url} />}</CardActions>
    </Card>
  );
}

GifCard.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  url: PropTypes.string.isRequired,
  downloadButton: PropTypes.bool
};
GifCard.defaultProps = {
  downloadButton: true
};

export default withStyles(styles)(GifCard);
