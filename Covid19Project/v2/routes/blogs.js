var express = require('express');
var router = express.Router();
var Blog = require('../models/blog');
const blog = require('../models/blog');

// INDEX - show all blogs
router.get('/', function(req, res) {
	Blog.find({}, function(err, allBlogs) {
		if (err) {
			console.log(err);
		} else {
			res.render('blogs/index', { blogs: allBlogs });
		}
	});
});

// NEW - show form to create new Blog
router.get('/new', isLoggedIn, function(req, res) {
	res.render('blogs/new');
});

// CREATE - add new blog to DB
router.post('/', isLoggedIn, function(req, res) {
	Blog.create(req.body.blog, function(err, newlyCreated) {
		if (err) {
			console.log(err);
		} else {
			// add username and id to blog
			newlyCreated.author.id = req.user._id;
			newlyCreated.author.username = req.user.username;
			// save blog
			newlyCreated.save();
			res.redirect('/blogs');
		}
	});
});

// SHOW - shows more info about one blog
router.get('/:id', function(req, res) {
	Blog.findById(req.params.id).populate('comments').exec(function(err, foundBlog) {
		if (err) {
			console.log(err);
		} else {
			res.render('blogs/show', { blog: foundBlog });
		}
	});
});

// EDIT ROUTE
router.get('/:id/edit', isLoggedIn, function(req, res) {
	Blog.findById(req.params.id, function(err, foundBlog) {
		if (err) {
			res.redirect('/blogs');
		} else {
			res.render('blogs/edit', { blog: foundBlog });
		}
	});
});

// UPDATE ROUTE
router.put('/:id', isLoggedIn, function(req, res) {
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
		if (err) {
			res.redirect('/blogs');
		} else {
			// add username and id to blog
			updatedBlog.author.id = req.user._id;
			updatedBlog.author.username = req.user.username;
			// save blog
			updatedBlog.save();
			res.redirect('/blogs/' + req.params.id);
		}
	});
});

// DESTROY ROUTE
router.delete('/:id', isLoggedIn, function(req, res) {
	Blog.findByIdAndRemove(req.params.id, function(err) {
		if (err) {
			res.redirect('/blogs');
		} else {
			res.redirect('/blogs');
		}
	});
});

// middleware
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/login');
}

module.exports = router;
