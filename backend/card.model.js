const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Card = new Schema({
  
    card_firstname: {
        type: String,
        required:true
    },
    card_lastname: {
        type: String,
        required:true
    },
    card_email: {
        type: String,
        required:true
    },
    card_gender: {
        type: String,
        required:true
    },
    card_image: {
        type: String,
        required:true
    }
});
module.exports = mongoose.model('Card', Card);