import React from 'react';


const BookReducerFunc = (state:any, action :any) => {
    switch(action.type){
        case 'ADD_Book':
            return[ ...state, action.payload]
        case 'DELETE_Book':
            return state.filter((book:any) => book._id !== action.id)
        default:
            return state
    }
}

const UserinitialState = {
    login : false,
    mail : '',
    accesToken: '',
    refreshToken: ''
}

const UserReducerFunc = (state:any, action:any) => {
    switch(action.type){
        case 'SIGN_IN':
            return{
                login : true,
                mail : action.payload.mail,
                accesToken: action.payload.acToken,
                refreshToken: action.payload.rfToken   
            }
        case 'SIGN_OUT':
            return{
                login: false,
                mail : '',
                accesToken: '',
                refreshToken: ''
            }
    }
}

export {BookReducerFunc, UserinitialState, UserReducerFunc};