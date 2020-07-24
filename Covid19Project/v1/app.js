var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Blog = require('./models/blog');
var Comment = require('./models/comment');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// APP CONFIG
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

// DB CONFIG
mongoose
	.connect(
		'mongodb+srv://EmilianoDBUser:jerryjerryZHU95%21%21@cluster0-tt0sc.mongodb.net/covid19_project?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	)
	.then(() => console.log('Connected to DB!'))
	.catch((error) => console.log(error.message));

// ROUTES
// LANDING - the landing page
app.get('/', function(req, res) {
	res.render('landing');
});

// INDEX - show all blogs
app.get('/blogs', function(req, res) {
	Blog.find({}, function(err, allBlogs) {
		if (err) {
			console.log(err);
		} else {
			res.render('blogs/index', { blogs: allBlogs });
		}
	});
});

// NEW - show form to create new Blog
app.get('/blogs/new', function(req, res) {
	res.render('blogs/new');
});

// CREATE - add new blog to DB
app.post('/blogs', function(req, res) {
	Blog.create(req.body.blog, function(err, newlyCreated) {
		if (err) {
			console.log(err);
		} else {
			res.redirect('/blogs');
		}
	});
});

// SHOW - shows more info about one blog
app.get('/blogs/:id', function(req, res) {
	Blog.findById(req.params.id).populate('comments').exec(function(err, foundBlog) {
		if (err) {
			console.log(err);
		} else {
			res.render('blogs/show', { blog: foundBlog });
		}
	});
});

// EDIT ROUTE
app.get('/blogs/:id/edit', function(req, res) {
	Blog.findById(req.params.id, function(err, foundBlog) {
		if (err) {
			res.redirect('/blogs');
		} else {
			res.render('blogs/edit', { blog: foundBlog });
		}
	});
});

// UPDATE ROUTE
app.put('/blogs/:id', function(req, res) {
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
		if (err) {
			res.redirect('/blogs');
		} else {
			res.redirect('/blogs/' + req.params.id);
		}
	});
});

// DESTROY ROUTE
app.delete('/blogs/:id', function(req, res) {
	Blog.findByIdAndRemove(req.params.id, function(err) {
		if (err) {
			res.redirect('/blogs');
		} else {
			res.redirect('/blogs');
		}
	});
});

// =======================
// COMMENTS ROUTES
// =======================
app.get('/blogs/:id/comments/new', function(req, res) {
	Blog.findById(req.params.id, function(err, blog) {
		if (err) {
			console.log(err);
		} else {
			res.render('comments/new', { blog: blog });
		}
	});
});

app.post('/blogs/:id/comments', function(req, res) {
	Blog.findById(req.params.id, function(err, blog) {
		if (err) {
			console.log(err);
			redirect('/blogs');
		} else {
			Comment.create(req.body.comment, function(err, comment) {
				if (err) {
					console.log(err);
				} else {
					blog.comments.push(comment);
					blog.save();
					res.redirect('/blogs/' + blog._id);
				}
			});
		}
	});
});

app.listen(3000, function() {
	console.log('The Covid19 Project Server Has Started!');
});
