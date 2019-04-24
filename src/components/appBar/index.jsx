import React, { PureComponent, Fragment } from 'react';
import Styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBarComponent from './appBarRender';
import GifCard from '../gifCard';
import { fetchCall, findRoute } from '../../utils';

const styles = theme => {
  return {
    button: {
      display: 'block',
      fontSize: '1em',
      color: '#fff',
      fontWeight: 500,
      textTransform: 'uppercase',
      fontFamily: '$sans',
      cursor: 'pointer',
      height: 38,
      margin: 'auto',
      position: 'relative',
      bottom: 5,
      borderRadius: 9,
      backgroundColor: theme.palette.primary.main,
      outline: 'none',
      border: `1 solid ${theme.palette.secondary.main}`
    },
    backgroundColor: {
      backgroundColor: theme.palette.primary.main
    },
    gifType: {
      fontSize: '14px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      WebkitFontSmoothing: 'antialiased',
      color: 'rgb(166, 166, 166)',
      marginBottom: '6px',
      marginLeft: '65px'
    }
  };
};
const Wrapper = Styled.div`
min-height: -webkit-fill-available;
height: auto;,
`;
const FlexBox = Styled.div`
display: flex;
flex-wrap: wrap;
padding: 10px;
justify-content: space-evenly;
`;

class AppBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {
    const { location } = this.props;
    fetchCall.call(this, location);
  }

  componentWillReceiveProps(nextProps) {
    const { location } = nextProps;
    fetchCall.call(this, location);
  }

  render() {
    const { data = [], isLoading, error, text } = this.state;
    const { location, classes } = this.props;
    let gifType = findRoute(location);
    gifType = gifType === 'home' ? 'trending' : gifType;
    return (
      <Fragment>
        <AppBarComponent
          onSearch={searchText => {
            fetchCall.call(this, location, searchText);
          }}
          text={text}
          onCloseIconClick={() => {
            fetchCall.call(this, location, '', false, true);
          }}
        />
        {isLoading && <LinearProgress />}
        <Wrapper className={classes.backgroundColor}>
          <Typography variant="h5" className={classes.gifType}>
            {`${text || gifType} Gifs`}
          </Typography>
          <FlexBox>
            {error || !data.length ? (
              <Typography variant="h5" className={classes.gifType}>
                {error || 'Please Search Something'}
              </Typography>
            ) : (
              data.map(obj => {
                const {
                  images: {
                    downsized: { url }
                  }
                } = obj;
                return <GifCard url={url} key={url} />;
              })
            )}
          </FlexBox>
          {!error && data.length > 0 && (
            <button
              type="button"
              className={classes.button}
              onClick={() => {
                fetchCall.call(this, location, '', true);
              }}
            >
              Load More
            </button>
          )}
        </Wrapper>
      </Fragment>
    );
  }
}
AppBar.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired
};
export default withStyles(styles)(AppBar);
