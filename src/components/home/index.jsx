import React, { PureComponent } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBarComponent from '../appBar';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#111' },
    secondary: { main: 'rgb(166, 166, 166)' }
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
