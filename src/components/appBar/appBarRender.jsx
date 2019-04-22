import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    color: 'initial',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});

class AppBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.googleInput = React.createRef();
  }

  render() {
    const { classes, onSearch, text, onCloseIconClick } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Giphy Hub
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search gif..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputRef={input => {
                  this.searchField = input;
                }}
                onKeyPress={e => {
                  const {
                    target: { value }
                  } = e;
                  if (e.key === 'Enter' && value) {
                    onSearch(value);
                  }
                }}
              />
            </div>
            {text && (
              <IconButton
                className={classes.menuButton}
                color="inherit"
                onClick={() => {
                  this.searchField.value = '';
                  onCloseIconClick([
                    { stateName: 'data', value: [] },
                    { stateName: 'text', value: '' }
                  ]);
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AppBarComponent.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  onSearch: PropTypes.func.isRequired,
  text: PropTypes.string,
  onCloseIconClick: PropTypes.func.isRequired
};
AppBarComponent.defaultProps = {
  text: ''
};

export default withStyles(styles)(AppBarComponent);
