import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    maxWidth: 345,
    margin: 10,
    minWidth: 222
  },
  media: {
    height: 246
  }
};

function GifCard(props) {
  const { classes, url } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={`${url}`} title="Contemplative Reptile" />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
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
