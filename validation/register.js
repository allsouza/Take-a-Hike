const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstName = validText(data.firstName) ? data.firstName : '';
  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';
  data.password2 = validText(data.password2) ? data.password2 : '';
  data.lastName = validText(data.lastName) ? data.lastName : '';
  data.zipcode = validText(data.zipcode) ? data.zipcode : '';
  data.birthdate = validText(data.birthdate) ? data.birthdate : '';

  

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  if (Validator.isEmpty(data.firstName)) {
      errors.firstName = 'Need to include a first name'
  }

  if (Validator.isEmpty(data.lastName)) {
      errors.lastName = 'Need to include a last name'
  }

  if (Validator.isEmpty(data.zipcode)) {
      errors.zipcode = 'Need to include a zipcode'
  }

  if (!Validator.isNumeric(data.zipcode)) {
   
    errors.zipcode = 'Your zipcode can only include numbers'
  }

  if (Validator.isEmpty(data.birthdate)){
      errors.birthdate = 'Please include a birth date!'
  }

  if (!Validator.isLength(data.zipcode, {min: 5, max:5} )) {
      errors.zipcode = 'Your zipcode must be 5 numbers long'
  }



  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};