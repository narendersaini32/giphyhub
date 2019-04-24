import React, { PureComponent } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import AppBarComponent from '../appBar';

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' } // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true }
});
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppBarComponent {...this.props} />
      </MuiThemeProvider>
    );
  }
}
export default Home;
