
import axios from 'axios';
import NoSsr from '@material-ui/core/NoSsr';
// import GoogleFontLoader from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {DeleteBook} from './all_requests';
import { useContext } from 'react';
import {BookContext} from '../context/context';

const useStyles = makeStyles((props:any) => ({
  card: {
    minWidth: 320,
    position: 'relative',
    boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
    overflow: 'visible',
    borderRadius: '1.5rem',
    transition: '0.4s',
    '&:hover': {
      transform: 'translateY(-2px)',
      '& $shadow': {
        bottom: '-1.5rem',
      },
      '& $shadow2': {
        bottom: '-2.5rem',
      },
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: 0,
      display: 'block',
      width: '100%',
      bottom: -1,
      height: '100%',
      borderRadius: '1.5rem',
      backgroundColor: 'rgba(0,0,0,0.08)',
    },
  },
  main: {
    overflow: 'hidden',
    borderTopLeftRadius: '1.5rem',
    borderTopRightRadius: '1.5rem',
    zIndex: 1,
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to top, #014a7d, rgba(0,0,0,0))',
    },
  },
  image:{
    borderTopLeftRadius : '1.5rem',
    borderTopRightRadius: '1.5rem',
    width : '70%',
    height : '30rem',
    paddingLeft: '10rem',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1,
    padding: '1.5rem 1.5rem 1rem',
  },
  tag: {
    display: 'inline-block',
    fontFamily: "'Sen', sans-serif",
    backgroundColor: '#ff5dac',
    borderRadius: '0.5rem',
    padding: '2px 0.5rem',
    color: '#fff',
    marginBottom: '0.5rem',
  },
  delbtn : {
    justifyContent : 'center',
  },
  title: {
    fontFamily: "'Sen', sans-serif",
    fontSize: '2rem',
    fontWeight: 800,
    color: '#fff',
  },
  heads : {
    fontFamily: "'Sen', sans-serif",
    fontWeight: 800,
    color: '#fff',
  },
  author: {
    zIndex: 1,
    position: 'relative',
    borderBottomLeftRadius: '1.5rem',
    borderBottomRightRadius: '1.5rem',
  },
  shadow: {
    transition: '0.2s',
    position: 'absolute',
    zIndex: 0,
    width: '88%',
    height: '100%',
    bottom: 0,
    borderRadius: '1.5rem',
    backgroundColor: 'rgba(0,0,0,0.06)',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  shadow2: {
    bottom: 0,
    width: '72%',
    backgroundColor: 'rgba(0,0,0,0.04)',
  },
}));

export const Details = (props:any) => {
  const items = useContext(BookContext);

  let styler ={
    height : "250px",
    width : "250px"
  }
  const styles = useStyles();
  const [rec, setRec] = useState({'title': 'loading...', 'author': '', 'price': '', 'rating':'', 'cover': '', 'description': ''});
  
  const gettingDetails = ()=> {
    axios({
        method :'GET',
        url : 'http://localhost:5000/books/id/'+props.match.params.id
    })
    .then(res => {
        // console.log(res.data)
        setRec(res.data)
    })
    }

    useEffect(()=>{
        gettingDetails();
    })

    const deleteHandle = () => {
      DeleteBook(props.match.params.id, items.dispatch);
      // <DeleteBook id = {props.match.params.id} />
    }

//   const mediaStyles = useCoverCardMediaStyles();
  return (
    <>
      <Card className={styles.card}>
        <Box className={styles.main} minHeight={300} position={'relative'}>
        <img
          className={styles.image}
          src={rec.cover}
          title= {rec.title}
          />
          <div className={styles.content}>
            <div className={styles.tag}>Book</div>
            <Typography variant={'h2'} className={styles.title}>
              {rec.title}
            </Typography>
            <Typography className = {styles.heads} variant={'subtitle2'}>{rec.author}</Typography>
            <Typography className = {styles.heads} variant={'caption'}>PRICE :{rec.price} | </Typography>
            <Typography className = {styles.heads} variant={'caption'}>RATING : {rec.rating} </Typography>
            {/* <Button></Button> */}
          </div>
        </Box>
        <br></br>
        <br></br>
        <Container >
          {/* <img style = {styler} src = {rec.cover} alt = {rec.title}/> */}
        <Typography className = {'tag'} component="div">
            {rec.description}
        </Typography>
      </Container>
        <div className={styles.shadow} />
        <div className={`${styles.shadow} ${styles.shadow2}`} />
       {items.user.login?
        <Button variant = "contained" color = "secondary" className = {styles.delbtn} onClick = {deleteHandle}>Delete</Button>:null}
      </Card>
    </>
  );
};
export default Details;