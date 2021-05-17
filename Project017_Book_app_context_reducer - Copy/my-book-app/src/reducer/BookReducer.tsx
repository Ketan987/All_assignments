import axios from 'axios';
import { useReducer } from 'react';
// import initialState from './initialData';


const initialState = {
    loading: true,
    error : '',
    book : [],
    user : {},
    delet_id : ''
}

const reducerFunc = (state:any, action:any) => {
    switch(action.type){
        case 'BOOK_LIST':
            return {
                loading : false,
                book : action.payload,
                user : {},
                delet_id : ''
            }
        case 'ADD_BOOK':
            console.log('Adding Book');
            return{
                loading : false,
                book : [...state.book, action.payload],
                error : '',
                user : {},
                delet_id : ''
            }
        case 'DELETE_BOOK':
            return{
                loading : false,
                book : state.book.filter((obj:any)=> obj._id !== action.payload.id),
                error: '',
                user : {},
                delet_id : action.payload
            }
        case 'LOGIN':
            return{
                loading : true,
                book : [],
                error: '',
                user : action.payload,
                delet_id : ''
            }
        case 'LOGOUT':
            return {
                loading : true,
                book : [],
                error: '',
                user : {},
                delet_id : ''
            }
    }
}





export {reducerFunc, initialState};