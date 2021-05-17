import React, {ChangeEvent} from 'react';

const Register = () => {

    const FirstHandler = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }

    const LastHandler = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }


    const EmailHandler = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }


    const PasswordHandler = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <h2>Register SYSTEM</h2>
            <div>
                <div>
                    <img src = '' alt= ' '></img>
                </div>
                <div>
                    <h3>Register here</h3>
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
                </div>
            </div>
        </div>
    )
}
export default Register;