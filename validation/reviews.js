const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReviewInput(data){
    let errors = {};
    data.rating = validText(data.rating) ? data.rating : '';
    
    if (Validator.isEmpty(data.rating)){
        errors.text = 'Your review needs a rating!';
    }

    if (!Validator.isNumeric(data.rating)){
        errors.text = 'Rating needs to be a numeric value';
    }

    return{
        errors, 
        isValid: Object.keys(errors).length === 0
    };
};
