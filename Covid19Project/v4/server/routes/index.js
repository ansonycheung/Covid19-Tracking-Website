var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');

// LANDING - the landing page
router.get('/', function(req, res) {
	res.render('landing');
});

// register form route
router.get('/register', function(req, res) {
	res.render('register');
});

// handle sign up logic
router.post('/register', function(req, res) {
	var newUser = new User({ username: req.body.username });
	User.register(newUser, req.body.password, function(err, user) {
		if (err) {
			console.log(err);
			return res.render('register');
		}
		passport.authenticate('local')(req, res, function() {
			res.redirect('/blogs');
		});
	});
});

// show login form
router.get('/login', function(req, res) {
	res.render('login');
});

// // handle login logic
// router.post(
// 	'/login',
// 	passport.authenticate('local', {
// 		successRedirect: '/blogs',
// 		failureRedirect: '/login'
// 	}),
// 	function(req, res) {}
// );

// handle login logic
router.post('/login', function(req, res) {
	console.log(req.body);
});

// logout route
router.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/blogs');
});

module.exports = router;
