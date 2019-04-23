import { giphyApiKey } from '../keys.json';
// import { findRoute } from './index';

export default async function fetchCall(route, searchText, loadMore, clear) {
  const { count = 1, data, text } = this.state;
  //   const routeName = findRoute(route);
  this.setState({ isLoading: true });
  try {
    let url;
    if (searchText) {
      url = `https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=${giphyApiKey}&limit=10`;
    } else if (loadMore) {
      if (text) {
        url = `https://api.giphy.com/v1/gifs/search?q=${text}&api_key=${giphyApiKey}&limit=10&offset=${count *
          11}}`;
      } else {
        url = `https://api.giphy.com/v1/gifs/trending?api_key=${giphyApiKey}&limit=10&offset=${count *
          11}}`;
      }
    } else {
      url = `https://api.giphy.com/v1/gifs/trending?api_key=${giphyApiKey}&limit=10`;
    }
    //  eslint-disable-next-line
    let result = await fetch(url);
    result = await result.json();
    const { data: newData = [] } = result;
    const state = {
      data: newData,
      isLoading: false,
      error: '',
      text: clear ? '' : searchText || text
    };
    if (loadMore) {
      state.data = data.concat(newData);
      state.count = count + 1;
    }
    this.setState(state);
  } catch (error) {
    this.setState({ isLoading: false, error: 'Something Went Wrong', text: '' });
  }
}
