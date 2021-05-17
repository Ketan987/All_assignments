import React, { createContext, useReducer} from 'react';
import {reducerFunc, initialState} from '../reducer/BookReducer';

const BookContext = createContext<any>(null);
const BookProvider = BookContext.Provider;
const BookConsumer = BookContext.Consumer;



const BookContextProvider = (props:any) => {
    const [books, dispatch] = useReducer(reducerFunc, initialState)
    return(
        <BookContext.Provider value = {{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export {BookContext, BookContextProvider};
