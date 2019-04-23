import React, { PureComponent, Fragment } from 'react';
import Styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import AppBarComponent from './appBarRender';
import GifCard from '../gifCard';
import { giphyApiKey } from '../../keys.json';

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
    this.state = { data: [], count: 1 };
  }

  componentDidMount() {
    this.onCloseIconClick();
  }

  onSearch = async text => {
    this.setState({ isLoading: true });
    try {
      //  eslint-disable-next-line
      let result = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${text}&api_key=${giphyApiKey}&limit=10`
      );
      result = await result.json();

      const { data = [] } = result;
      this.setState({ data, isLoading: false, error: '', text });
    } catch (error) {
      this.setState({ isLoading: false, error: 'Something Went Wrong', text: '' });
    }
  };

  onCloseIconClick = async () => {
    this.setState({ isLoading: true });
    try {
      //  eslint-disable-next-line
      let result = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${giphyApiKey}&limit=10`
      );
      result = await result.json();
      console.log('TCL: AppBar -> onCloseIconClick -> result', result);
      const { data = [] } = result;
      this.setState({ isLoading: false, error: '', data, text: '' });
    } catch (error) {
      this.setState({ isLoading: false, error: 'Something Went Wrong', text: '' });
    }
  };

  loadMore = async () => {
    const { text, data, count } = this.state;
    let url;
    if (text) {
      url = `https://api.giphy.com/v1/gifs/search?q=${text}&api_key=${giphyApiKey}&limit=10&offset=${count *
        11}}`;
    } else {
      url = `https://api.giphy.com/v1/gifs/trending?api_key=${giphyApiKey}&limit=10&offset=${count *
        11}}`;
    }
    try {
      //  eslint-disable-next-line
      let result = await fetch(url);
      result = await result.json();
      const { data: newData = [] } = result;
      this.setState({
        isLoading: false,
        error: '',
        data: data.concat(newData),
        count: count + 1
      });
    } catch (error) {
      this.setState({ isLoading: false, error: 'Something Went Wrong' });
    }
  };

  render() {
    const { data = [], isLoading, error, text } = this.state;
    return (
      <Fragment>
        <AppBarComponent
          onSearch={this.onSearch}
          text={text}
          onCloseIconClick={this.onCloseIconClick}
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
          {!error && data.length > 0 && <Button onClick={this.loadMore}>Load More</Button>}
        </Wrapper>
      </Fragment>
    );
  }
}

export default AppBar;
