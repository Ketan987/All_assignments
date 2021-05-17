import React from 'react';


const User = (props) => {

    // var first, second;
    // const firstInput= (e) => {
    //     // console.log(e.target.value);
    //     first = e.target.value;

    // }
    // const secondInput = (e)=> {
    //     // console.log(e.target.value)
    //     second = e.target.value;
    // }

    // const handleUser = ()=>{
    //     // console.log(first, second);
    //     props.value(first, second);
    // }

    return (
            <div>
                <p/>
                <label>Player One: </label>
                <input type = 'text' placeholder = "First User" onChange={props.firstInput}></input>
                <label>Player Two: </label>
                <input type = 'text' placeholder = "Second User" onChange={props.secondInput}></input>
                <input type = 'submit' onClick= {props.handleUser} value = "PLAY"></input>
            </div>
    )
}


export default User;