import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import {GettingData} from './all_requests';

// Related to UI
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

const Search = (props:any) => {
    const classes = useStyles();
    const [data, setData] = useState([{title: 'loading..', rating:'', cover:'', price:'', author: '', _id: ''}]);
    useEffect(()=>{
        setData(GettingData(props.option, props.value));
    })
    const multpleout = () =>{
        return(
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
        )
    }
    
    return(
        <div>
            {data.length === 1 ?
                 <Card key = {data[0].title} className={classes.root}>
                 <CardActionArea>
                     <CardMedia
                     className={classes.media}
                     image={data[0].cover}
                     title= {data[0].title}
                     />
                     <CardContent>
                     <Typography gutterBottom variant="h5" component="h2">
                         {data[0].title}
                     </Typography>
                     <Typography variant = "subtitle1" color = "textPrimary">{data[0].author}</Typography>
                     <Typography variant = "caption">Price: {data[0].price}</Typography>
                     <Stars current = {+data[0].rating} outof = {5} minof = {1}/>
                     </CardContent>
                 </CardActionArea>
                 <CardActions>
                     <Button size="small" color="primary" onClick = {() => props.history.push('/details/'+data[0]._id)}>
                         Details
                     </Button>
                 </CardActions>
             </Card>
            :multpleout()}
        </div>
    )
}

export default Search;