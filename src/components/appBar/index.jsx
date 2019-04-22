import React, { PureComponent, Fragment } from 'react';
import Styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import AppBarComponent from './appBarRender';
import GifCard from '../gifCard';
import Welcome from './welcome';
import { giphyApiKey } from '../../keys.json';

const Wrapper = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
height: auto;
background-color: darkgray;
background-image: url(https://images.pexels.com/photos/131634/pexels-photo-131634.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)
`;
class AppBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data: [], random: '' };
  }

  componentDidMount() {
    this.onCloseIconClick();
  }

  onSearch = text => {
    this.setState({ isLoading: true });
    //  eslint-disable-next-line
    fetch(`https://api.giphy.com/v1/gifs/search?q=${text}&api_key=${giphyApiKey}`)
      .then(res => res.json())
      .then(
        result => {
          const { data = [] } = result;
          this.setState({ data, isLoading: false, error: '', text });
        },
        error => {
          this.setState({ isLoading: false, error, text: '' });
        }
      );
  };

  onCloseIconClick = () => {
    this.setState({ isLoading: true });
    //  eslint-disable-next-line
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${giphyApiKey}`)
      .then(res => res.json())
      .then(
        result => {
          const { data = [] } = result;
          this.setState({ isLoading: false, error: '', data, text: '' });
        },
        error => {
          this.setState({ isLoading: false, error, text: '' });
        }
      );
  };

  render() {
    const { data = [], isLoading, error, text, random } = this.state;
    return (
      <Fragment>
        <AppBarComponent
          onSearch={this.onSearch}
          text={text}
          onCloseIconClick={this.onCloseIconClick}
        />
        {isLoading && <LinearProgress />}
        {error && (
          <Typography component="h2" variant="h1" gutterBottom>
            {error}
          </Typography>
        )}

        <Wrapper>
          {data.map(obj => {
            const {
              images: {
                downsized: { url }
              }
            } = obj;
            return <GifCard url={url} key={url} />;
          })}
          {data.length === 0 && random && <Welcome url={random} />}
        </Wrapper>
      </Fragment>
    );
  }
}
export default AppBar;
