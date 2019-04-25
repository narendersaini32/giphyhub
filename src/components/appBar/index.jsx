import React, { PureComponent, Fragment } from 'react';
import Styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBarComponent from './appBarRender';
import GifCard from '../gifCard';
import { fetchCall, findRoute } from '../../utils';
import Welcome from './welcome';

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
      color: theme.palette.secondary.dark,
      marginBottom: '6px',
      marginLeft: '65px',
      paddingTop: '36px'
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

  handleState = ({ key, value }) => {
    this.setState({ [key]: value });
  };

  render() {
    const { data = [], isLoading, error, text } = this.state;
    const { location, classes } = this.props;
    const gifType = findRoute(location);
    const heading = gifType === 'home' && !text ? 'Welcome' : `${text || gifType} gifs`;

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
          handleState={this.handleState}
        />
        {isLoading && <LinearProgress />}
        <Wrapper className={classes.backgroundColor}>
          <Typography variant="h5" className={classes.gifType}>
            {heading}
          </Typography>
          <FlexBox>
            {error || data.length <= 1 ? (
              <Typography variant="h5" className={classes.gifType}>
                {error || <Welcome url={data.length === 1 ? data[0].images.downsized.url : ''} />}
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
          {!error && data.length > 1 && (
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
