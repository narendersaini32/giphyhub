import React, { PureComponent, Fragment } from 'react';
import Styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import $ from 'jquery';
import AppBarComponent from './appBarRender';
import GifCard from '../gifCard';
import { fetchCall, findRoute } from '../../utils';
import Welcome from './welcome';

const styles = theme => {
  return {
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
      paddingTop: '36px',
      top: 40,
      position: 'absolute'
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
position: absolute;
top: 100px;
`;

class AppBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {
    const { location } = this.props;
    fetchCall.call(this, location);
    $(document).on('scroll', () => {
      if ($(document).height() - $(document).scrollTop() - $(window).height() < 50) {
        fetchCall.call(this, location, '', true);
      }
    });
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
    const heading = gifType === 'home' && !text ? 'Trending' : `${text || gifType} gifs`;

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
          isLoading={isLoading}
        />
        <Wrapper className={classes.backgroundColor}>
          <Typography variant="h5" className={classes.gifType}>
            {heading}
          </Typography>
          <FlexBox className={classes.backgroundColor}>
            {error || data.length <= 1 ? (
              <Typography variant="h5" className={classes.gifType}>
                {error ||
                  (gifType !== 'home' && (
                    <Welcome
                      url={data.length === 1 ? data[0].images.downsized.url : ''}
                      routeName={gifType}
                    />
                  ))}
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
