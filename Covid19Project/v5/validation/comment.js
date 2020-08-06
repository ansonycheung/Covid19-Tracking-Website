const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validateCommentInput = (data) => {
	let errors = {};

	let { text } = data;
	// Converts empty fields to empty string as validator function works only with strings
	text = !isEmpty(text) ? text : '';

	if (Validator.isEmpty(text)) {
		errors.body = 'Text is required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
