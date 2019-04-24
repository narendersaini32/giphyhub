import React, { PureComponent, Fragment } from 'react';
import Styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import AppBarComponent from './appBarRender';
import GifCard from '../gifCard';
import { fetchCall } from '../../utils';

const Wrapper = Styled.div`
min-height: -webkit-fill-available;
height: auto;
`;
const FlexBox = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;
const Button = Styled.button`
display: block;
  border: 0;
  font-size: 1em;
  background-color: #4054b4;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  font-family: $sans;
  cursor: pointer;
  height:38px;
  margin: auto;
  position: relative;
  bottom: 5px;
  border-radius: 9px;
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
    const { location } = this.props;
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
        <Wrapper>
          <FlexBox>
            {error ? (
              <Typography variant="h5" style={{ marginTop: '25%' }}>
                {error}
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
            <Button
              onClick={() => {
                fetchCall.call(this, location, '', true);
              }}
            >
              Load More
            </Button>
          )}
        </Wrapper>
      </Fragment>
    );
  }
}
AppBar.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired
};
export default AppBar;
