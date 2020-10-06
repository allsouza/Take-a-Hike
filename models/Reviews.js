const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    author:{
        type:Schema.Types.ObjectId, 
        ref: 'users'
    },
    trail:{
        type: Schema.Types.ObjectId, 
        ref:'trails'
    },
    title:{
        type:String
    },
    body:{
        type:String, 
        text:true
    },
    
})