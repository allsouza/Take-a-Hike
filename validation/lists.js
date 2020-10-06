const Validator = require('validator');
const validText= require('./valid-text');


module.exports = function validateListInput(data){
    let errors = {};

    data.title = validText(data.title) ? data.tile : '';

    if (Validator.isEmpty(data.title)){
        errors.text = 'Your list needs to have a title.';
    }

    return{
        errors, 
        isValid: Object.keys(errors).length === 0
    };
};