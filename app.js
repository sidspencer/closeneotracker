const express = require('express');
const logger = require('morgan');
const IndexRouter = require('./routes/index');
const NeoRouter = require('./routes/neo');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', IndexRouter);
app.use('/neo', NeoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next({});
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ error: true });
});

module.exports = app;
