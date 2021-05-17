import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { ChangeEvent, useState } from 'react';
import {AddingData} from './all_requests';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router';
import { BookContext } from '../context/context';
import { useContext } from 'react';

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
}));

export default function SignIn() {
  const items =  useContext(BookContext);
  const history = useHistory();
  const classes = useStyles();
  const [added, setAdded] = useState(false);
  const [title, setTitle] = useState('title');
  const [author, setAuthor] = useState('author');
  const [price, setPrice] = useState('price');
  const [rating, setRating] = useState('rating');
  const [cover, setCover] = useState('cover');


  return (
    <Container component="main" maxWidth="xs">
      <div>
        {added ?
        <Alert variant="filled" severity="success">
          Book Added Succesfully — check it out!
        </Alert>:null}
      </div>
      <CssBaseline />
      <div className={classes.paper}>
          <MenuBookIcon />
        <Typography component="h1" variant="h5">
          Add Book
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoFocus
            onChange = {(e:ChangeEvent<HTMLInputElement>)=> setTitle(e.currentTarget.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="author"
            label="Author"
            type="text"
            id="author"
            onChange = {(e:ChangeEvent<HTMLInputElement>)=> setAuthor(e.currentTarget.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="price"
            label="Price"
            name="price"
            autoFocus
            onChange = {(e:ChangeEvent<HTMLInputElement>)=> setPrice(e.currentTarget.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="rating"
            label="Rating"
            type="text"
            id="rating"
            onChange = {(e:ChangeEvent<HTMLInputElement>)=> setRating(e.currentTarget.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="cover"
            label="Cover"
            name="cover"
            autoFocus
            onChange = {(e:ChangeEvent<HTMLInputElement>)=> setCover(e.currentTarget.value)}
          />
          <Button
            disabled = {!items.user.login}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {(e)=> {
              e.preventDefault();
              AddingData(title, author, price, rating, cover)
              setAdded(true);
            }}
          >
            ADD BOOK
          </Button>
        </form>
      </div>
      
    </Container>
  );
}