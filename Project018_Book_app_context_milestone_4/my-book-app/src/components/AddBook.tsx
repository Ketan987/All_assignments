import axios from 'axios';
import React, { ChangeEvent } from 'react';
// import { reducerFunc, initialState } from '../reducer/BookReducer';
import {BookContext} from '../context/BookContext';


interface BookProps {
    
}

interface BookState{
    id : String;
    title : String;
    author : String;
    price : number;
    rating : number;
    cover : String;
    isSucess : boolean;
}

class AddBook extends React.Component<BookProps, BookState> {
    static contextType = BookContext;
    constructor(props:BookProps){
        super(props)
        this.state = {
            id : 'id',
            title: "dummy",
            author: "dummy",
            price: 0,
            rating: 0,
            cover: "dummy",
            isSucess : false
        }
    }
    
    getID = (e:ChangeEvent<HTMLInputElement>)=>{
        // console.log("Title"+e.currentTarget.value);
        this.setState({id:e.currentTarget.value})
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
        this.setState({isSucess : true})
        this.context.dispatch({ type : 'ADD_BOOK', payload : {
            id : this.state.id,
            author : this.state.author,
            title : this.state.title,
            price: this.state.price,
            rating : this.state.rating,
            cover : this.state.cover
        }});
        console.log(this.context);
    }

    render() {
        // console.log(this.context.books);
        // console.log(this.context.books.book.author)
        return(
            <div className = "AddBook">
                <h2>Book Details Form</h2>
                <form>
                    <label>ID : </label><br></br>
                    <input type = 'text' onChange = {this.getID}></input><br></br>
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