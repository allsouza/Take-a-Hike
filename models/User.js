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
        type: Number,
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
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    following: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
    },{ 
    timestamps: true
});

module.exports = User = mongoose.model('User', UserSchema);