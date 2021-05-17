// import React, {useState} from 'react';
import axios from 'axios';


const GettingData = (option:any, value:any) =>{
    var Tdata = [{title: 'loading..', rating:'', cover:'', price:'', author: '', _id: ''}];
    // const [data, setData] = useState([{title: 'loading..', rating:'', cover:'', price:'', author: '', _id: ''}]);
    axios({
        method : 'GET',
        url : 'http:localhost:5000/'+option+'/'+value,
    })
    .then(res => {Tdata = res.data});
    return Tdata;
}

const DeleteBook = (id:any, dispatch:any) => {
    axios({
        method:'DELETE',
        url : 'http://localhost:5000/books/'+id,
    })
    .then(res =>{
        console.log('deleted');
        dispatch({type: 'DELETE_Book', id : id})    
    })
    return;
}

const AddingData = (title:string, author:string, price:string, rating:string, cover:string) => {
    axios({
        method: 'POST',
        url : 'http://localhost:5000/books',
        data : {
            title,
            author,
            price,
            rating,
            cover
        }
    })
    .then(res => {console.log('added succesfully!')})
}



const logging = (username:string, password:string, userDispatch:any)=>{
    axios({
        method : 'POST',
        url : 'http://localhost:5000/login',
        data : {
            username: username,
            password: password,
        }
    })
    .then(res=>{
        userDispatch({type: 'SIGN_IN', payload : {mail:username, acToken : res.data.accessToken, rfToken: res.data.refreshToken}})
    })
}


const Otpgenerate = async(phone:string) => {
    const calling = await axios({
        method : 'POST',
        url : 'http://localhost:5000/otpgenerate',
        data : {
            phoneNumber : phone
        }
    })

    return calling.data
}

const OtpLogging = async(phone : string, otp : Number) => {
    const calling = await axios({
        method: 'POST',
        url : 'http://localhost:5000/otpverify',
        data : {
            cellNumber : phone,
            otp : otp
        }
    })

    return calling.data
}

export {GettingData, DeleteBook, AddingData, logging, Otpgenerate, OtpLogging};