import React from 'react';
import {Stars} from './star-rating';
const records = localStorage.getItem('records');

interface IProps {

}

interface IState {
    option : String;
    value : String;
    isSearchBody : boolean;
}

class Search extends React.Component<IProps, IState> {
    constructor(props:IProps){
        super(props);
        this.state = {
            option : "option",
            value : "value",
            isSearchBody : false
        }
    }

    searchSelect =(e:any)=>{
        // console.log(e.target.value)
        this.setState({option:e.target.value});
    }

    searchQuery = (e:React.FormEvent<HTMLInputElement>) => {
        this.setState({value : e.currentTarget.value})
        // console.log(e.currentTarget.value);
    }

    searchHandler = () => {
        // console.log(this.state.option, this.state.value);
        this.setState({isSearchBody : true})
    }

    SearchBArHandle = ()=> {
        return ( 
            <div className = "searchbar">
                <select onChange = {this.searchSelect}>
                    <option className = "searchelem">Choose..</option>
                    <option value = "title">Title</option>
                    <option value = "author">Author</option>
                    <option value = "rating">Rating</option>
                    <option value = "price">Price</option>
                </select>
                <input type = 'text' className = "searchelem" onChange = {this.searchQuery} placeholder= "Search"></input><br></br>
                <input type = 'submit' className = "searchelem" onClick = {this.searchHandler}></input>
            </div>
        )
    }

    SearchBodyHandler() {
        const data = JSON.parse(records!);
        var searchedRecord = [];
        console.log(this.state.option);
        console.log(this.state.value);
        if(this.state.option === 'title'){
            for (let i = 0; i < data.length; i++) {
                if (data[i].title.includes(this.state.value))
                    searchedRecord.push(data[i]);
            }
        }
        else if(this.state.option === 'author'){
            for (let i = 0; i < data.length; i++) {
                if (data[i].author.includes(this.state.value))
                    searchedRecord.push(data[i]);
                else
                    return <span>Not Found</span>
            }
        }
        else if(this.state.option === 'rating'){
            for (let i = 0; i < data.length; i++) {
                if (data[i].rating === this.state.value)
                    searchedRecord.push(data[i]);
                else
                    return <span>Not Found</span>
            }
        }
        else if(this.state.option === 'price'){
            for (let i = 0; i < data.length; i++) {
                // console.log(data[i].title.includes('Harry'))
                if (data[i].price === this.state.value)
                    searchedRecord.push(data[i]);
                else
                    return <span>Not Found</span>
            }
        }
        else{
            return (<h2>Option Not Found</h2>)
        }
        return (
            <div>
                {searchedRecord.map((book:any) => {
                    return(
                        <div className = "book" key = {book._id}>
                        <img src = {book.cover} alt = "BookCard"></img>
                        <div className = "book-card">
                            <h2>{book.title}</h2>
                            <div className = "bookspecification">
                                <div className = "specialization">
                                    <p>Title: {book.title}</p>
                                    <p>Author: {book.author}</p>
                                </div>
                                <div className = "specialization">
                                    <div><span>Rating: {book.rating} <Stars current = {book.rating} outof = {5} minof = {1}/> </span></div>
                                    <p>Price: {book.price}</p>
                                </div>
                            </div>
                        </div>
                        {/* <li key={d._id}>{d.title}</li> */}
                    </div>
                    )
                })}
            </div>
        )
    
    }



    render(){
        // const data = JSON.parse(records!);
        return (
            <div>
                <div className = "search">
                    <this.SearchBArHandle/>
                </div>
                <div className = "searchBody">
                    {this.state.isSearchBody ? this.SearchBodyHandler()  : <p id = "goForSearch">Click On Search Button to Start Search</p>}
                </div>
            </div>
        )
    }
}


export default Search;