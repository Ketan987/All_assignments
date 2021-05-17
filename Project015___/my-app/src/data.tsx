import UpdatedCompo from './App';
// import React, { useState } from 'react';


const Counter = (props:any) =>{
    

    return(
        <button onClick = {props.incrementer}>{props.name} Clicked {props.count} times</button>
    )
}


export default UpdatedCompo(Counter, 'ketan');