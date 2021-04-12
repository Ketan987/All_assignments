const axios = require('axios');

axios.get('http://localhost:3000/books')
    .then(resp => {
        data = resp.data;
        data.forEach(e => {
            console.log(`Title: ${e.title}, Author: ${e.author}, Price: ${e.price}`);
        });
    })
    .catch(error => {
        console.log(error);
    });  