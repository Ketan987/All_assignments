let axios = require('axios');

var payload = {
    isbn: "9781393495574",
    title: "The Raising Tiger",
    author: "Ketan Pise",
    pages: "380",
    price: "199",
    rating: "5.0",
    votes: "49",
    description: "Time pass",
    tags: [
        "epic",
        "indian",
        "mahabharata",
    ],
    series: "The Lost Epic",
    seriesIndex: "1",
    releaseDate: "2020-01-14T18:30:00.000Z",
    cover: "none"
}

axios.put('http://localhost:3000/books', payload)
.then(res => {
    return res.json;
})
.then(function(data){
    console.log(data);
})
.catch(err =>{
    console.log(err);
})