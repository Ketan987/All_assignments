import React, { useContext, useEffect, useState } from 'react';
import {Stars} from './star-rating';
// import Details from './BookDetail';
// import {Link} from 'react-router-dom';
// import {GetData} from './utils/GetData';
import {BookContext} from '../context/BookContext';

interface IProps {
    csson : boolean;
    history : any;
}



const BookList = (props:IProps) => {
    const items = useContext(BookContext);
    console.log(items); 
    const [option, setoption] = useState('option');
    const [value, setValue] = useState('value');
    // const [bookid, setBookid] = useState(0);
    const [seachBody, setSearchBody] = useState(true);
    const [gotData, setGotData] = useState([{_id:'loading..' ,title : 'loading..', author : 'loading..', price : 'loading..', rating : 'loading ..'}])



    const handleMouserOver = (rating:number) => {
        console.log("Rating"+ rating);
    }

    // Search part start
    const searchSelect =(e:any)=>{
        // console.log(e.target.value)
        // this.setState({option:e.target.value});
        setoption(e.target.value);
    }

    const searchQuery = (e:React.FormEvent<HTMLInputElement>) => {
        // this.setState({value : e.currentTarget.value})
        setValue(e.currentTarget.value);
        // console.log(e.currentTarget.value);
    }

    const searchHandler = () => {
        // console.log(this.state.option, this.state.value);
        // this.setState({isSearchBody : true})
        setSearchBody(true);
    }

    // search part end


    const SearchBodyHandler = ()=> {
        const data = gotData;        //JSON.parse(records!);
        var searchedRecord = [];
        console.log(option);
        console.log(value);
        if(option === 'title'){
            for (let i = 0; i < data.length; i++) {
                if (data[i].title.includes(value))
                    searchedRecord.push(data[i]);
            }
        }
        else if(option === 'author'){
            for (let i = 0; i < data.length; i++) {
                if (data[i].author.includes(value))
                    searchedRecord.push(data[i]);
                else
                    return <span>Not Found</span>
            }
        }
        else if(option === 'rating'){
            for (let i = 0; i < data.length; i++) {
                if (data[i].rating === value)
                    searchedRecord.push(data[i]);
                else
                    return <span>Not Found</span>
            }
        }
        else if(option === 'price'){
            for (let i = 0; i < data.length; i++) {
                // console.log(data[i].title.includes('Harry'))
                if (data[i].price === value)
                    searchedRecord.push(data[i]);
                else
                    return <span>Not Found</span>
            }
        }
        else{
            return (<h2>Option Not Found</h2>)
        }
        if(searchedRecord.length === 1){
            return(<h2>Only One Record</h2>)
            <
            props.history.push('/details/'+searchedRecord[0]._id)
            
        }
        else{
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
    
    }

    const BookListHandler = ()=> {
        // const data = JSON.parse(records!);
        return(
            <div>
            {items.books.map((book:any) =>
                <div onClick = {()=> {console.log('clicked')}} className = "book" key = {book._id}>
                    <img onClick= {()=>{props.history.push("/details/"+book._id)}} src = {book.cover} alt = "BookCard"></img>
                    <div className = "book-card">
                        {/* {this.setState({bookid : book._id})} */}
                        <h2>{book.title}</h2>
                        <div className = "bookspecification">
                            <div className = "specialization">
                                <p>Title: {book.title}</p>
                                <p>Author: {book.author}</p>
                            </div>
                            <div className = "specialization">
                                <div className = "rating" onMouseEnter = {() => handleMouserOver(book.rating)}><span>Rating : </span><Stars current = {book.rating} outof = {5} minof = {1}/></div>
                                <p>Price: {book.price}</p>
                            </div>
                        </div>
                        {/* <Link style = {linkstyle} to= {"/details/"+book._id}>Click to Details</Link> */}
                    </div>
                    {/* <li key={d._id}>{d.title}</li> */}
                </div>
                )}
            </div>
        )
    }



    // this.gettingData();
    // const data = JSON.parse(records!);
    // for (let i = 0; i < data.length; i++) {
    //     console.log("This index: \n"+i, data[i]);          
    // }
    // const data2 = [{"name":"test1"}, {"name":"test2"}];
    // const listdata = data.map((d:any) => <li key={d._id}>{d.title}</li>);
    
    return (
        <div>
            <div  className= "searchBox">
            <div className = "searchbar">
            <select onChange = {searchSelect}>
                <option className = "searchelem">Choose..</option>
                <option value = "title">Title</option>
                <option value = "author">Author</option>
                <option value = "rating">Rating</option>
                <option value = "price">Price</option>
            </select>
            <input type = 'text' className = "searchelem" onChange = {searchQuery} placeholder= "Search"></input><br></br>
            <input type = 'submit' className = "searchelem" onClick = {searchHandler}></input>
            </div>
            </div>
            <div>
                {/* {this.BookListHandler()} */}
                {seachBody?BookListHandler():SearchBodyHandler()}
            </div>
                
                
        </div>
    );
}

export default BookList;