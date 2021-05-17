import React, { ChangeEvent, Component, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {BookContext} from '../context/context';
import {useContext} from 'react';
import { deepOrange } from '@material-ui/core/colors';
// import Avatar from '@material-ui/core/Avatar';
import {logging} from './all_requests';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Otpgenerate, OtpLogging} from './all_requests';
import { AnyARecord } from 'dns';





const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}


export default function SignIn() {
  const classes = useStyles();
  const items = useContext(BookContext);
  const [mail, setMail] = useState('user');
  const [pass, setPass] = useState('pass');
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [phNumber, setPhNumber] = React.useState('');
  const [notification, setNotification] = useState('');
  const [otp, setOtp] = useState(0);
  // console.log(items);

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleDialogeClick = (e:any) => {
    setOtp(e.target.value)
  }

  const dialogs = () =>{
    return(
      <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <form onSubmit = {handleDialogeClick}>
            <DialogTitle id="form-dialog-title">OTP</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please Enter Otp before 5 minutes.
              </DialogContentText>
              <TextField
                margin="dense"
                id="otp"
                label="Enter OTP"
                // onChange = {handleDialogeClick}
                fullWidth
              />
            
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button type = "submit" onClick={()=>{
                OtpLogging(phNumber, otp)
                .then(data => {
                  console.log(data.message)
                })
              }} color="primary">
                Submit
              </Button>

            </DialogActions>
            </form>
          </Dialog>
    );
  }



  const OtpSignIn = () => {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in Using OTP
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Mobile Nummber(start with contry code ex. +91...)"
              name="phone"
              type = "string"
              autoFocus
              onChange = {(e:ChangeEvent<HTMLInputElement>)=>setPhNumber(e.currentTarget.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick = {(e) => {
                e.preventDefault();
                setOpen(true)
                Otpgenerate(phNumber)
                .then(data =>{
                  console.log(data.message)
                  setNotification(data.message)
                })
              }}
            >
              Generate OTP
            </Button>
          </form>
          {dialogs()}
        </div>
      </Container>
    );
  }
  
  const GoforSignIn = ()=>{
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              onChange = {(e:ChangeEvent<HTMLInputElement>)=>setMail(e.currentTarget.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange = {(e:ChangeEvent<HTMLInputElement>)=>setPass(e.currentTarget.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick = {(e) => {
                e.preventDefault();
                logging(mail, pass, items.userDispatch)
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }

  const AlreadySign = () => {
    return(
      <div> 
        <Container>
          <Avatar className = {classes.orange}>{items.user.mail.charAt(0)}</Avatar>
          <Typography variant = {'h4'}>
            Hello Mr. {items.user.mail} 
            You have been Succesfully Logind.
            Want to signout <Button onClick = {()=> {
              items.userDispatch({type: 'SIGN_OUT'})
            }}>Click HERE</Button>
          </Typography>
        </Container>
      </div>
    )
  }

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return(
    <div>
      {/* {GoforSignIn()} */}
      {items.user.login ? AlreadySign() : 
      // GoforSignIn()
        <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Sign In Using Username" {...a11yProps(0)} />
            <Tab label="Sign In Using OTP" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          {/* <GoforSignIn /> */}
          {GoforSignIn()};
        </TabPanel>
        <TabPanel value={value} index={1}>
          {OtpSignIn()}
        </TabPanel>
      </div>
      }
    </div>
  )
}