import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from './HomePage';
import Login from './Login';
import Register from './Register';


const Navigation = () => {
    return(
        <div>
            <div className = "navigation">
                <img src = '' alt = ''></img>
                <h1>BOOK APP</h1>
            </div>
            <div className = 'Links'>
                <Router>
                    <Link to = '/'>HOME</Link>
                    <Link to = '/Login'>Login</Link>
                    <Link to = '/Register'>Register</Link>
                    <Switch>
                        <Route exact path = '/' component = {Home} ></Route>
                        <Route path = '/Login' component = {Login}></Route>
                        <Route path = '/Register' component = {Register}></Route>
                    </Switch>
                    
                </Router>
            </div>
        </div>
    )
}

export default Navigation;