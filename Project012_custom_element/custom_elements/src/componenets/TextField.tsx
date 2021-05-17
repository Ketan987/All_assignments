import React, { ChangeEvent } from 'react';

interface IPropsSelect {
    values : any;
}

interface IPropsradio {
    values : any;
}


const TextField = () => {
    const inputData = (e:React.ChangeEvent<HTMLInputElement>) => {
        var value = e.currentTarget.value;
        if(value.length > 50){
            console.log('error');
        }
        else if(value.includes('$') || value.includes('@')){
            console.log('error')
        }
        else console.log(value)
    }

    return (<input onChange = {inputData} />)
}


const Selection = (props:IPropsSelect) => {

    const dataChange = (e:ChangeEvent) =>{

    }
    // console.log(props.values)
    return (
        <div>
            <select onChange = {dataChange} >
                {props.values.map((data:any) => 
                    <option key = {data}>{data}</option>
                )}
            </select>
        </div>
    )
}

const RadioButton =(props:IPropsradio) => {
    return(
        <div>
            {props.values.map((data:string) =>
                <div key = {data}>
                    <input type = 'radio' value = {data}></input>
                    <label>{data}</label>
                </div>
            )}
        </div>
    )
}

export {TextField, Selection, RadioButton};