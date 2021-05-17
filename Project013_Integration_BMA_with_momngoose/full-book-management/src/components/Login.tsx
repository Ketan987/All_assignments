import React, {ChangeEvent, useState} from 'react';
import mongoose from 'mongoose';
import { connect } from 'mongoose';
// const { Schema } = mongoose;
import schema from './Schema';
const port = 5000;
const dburl = 'mongodb://localhost/Mindtree_practice';



const LoginPage = () => {

    const [first, setFirst] = useState('john');
    const [last, setLast] = useState('john');
    const [pass, setpass] = useState('john');
    const [mail, setmail] = useState('john');

    const FirstHandler = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setFirst(e.currentTarget.value);
    }

    const LastHandler = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setLast(e.currentTarget.value);
    }


    const EmailHandler = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setmail(e.currentTarget.value);
    }


    const PasswordHandler = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setpass(e.currentTarget.value);
    }

    const LoginHandler = async(e:React.MouseEvent) => {
        e.preventDefault();
        connect(dburl, {useNewUrlParser:true,useUnifiedTopology:true})
        .then((res:any) => {
            console.log("Conncted To DB.");
        }).catch((err:any)=> {
            console.log("Error Connecting database"+ err);
        })
        const data = await schema.find({"Mail": "ket@dummy.com"})
        console.log('in here');
        console.log(data);

        // const mymodel = mongoose.model('')
    }

    return (
        <div>
            <h2>LOGIN SYSTEM</h2>
            <div>
                <div>
                    <img src = '' alt= ' '></img>
                </div>
                <div>
                    <h3>Login here</h3>
                    <br></br>
                    <label>First Name:</label>
                    <input onChange= {FirstHandler}></input>
                    <br></br>
                    <label>Last Name: </label>
                    <input onChange = {LastHandler}></input>
                    <br></br>
                    <label>Email: </label>
                    <input onChange = {EmailHandler}></input>
                    <br></br>
                    <label>Password: </label>
                    <input onChange = {PasswordHandler}></input>
                    <br></br>
                    <input type = 'submit' onClick = {LoginHandler} value = "Login"></input>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;