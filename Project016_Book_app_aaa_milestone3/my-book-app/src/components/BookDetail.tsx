import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface IProps {
    match :{
        params : {
            id :String
        }
    },
    history:any
}



const BookDetail=(props:IProps) =>{

    const [rec, setRec] = useState({'title': 'loading...', 'author': '', 'price': '', 'rating':'', 'cover': '', 'description': ''})
    const [del, setdel] = useState(false);


    const gettingData = ()=> {
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
        gettingData();
    })
    
    const deletHandler = () =>{
        axios({
            method: 'DELETE',
            url : 'http://localhost:5000/books/'+props.match.params.id
        })
        .then(res => {
            setdel(true)
            setTimeout( props.history.push('/'),30000);
        })
        .catch(err => {console.log('Error While Deleting')})
    }
    return(
        <div className = "details-book">
        <div>
            <h2>{rec.title}</h2>
            <p>By {rec.author}  | RS. {rec.price}  | {rec.rating}</p>
        </div>
        <div>
            <img src = {rec.cover} alt = "Dumbass"></img>
            <div>
                <p>{rec.description}</p>
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