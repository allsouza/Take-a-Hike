const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
    author:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title:{
        type: String, 
        required: true
    },
    body:{
        type:String, 
        text:true, 
    },
    date:{
        type:Date, 
        default: Date.now
    }
    });

module.exports = List = mongoose.model('list', ListSchema);