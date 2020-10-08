const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrailSchema = new Schema({
    name:{
        type: String, 
        require: true
    },
    trail_id:{
        type: Number
    },
    summary:{
        type: String, 
        text:true, 
        require:true
    },
    difficulty:{
        type: String, 
        require:true
    },
    image:{
        type: String, 
        require: true
    },
    location:{
        type: String,
        require: true
    },
    length:{
        type: Number, 
        require: true
    },
    ascent:{
        type: Number, 
        require: true
    },
    high:{
        type: Number, 
        require: true
    },
    longitude:{
        type: Number, 
        require: true
    },
    latitude:{
        type:Number, 
        require:true
    }

});

module.exports = Trail = mongoose.model('trail', TrailSchema);