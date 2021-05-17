import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import {BookContext} from '../context/BookContext';

interface IProps {
    match :{
        params : {
            id :String
        }
    },
    history:any
}



const BookDetail=(props:IProps) =>{

    const items = useContext(BookContext);
    const [rec, setRec] = useState({'title': 'loading...', 'author': '', 'price': '', 'rating':'', 'cover': '', 'description': ''})
    const [del, setdel] = useState(false);
    // const data = items.dispatch({type : 'SPECIFIC_BOOK', id : props.match.params.id})
    console.log(items)
    const data = items.books.find((books:any)=> books._id === props.match.params.id)
    console.log(data);

    const deletHandler = () => {
        items.dispatch({type : 'DELETE_BOOK', id : props.match.params.id})
    }


    // const gettingData = ()=> {
    //     axios({
    //         method :'GET',
    //         url : 'http://localhost:5000/books/id/'+props.match.params.id
    //     })
    //     .then(res => {
    //         // console.log(res.data)
    //         setRec(res.data)
    //     })
    // }

    // useEffect(()=>{
    //     gettingData();
    // })
    
    // const deletHandler = () =>{
    //     dispatch({type: 'DELETE_BOOK', payload : {id: props.match.params.id}});

    //     axios({
    //         method: 'DELETE',
    //         url : 'http://localhost:5000/books/'+props.match.params.id
    //     })
    //     .then(res => {
    //         setdel(true)
    //         setTimeout( props.history.push('/'),30000);
    //     })
    //     .catch(err => {console.log('Error While Deleting')})
    // }
    return(
        <div className = "details-book">
        <div>
            <h2>{data.title}</h2>
            <p>By {data.author}  | RS. {data.price}  | {data.rating}</p>
        </div>
        <div>
            <img src = {data.cover} alt = "Dumbass"></img>
            <div>
                <p>{data.description}</p>
            </div>
        </div>
        <button onClick = {deletHandler}> DELETE BOOK</button>
        <br></br>
        <div>
            {del ? <div><p>Succesfully Deleted!</p>
            <p>Redirect to Home Page within 2 sec</p></div>: null}
        </div>
    </div>
    )
    
}

export default BookDetail;