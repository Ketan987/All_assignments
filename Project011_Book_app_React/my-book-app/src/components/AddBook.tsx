import React, { ChangeEvent } from 'react';

interface BookProps {
    
}

interface BookState{
    id: String;
    title : String;
    author : String;
    price : number;
    rating : number;
    cover : String
}

class AddBook extends React.Component<BookProps, BookState> {
    constructor(props:BookProps){
        super(props)
        this.state = {
            id : "dummy",
            title: "dummy",
            author: "dummy",
            price: 0,
            rating: 0,
            cover: "dummy"
        }
    }
    getID = (e:ChangeEvent<HTMLInputElement>) =>{
        // console.log("ID"+e.currentTarget.value);
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
        if(localStorage.getItem('records') == null){
            localStorage.setItem('records', '[]');
        }
        
        var old_data = JSON.parse(localStorage.getItem('records')!);
        old_data.push(this.state);
            
        localStorage.setItem('records', JSON.stringify(old_data));
        // return <h2 style = {style}>Error Occured Cannot Save data!</h2>
        return(
            <span>Saved Sucessfully!</span>
        )      
    }


    render() {
        return(
            <div className = "AddBook">
                <h2>Book Details Form</h2>
                <form>
                    <label>Book ID : </label><br></br>
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
            </div>
        )   
    }
}

export default AddBook;