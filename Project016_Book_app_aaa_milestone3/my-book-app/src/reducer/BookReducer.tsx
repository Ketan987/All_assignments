import axios from 'axios';
import { useReducer } from 'react';

// export const BookReducer = (state:any, action:any) => {
//     switch(action.type) {
//         case 'Add_book':
//             console.log(action);
//             return (
//                 axios({
//                     method : 'POST',
//                     url : 'http://localhost/books',
//                     data : {
//                         title : action.book.title,
//                         author: action.book.author,
//                         price: action.book.price,
//                         rating : action.book.rating,
//                         cover : action.body.cover
//                     }
//                 })
//                 .then(function (res) {
//                     console.log(res);
//                 })
//                 .catch(function(err){
//                     console.log(err)
//                 })
//             )
//         case 'Remove_book':
//             console.log(action.id);
//             return (
//                 axios({
//                     method: 'DELETE',
//                     url : 'http://localhost:5000/books/',
//                     params : {
//                         id : action.book.id
//                     }
//                 })
//                 .then(function (res) {
//                     console.log(res);
//                 })
//                 .catch(function(err){
//                     console.log(err)
//                 })
//             )
//         case 'User_Signin':
//             console.log(action.type)
//             return(
//                 axios({
//                     method:'POST',
//                     url : 'http://localhost/login',
//                     data:{
//                         username : action.payload.username,
//                         password : action.payload.password
//                     }
//                 })
//                 .then(function (res) {
//                     console.log(res);
//                 })
//                 .catch(function(err){
//                     console.log(err)
//                 })
//             )
//         case 'User_signOut':
//             return (
//                 axios({
//                     method: 'POST'
//                 })
//             )
//         default:
//             return state
//     }
// };

const initialState = {
    loading : true,
    error : '',
    books : [],
    user : {},
    delet_id : '' 
}


const reducerFunc = (state:any, action:any) => {
    switch(action.type){
        case 'ADD_BOOK':
            console.log('Adding Book');
            return{
                loading : false,
                books : action.payload,
                error : '',
                user : {},
                delet_id : ''
            }
        case 'DELETE_BOOK':
            console.log('Delete Book');
            return {
            }
    }
}





export {reducerFunc, initialState};