import React from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import {BookReducerFunc, UserinitialState, UserReducerFunc} from './reducer';
import getdata from './requests';

const initialstate = getdata();

const BookContext = createContext<any>(null);

const BookContextProvider = (props:any) => {
    const [books, dispatch] = useReducer(BookReducerFunc, initialstate);
    const [user, userDispatch] = useReducer(UserReducerFunc, UserinitialState)
    return(
        <BookContext.Provider value = {{books, dispatch, user, userDispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export {BookContext, BookContextProvider};