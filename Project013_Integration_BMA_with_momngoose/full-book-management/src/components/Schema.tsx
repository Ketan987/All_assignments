import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userSchema = new Schema ({
    _id : String,
    First : String,
    Second : String,
    Mail : String,
    Password : String,
    Books : Array
}, {timestamps:true})

const mymodel = mongoose.model('userDatas', userSchema)

export default mymodel;