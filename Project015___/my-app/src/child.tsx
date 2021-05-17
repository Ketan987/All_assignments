import React from 'react';
import update from './App';



const Child  =(props:any) =>{
    return(
        <h1 onClick = {props.incrementer}>{props.title} {props.count}</h1>
    )
}

export default update(Child, 'ketan');
