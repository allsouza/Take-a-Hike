const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    author:{
        type:Schema.Types.ObjectId, 
        ref: 'users'
    },
    trail:{
        type: Schema.Types.ObjectId, 
        ref:'trails', 
    },
    title:{
        type:String
    },
    body:{
        type:String, 
        text:true
    },
    rating:{
        type:Number, 
        required:true
    },
    images:{
        type:Array
    },
    date:{
        type: Date, 
        default: Date.now
    }

});

module.exports = Review = mongoose.model('Review', ReviewSchema);