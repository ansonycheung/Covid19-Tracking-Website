const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validateCommentInput = (data) => {
	let errors = {};


	let { body } = data;
	body = !isEmpty(body) ? body : '';


	if (Validator.isEmpty(body)) {
		errors.body = 'Text is required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
