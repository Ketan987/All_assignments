import axios from 'axios';
import React, { ChangeEvent } from 'react';
import { reducerFunc, initialState } from '../reducer/BookReducer';
// import BookContext from '../context/BookContext';


interface BookProps {
    
}

interface BookState{
    title : String;
    author : String;
    price : number;
    rating : number;
    cover : String;
    isSucess : boolean;
}

class AddBook extends React.Component<BookProps, BookState> {
    constructor(props:BookProps){
        super(props)
        this.state = {
            title: "dummy",
            author: "dummy",
            price: 0,
            rating: 0,
            cover: "dummy",
            isSucess : false
        }
    }
    
    getTitle = (e:ChangeEvent<HTMLInputElement>)=>{
        // console.log("Title"+e.currentTarget.value);
        this.setState({title:e.currentTarget.value})
    }
    getAuthor = (e:ChangeEvent<HTMLInputElement>) =>{
        // console.log("Author"+e.currentTarget.value);
        this.setState({author:e.currentTarget.value})
    }
    getPrice = (e:ChangeEvent<HTMLInputElement>) => {
        // console.log("Price"+e.currentTarget.value);
        this.setState({price:+e.currentTarget.value})
    }
    getRating = (e:ChangeEvent<HTMLInputElement>) =>{
        // console.log("Rating"+e.currentTarget.value);
        this.setState({rating:+e.currentTarget.value})
    }
    getCover = (e:ChangeEvent<HTMLInputElement>) => {
        // console.log("Cover"+e.currentTarget.value);
        this.setState({cover:e.currentTarget.value})
    }

    savingDetails = (e:React.MouseEvent) =>{
        e.preventDefault();
        axios({
            method : 'POST',
            url : 'http://localhost:5000/books',
            data : {
                // id : this.state.id,
                author : this.state.author,
                title : this.state.title,
                price: this.state.price,
                rating : this.state.rating,
                cover : this.state.cover
            }
        })
        .then(res => {
            this.setState({isSucess : true})
        })
        .catch(err => console.log('Error Occured'))

    }


    render() {
        return(
            <div className = "AddBook">
                <h2>Book Details Form</h2>
                <form>
                    <label>Title : </label><br></br>
                    <input type = 'text' onChange = {this.getTitle}></input><br></br>
                    <label>Author Name: </label><br></br>
                    <input type = 'text' onChange = {this.getAuthor}></input><br></br>
                    <label>Price : </label><br></br>
                    <input type = 'number' onChange = {this.getPrice}></input><br></br>
                    <label>Rating : </label><br></br>
                    <input type = 'number' onChange = {this.getRating}></input><br></br>
                    <label>Description : </label><br></br>
                    <input type = 'text' onChange = {this.getRating}></input><br></br>
                    <label>Book Cover link: </label><br></br>
                    <input type = 'text' onChange = {this.getCover}></input><br></br><br></br>
                    <input type = 'submit' value = "ADD BOOK" onClick = {this.savingDetails}></input>
                </form>
                <div>
                    {this.state.isSucess ? 
                    <div>
                        <p>Book Added Succesfully.</p>    
                    </div>:null}
                </div>
            </div>
        )   
    }
}

export default AddBook;