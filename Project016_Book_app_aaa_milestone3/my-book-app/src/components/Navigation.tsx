import React, { MouseEvent} from 'react';
import logo from './Icons/logo512.png';
import BookList from './BookList';
import AddBook from './AddBook';
import SignIn from './signin';
// import SearchList from './SearchList';
import Details from './BookDetail';
// import UseTokens from './useTokens';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';



interface IState {
    islogin : boolean;
    token : String;
}

interface IProps {
    // history : any;
}

class Navigation extends React.Component<IProps, IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            islogin : false,
            token : 'token'
        }
    }

    HomeHandler = ()=> {
        // this.props.history.push()
    }
    SearchHandler = ()=> {
 
    }
    handleNav(e:MouseEvent){
        console.log("yes its Working");
    }

    AddHandler = ()=> {

    }

    changeScreen = (token:string)=> {
        sessionStorage.setItem('token', JSON.stringify(token));
        this.setState({token : token})
    }

    getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString!);
        return userToken?.token
    };
    

    render(){
        // console.log();
        // console.log(this.getToken())
        // console.log(JSON.parse(sessionStorage.getItem('token')!))
        if(JSON.parse(sessionStorage.getItem('token')!) === null) {
            // return <SignIn setToken = {(token:string) =>this.changeScreen(token)}/>
            return <SignIn setToken = {this.changeScreen}/>
        }
        // console.log(this.getToken());
        return (
        <div onWheel = {this.handleNav}>
            <Router>
            <div>
                <div className = "navigation1">
                    <img src = {logo} alt ="Logo" />
                    <h1>The Book App</h1>
                    
                </div>
                {/* <Router> */}
                <div className = "navigation2">
                    <Link className = "butter" to = '/'>HOME</Link>
                    <Link className = "Link" to = '/addBook'>ADD NEW BOOK</Link>
                    {/* <Router>
                    <Link to='/'>HOME</Link>
                    <Link to='/'>SEARCH</Link>
                    <Link to='/addBook'>ADD NEW BOOK</Link>
                    </Router> */}
                    <div className = "theleft">
                        {this.state.islogin ? 
                        <div>
                            <p>Logged In</p>
                        </div> : 
                        <div>
                            {/* <p>Log In</p> */}
                            {/* <Router> */}
                            <Link className = "Link" to = '/Login'>LOG IN</Link>
                            {/* </Router> */}
                        </div>}
                    </div>
                </div>
            </div>
            
                <Switch>
                    <Route exact path = '/' component = {BookList}>
                        {/* <BookList/>  */}
                        {/* {this.state.isHome ? 
                            <BookList csson = {this.state.isSearch}/> : (
                                this.state.isAddBook ? <AddBook /> : null
                            )} */}
                    </Route>
                    <Route path = '/addBook' component = {AddBook}/>
                    <Route path = '/details/:id' component = {Details} />
                    <Route path = '/Login' component = {SignIn}/>
                </Switch>
            </Router>

        </div>
        )
    }
}

export default Navigation;