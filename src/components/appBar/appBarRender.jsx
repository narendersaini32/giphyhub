import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import Home from '@material-ui/icons/Home';
import Trending from '@material-ui/icons/TrendingUp';
import Sticker from '@material-ui/icons/Message';
import Translate from '@material-ui/icons/Translate';
import { Link } from 'react-router-dom';

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
    fontStyle: 'italic',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },
    fontWeight: 'lighter'
  },
  normalText: {
    fontStyle: 'italic',
    color: 'black',
    fontWeight: 'lighter',
    margin: 'auto'
  },
  search: {
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
    },
    right: '37px',
    position: 'absolute',
    boxShadow:
      '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
    borderRadius: '24px'
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
    },
    fontWeight: 'lighter',
    fontStyle: 'italic',
    color: 'black'
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
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  margin: {
    margin: theme.spacing.unit
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
            <Link to="/">
              <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="Add"
                className={classes.margin}
              >
                <Home className={classes.extendedIcon} />
                Home
              </Fab>
            </Link>
            <Link to="/trending">
              <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="Add"
                className={classes.margin}
              >
                <Trending className={classes.extendedIcon} />
                Trending
              </Fab>
            </Link>
            <Link to="/sticker">
              <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="Add"
                className={classes.margin}
              >
                <Sticker className={classes.extendedIcon} />
                Stickers
              </Fab>
            </Link>
            <Link to="/translate">
              <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="Add"
                className={classes.margin}
              >
                <Translate className={classes.extendedIcon} />
                Translate
              </Fab>
            </Link>
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
                  onCloseIconClick();
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
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
