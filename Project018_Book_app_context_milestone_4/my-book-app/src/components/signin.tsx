import React, { ChangeEvent, useState, useContext } from 'react';
import propsTypes from 'prop-types';
import {BookContext} from '../context/BookContext';



async function loginUser({username, password}:any) {
    return fetch('http://localhost:5000/login', {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({username, password})
    })
    .then(data => data.json())
}



function SignIn(Props:any) {
    const value = useContext(BookContext); 
    // console.log(value);
    const [username, setuser] = useState('username');
    const [password, setpass] = useState('password');

    const userInput = (e:ChangeEvent<HTMLInputElement>) =>{
        setuser(e.currentTarget.value)
    }

    const passInput = (e:ChangeEvent<HTMLInputElement>) => {
        setpass(e.currentTarget.value);
    }

    const finalSubmit = async(e:React.MouseEvent) => {
        e.preventDefault();
        const token = await loginUser({username, password});
        console.log('roken'+token);
        value. dispatch({type : 'LOGIN', payload : {username : username, password : password}})
        // sessionStorage.setItem('token', JSON.stringify(token));
        Props.setToken(token);
    }

    return(
        <div>
            {sessionStorage.getItem('token') === null ?
            <div className = 'login'>
                <div>
                    <h2> Sign IN Before visiting Book Management.</h2>
                </div>
                <input type = 'text' onChange = {userInput} placeholder = "Username"></input><br></br>
                <input type = 'password' onChange = {passInput} placeholder = "Password"></input><br></br><br></br>
                <input type = "submit" onClick = {finalSubmit} value = "Sign In"></input>
            </div>
            : <div>
                <p>You have already Signed in</p>
                <p><button onClick = {() => {sessionStorage.removeItem('token'); Props.history.push('/')}}>Click Here</button> to sign out</p>
              </div> }
        </div>
    )
}

SignIn.propsTypes = {
    setToken: propsTypes.func.isRequired
}


export default SignIn;