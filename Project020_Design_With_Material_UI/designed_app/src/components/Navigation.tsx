import React, {ChangeEvent, useContext} from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MenuItem, Select } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
// import { fade, Theme, createStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { AccountCircle } from '@material-ui/icons';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {BookContextProvider, BookContext} from '../context/context';
import BookList from './BookList';
import AddBook from './AddBook';
import Details from './Details';
import SignIn from './SignIn';
import SignUp from './Signup';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import Search from './search';
import { AnyRecord } from 'dns';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'inline-bloack',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [option, setOption] = React.useState('value');
  const [value, setValue] = React.useState('value');
  const open = Boolean(anchorEl);
  const [searc, setSearch] = React.useState(false);

  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const OptionHandler = (e:any) => {
    setOption(e.target.value)
  }

  const ValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
    // console.log(option, e.currentTarget.value);
    setValue(e.currentTarget.value);
    setSearch(true);
    // <Search option = {option} value = {e.currentTarget.value}/>
  }

  return (
    <div>
        <Router>
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <IconButton onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
                <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose} component = {Link} to ="/">Home</MenuItem>
                <MenuItem onClick={handleClose} component = {Link} to ="/addbook">Add Book</MenuItem>
            </Menu>
            <Typography variant="h6" className={classes.title}>
                The Book App
            </Typography>

            
            <div className={classes.search}>
                <Select label = "options"  onChange = {OptionHandler}>
                  <MenuItem value = 'title'>Title</MenuItem>
                  <MenuItem value = 'author'>Author</MenuItem>
                  <MenuItem value = 'rating'>Rating</MenuItem>
                  <MenuItem value = 'price'>Price</MenuItem>
                </Select>
                <div className={classes.searchIcon}>
                <SearchIcon />
                </div>
                <InputBase
                onChange = {ValueHandler}
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            {/* <Button color="inherit">Login</Button> */}
            <IconButton component = {Link} to ="/signin">
                <AccountCircle />
            </IconButton>
            </Toolbar>
        </AppBar>
        </div>
        <br></br>
        <br></br>
        <div>
            <BookContextProvider >
            <Switch>
                <Route exact path = '/'>
                  <div>
                    {searc?<Search option = {option} value = {value}/>:
                      <BookList />}
                  </div>
                </Route>
                <Route path = '/addbook' component = {AddBook}></Route>
                <Route path = '/signin' component = {SignIn}></Route>
                <Route path = '/details/:id' component = {Details}></Route>
                <Route path = '/notfound'></Route>
                <Route path = '/signup' component = {SignUp}></Route>
            </Switch>
            </BookContextProvider>
        </div>
        </Router>
    </div>
  );
}
