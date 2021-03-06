// models/Photo.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// library for handling autoincrement in mongoose
// https://github.com/ramiel/mongoose-sequence
const AutoIncrement = require("mongoose-sequence")(mongoose);
let PhotoSchema = new Schema(
    {
        photo_id: { type: Number, default: 0 },
        description: { type: String },
        fileLink: { type: String },
        s3_key: { type: String },
        review_id: { type: String }
    },
    {
        // createdAt,updatedAt fields are automatically added into records
        timestamps: true
    }
);
PhotoSchema.plugin(AutoIncrement, { inc_field: "photo_id" });
module.exports = mongoose.model("Photo", PhotoSchema);
/* The mongoose-sequence creates a commodity collection named 'counters' which keeps track of the auto-incremental number.
So during development to reset the go_id back to 1, I just have to drop the counter collection by running db.counters.drop()  */

//add another field to the model that is reviewId, when we dispatch the action to save to the db, we need to make sure to include the reference to the review we are at (pass in a reviewId)
//first create the review as a blank object

// commiting a 