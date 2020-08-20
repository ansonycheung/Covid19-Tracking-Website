const express = require('express');
require('dotenv').config(); // for loading environment variables
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const cors = require('cors');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash = require('connect-flash');

// INITIATE EXPRESS APP
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// REQUIRE ROUTES
const dataRouter = require('./routes/data');
const indexRouter = require('./routes/index');
const newsRouter = require('./routes/news');
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const comments = require('./routes/api/comments');

// APP CONFIG
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// DB CONFIG
const MONGO_URI = process.env.MONGO_URI;
mongoose
	.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Mongo Connection successful'))
	.catch((err) => console.log('err'));

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.Promise = global.Promise;

// PASSPORT CONFIG
app.use(passport.initialize());
require('./middleware/passport')(passport);

// USES ROUTERS
app.use('/', indexRouter);
app.use('/data', dataRouter);
app.use('/news', newsRouter);
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/comments', comments);

// Catchs 404 and forwards to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
	// Sets locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// Renders the error page
	res.status(err.status || 500);
	res.render('error');
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server up and running on port ${PORT}`);
});
