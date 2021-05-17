import React, { useReducer } from 'react';

const initialstate = 0;
const reducer = (state:number, action:any) =>{
 switch(action){
    case 'inc':
        return state + 1;
    case 'des':
        return state - 1;
    case 'reset':
        return initialstate
    default:
        return state
 }   
}

function run(){
    const [count, func] = useReducer(reducer, initialstate);
    return(
        <div>
            <p>{count}</p>
            <button onClick = {()=>func('inc')}>incremente</button>
        </div>
    )
}

export {};