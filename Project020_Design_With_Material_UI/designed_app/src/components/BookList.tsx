import React, { useContext, useState } from 'react';
import {BookContext} from '../context/context';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Stars} from './star-rating';
import Container from '@material-ui/core/Container';
import Carousel from 'react-bootstrap/Carousel'


const useStyles = makeStyles({
    base : {
        display: 'flex',
        flexFlow: "r",
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: "primary",
    }, 
    root: {
      width: 345,
      paddingBlockEnd: 25,
      paddingBottom:5,
      border: 10,
      backgroundColor : '',
    },
    media: {
      height: 240,
    },
    gridList: {
        width: 500,
        height: 450,
      },
  });


const BookList = (props:any) => {
    const [data, setData] = useState([{title : 'loading..'}]);
    const classes = useStyles();
    const items = useContext(BookContext);
    items.books.then((res:any) => {setData(res)})
    // console.log(data);


    const corousal = () => {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        )
    }

    return(
    <div>
        {/* {corousal()} */}
    <Container className = {classes.base}>
        {data.map((book:any)=>{
            return(
                <Card key = {book.title} className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={book.cover}
                        title= {book.title}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {book.title}
                        </Typography>
                        <Typography variant = "subtitle1" color = "textPrimary">{book.author}</Typography>
                        <Typography variant = "caption">Price: {book.price}</Typography>
                        <Stars current = {book.rating} outof = {5} minof = {1}/>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick = {() => props.history.push('/details/'+book._id)}>
                            Details
                        </Button>
                    </CardActions>
                </Card>
            )
        })};
    </Container>
    </div>
    )
}


export default BookList;