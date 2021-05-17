import React, { ChangeEvent, useState } from 'react';
import propsTypes from 'prop-types';



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
        // sessionStorage.setItem('token', JSON.stringify(token));
        Props.setToken(token);
    }

    return(
        <div className = 'login'>
            <input type = 'text' onChange = {userInput} placeholder = "Username"></input><br></br>
            <input type = 'password' onChange = {passInput} placeholder = "Password"></input><br></br><br></br>
            <input type = "submit" onClick = {finalSubmit} value = "Sign In"></input>
        </div>
    )
}

SignIn.propsTypes = {
    setToken: propsTypes.func.isRequired
}


export default SignIn;