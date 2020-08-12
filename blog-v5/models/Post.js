const mongoose = require('mongoose');
var Comment = require('./Comment');
const Schema = mongoose.Schema;

const post = {
	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		user_name: {
			type: String,
			required: true
		}
	},
	date: {
		type: Date,
		default: Date.now
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment',
			required: true
		}
	]
};

const PostSchema = new Schema(post);

module.exports = mongoose.model('posts', PostSchema);
