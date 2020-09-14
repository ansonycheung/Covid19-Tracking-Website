const express = require('express');
const router = express.Router({ mergeParams: true });
const Post = require('../../models/Post');
const Comment = require('../../models/Comment');
const passport = require('passport');
const validateCommentInput = require('../../validation/comment');
var middleware = require('../../middleware');

router.post('/:id/create', passport.authenticate('jwt', { session: false }), (req, res) => {
	Post.findById(req.params.id, function(err, post) {
		if (err) {
			res.status(400).json({ create: 'Error fetching comment by id' });
		} else {
			const authorID = req.user._id;
			const authorName = req.user.user_name;
			const comment = req.body;
			const { errors, isValid } = validateCommentInput(comment);
			if (!isValid) {
				return res.status(400).json(errors);
			}
			const newComment = new Comment(comment);
			newComment.author.id = authorID;
			newComment.author.user_name = authorName;
			newComment.text = comment.body;
			newComment
				.save()
				.then((doc) => res.json(doc))
				.catch((err) => res.status(400).json({ create: 'Error creating new comment' }));

			post.comments.push(newComment);
			post.save().catch((err) => res.status(400).json({ create: 'Error creating new comment' }));
		}
	});
});



router.patch(
	'/update/:comment_id',
	passport.authenticate('jwt', { session: false }),
	middleware.checkCommentOwnership,
	(req, res) => {
		const { errors, isValid } = validateCommentInput(req.body);
		if (!isValid) {
			return res.status(400).json(errors);
		}
		const { text } = req.body;
		Comment.findOneAndUpdate({ _id: req.params.comment_id }, { $set: { text } }, { new: true })
			.then((doc) => res.status(200).json(doc))
			.catch((err) => res.status(400).json({ update: 'Error updating existing comment' }));
	}
);

router.delete(
	'/delete/:comment_id',
	passport.authenticate('jwt', { session: false }),
	middleware.checkCommentOwnership,
	(req, res) => {
		Comment.findOneAndDelete({ _id: req.params.comment_id })
			.then((doc) => res.status(200).json(doc))
			.catch((err) => res.status(400).json({ delete: 'Error deleting a comment' }));
	}
);

module.exports = router;
