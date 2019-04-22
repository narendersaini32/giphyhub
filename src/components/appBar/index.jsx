import React, { PureComponent, Fragment } from 'react';
import Styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import AppBarComponent from './appBarRender';
import GifCard from '../gifCard';
import { giphyApiKey } from '../../keys.json';

const Wrapper = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;
class AppBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSearch = text => {
    this.setState({ isLoading: true });
    //  eslint-disable-next-line
    fetch(`https://api.giphy.com/v1/gifs/search?q=${text}&api_key=${giphyApiKey}&limit=10`)
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

  handleState = (changesList = []) => {
    changesList.map(obj => {
      const { stateName, value } = obj;
      this.setState({ [stateName]: value });
      return '';
    });
  };

  render() {
    const { data = [], isLoading, error, text } = this.state;
    return (
      <Fragment>
        <AppBarComponent onSearch={this.onSearch} text={text} onCloseIconClick={this.handleState} />
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
        </Wrapper>
      </Fragment>
    );
  }
}
export default AppBar;
