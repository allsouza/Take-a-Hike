const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = newSchema({
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
    }
    },{
    timestamps:true
});

module.exports = List = mongoose.model('list', ListSchema);