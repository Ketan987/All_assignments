import React from 'react';
import axios from 'axios';

const getAllData = async() => {
    const output = await axios({
        method : 'GET',
        url : 'http://localhost:5000/books'
    })
    return await output.data;
}


export default getAllData;