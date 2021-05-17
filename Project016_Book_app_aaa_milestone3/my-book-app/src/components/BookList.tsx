import React from 'react';
import {Stars} from './star-rating';
// import Details from './BookDetail';
// import {Link} from 'react-router-dom';
// import {GetData} from './utils/GetData';

interface IProps {
    csson : boolean;
    history : any;
}

interface IState {
    option : String;
    value : String;
    isSearchBody : boolean; 
    bookid : number;
    gotData : any;
    // signin : boolean;
}




class BookList extends React.Component<IProps, IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            option : "option",
            value : "value",
            isSearchBody : this.props.csson,
            bookid : 0,
            // signin : false,
            gotData : [{title : 'loading..', author : 'loading..', price : 'loading..'}]
        }
    }

    gettingData = async() => {
        let Theaders = new Headers();
        Theaders.append('Content-Type', 'application/json');
        Theaders.append('Access-Control-Allow-Origin', '*');
        Theaders.append('Access-Control-Allow-Credentials', 'true')

        fetch('http://localhost:5000/books', {
            method : 'GET',
            mode : 'cors',
            headers : Theaders
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({gotData : data})
        })
    }

    componentDidMount() {
        this.gettingData();
    }



    handleMouserOver = (rating:number) => {
        console.log("Rating"+ rating);
    }

    // Search part start
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

    // search part end


    SearchBodyHandler() {
        const data = this.state.gotData;        //JSON.parse(records!);
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
        if(searchedRecord.length === 1){
            return(<h2>Only One Record</h2>)
            <
            this.props.history.push('/details/'+searchedRecord[0]._id)
            
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

    BookListHandler = ()=> {
        // const data = JSON.parse(records!);
        return(
            <div>
            {this.state.gotData.map((book:any) =>
                <div onClick = {()=> {console.log('clicked')}} className = "book" key = {book._id}>
                    <img onClick= {()=>{this.props.history.push("/details/"+book._id)}} src = {book.cover} alt = "BookCard"></img>
                    <div className = "book-card">
                        {/* {this.setState({bookid : book._id})} */}
                        <h2>{book.title}</h2>
                        <div className = "bookspecification">
                            <div className = "specialization">
                                <p>Title: {book.title}</p>
                                <p>Author: {book.author}</p>
                            </div>
                            <div className = "specialization">
                                <div className = "rating" onMouseEnter = {() => this.handleMouserOver(book.rating)}><span>Rating : </span><Stars current = {book.rating} outof = {5} minof = {1}/></div>
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



    render(){
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
                </div>
                <div>
                    {/* {this.BookListHandler()} */}
                    {!this.state.isSearchBody?this.BookListHandler():this.SearchBodyHandler()}
                </div>
                    
                    
            </div>
        );
    }
}

export default BookList;