const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    savedTrails: {
        type: Schema.Types.ObjectId,
        ref: 'trails'
    },
    // lists: {
    //     type: Schema,
    //     ref: 'lists'
    // },
    followers: {
        type: Array,
    },
    following: {
        type: Array,
    }
    },{ 
    timestamps: true
});

module.exports = User = mongoose.model('User', UserSchema);