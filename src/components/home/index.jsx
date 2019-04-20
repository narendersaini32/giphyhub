import React, { PureComponent } from 'react';
import AppBarComponent from '../appBar';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <AppBarComponent />;
  }
}
export default Home;
