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
    fetchCall.call(this);
  }

  onCloseIconClick = async () => {
    // this.setState({ isLoading: true });
    // try {
    //   //  eslint-disable-next-line
    //   let result = await fetch(
    //     `https://api.giphy.com/v1/gifs/trending?api_key=${giphyApiKey}&limit=10`
    //   );
    //   result = await result.json();
    //   console.log('TCL: AppBar -> onCloseIconClick -> result', result);
    //   const { data = [] } = result;
    //   this.setState({ isLoading: false, error: '', data, text: '' });
    // } catch (error) {
    //   this.setState({ isLoading: false, error: 'Something Went Wrong', text: '' });
    // }
  };

  loadMore = async () => {
    // const { text, data, count } = this.state;
    // let url;
    // if (text) {
    //   url = `https://api.giphy.com/v1/gifs/search?q=${text}&api_key=${giphyApiKey}&limit=10&offset=${count *
    //     11}}`;
    // } else {
    //   url = `https://api.giphy.com/v1/gifs/trending?api_key=${giphyApiKey}&limit=10&offset=${count *
    //     11}}`;
    // }
    // try {
    //   //  eslint-disable-next-line
    //   let result = await fetch(url);
    //   result = await result.json();
    //   const { data: newData = [] } = result;
    //   this.setState({
    //     isLoading: false,
    //     error: '',
    //     data: data.concat(newData),
    //     count: count + 1
    //   });
    // } catch (error) {
    //   this.setState({ isLoading: false, error: 'Something Went Wrong' });
    // }
  };

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
