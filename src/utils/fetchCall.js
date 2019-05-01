import { giphyApiKey } from '../keys.json';
import { findRoute } from './index';

export default async function fetchCall(route, searchText, loadMore, clear) {
  const { count = 1, data, text } = this.state;
  let queryText = searchText;
  const routeName = findRoute(route);
  let type = 'gifs/trending';
  const limit = 10;
  if (routeName === 'home') {
    type = queryText ? 'gifs/search' : 'gifs/trending';
  } else if (routeName === 'sticker') {
    type = queryText ? 'stickers/search' : 'stickers/trending';
  } else if (routeName === 'translate') {
    type = 'gifs/translate';
    queryText = queryText || 'naruto';
  }
  this.setState({ isLoading: true });
  try {
    let url;
    if (queryText) {
      url = `https://api.giphy.com/v1/${type}?q=${queryText}&api_key=${giphyApiKey}&limit=${limit}&s=${searchText}&rating=g`;
    } else if (loadMore) {
      if (text) {
        url = `https://api.giphy.com/v1/${type}?q=${text}&api_key=${giphyApiKey}&limit=${limit}&offset=${count *
          11}&rating=g`;
      } else {
        url = `https://api.giphy.com/v1/${type}?api_key=${giphyApiKey}&limit=${limit}&offset=${count *
          11}&rating=g`;
      }
    } else {
      url = `https://api.giphy.com/v1/${type}?&api_key=${giphyApiKey}&limit=${limit}&rating=g`;
    }
    let result = await fetch(url);
    result = await result.json();
    let { data: newData = [] } = result;
    if (!Array.isArray(newData)) {
      newData = [newData];
    }
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
