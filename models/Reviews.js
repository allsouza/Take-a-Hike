const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// authorName: type:Schema.Types.String


const ReviewSchema = new Schema({
    author:{
        type:Schema.Types.ObjectId, 
        ref: 'users'
    },
    user:{
        type:Object
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
        type:String
    },
    date:{
        type: Date, 
        default: Date.now
    }

});

module.exports = Review = mongoose.model('Review', ReviewSchema);