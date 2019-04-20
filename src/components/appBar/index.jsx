import React, { PureComponent, Fragment } from 'react';
import Styled from 'styled-components';
import AppBarComponent from './appBarRender';
import GifCard from '../gifCard';

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
    //  eslint-disable-next-line
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${text}&api_key=FyIGrVHWHbZIJHSwBsiGZat60OwKsqGs&limit=5`
    )
      .then(res => res.json())
      .then(
        result => {
          const { data = [] } = result;
          this.setState({ data });
        },
        error => console.log('TCL: AppBar -> error', error)
      );
  };

  render() {
    const { data = [] } = this.state;
    return (
      <Fragment>
        <AppBarComponent onSearch={this.onSearch} />
        <Wrapper>
          {data.map(obj => {
            const {
              images: {
                downsized: { url }
              }
            } = obj;
            return <GifCard url={url} />;
          })}
        </Wrapper>
      </Fragment>
    );
  }
}
export default AppBar;
