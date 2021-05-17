import React, { createContext, useReducer } from 'react';
// import {BookReducer} from '../reducer/BookReducer';

const BookContext = createContext('data');
const BookProvider = BookContext.Provider;
const BookConsumer = BookContext.Consumer;


export {BookProvider, BookConsumer};
export default BookContext;


// const BookContextProvider = (props:any) => {
//     const [books, dispatch] = useReducer(BookReducer, [])
//     return(
//         <BookContext.Provider value = {[books, dispatch]}>

//         </BookContext.Provider>
//     )
// }