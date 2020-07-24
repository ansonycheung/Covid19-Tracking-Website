var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var Blog = require('./models/blog');
var Comment = require('./models/comment');
var User = require('./models/user');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// require routes
var commentRoutes = require('./routes/comments');
var blogRoutes = require('./routes/blogs');
var indexRoutes = require('./routes/index');

// APP CONFIG
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

// DB CONFIG
mongoose
	.connect(
		'mongodb+srv://EmilianoDBUser:jerryjerryZHU95%21%21@cluster0-tt0sc.mongodb.net/covid19_project_v3?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	)
	.then(() => console.log('Connected to DB!'))
	.catch((error) => console.log(error.message));

// PASSPORT CONFIG
app.use(
	require('express-session')({
		secret: 'Rusty is the best and cutest dog in the world',
		resave: false,
		saveUninitialized: false
	})
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

app.use('/', indexRoutes);
app.use('/blogs', blogRoutes);
app.use('/blogs/:id/comments', commentRoutes);

app.listen(3000, function() {
	console.log('The Covid19 Project Server Has Started!');
});
