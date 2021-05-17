const mongoose= require('mongoose');
const Book= require('./book');
//const app= express();
const dbURI=`mongodb+srv://user_1:Jeni@998@cluster0.r2jbq.mongodb.net/test1?retryWrites=true&w=majority`;
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>console.log('Connected Successfully to DataBase'))
.catch((err)=>console.log(err));

const book= new Book({
    title:'book 3',
    author:'author 3',
    price:260,
    rating:3
})
book.save();