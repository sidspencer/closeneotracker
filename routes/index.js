const express = require('express');

let IndexRouter = express.Router();

/* GET home page. */
IndexRouter.get('/', (req, res, next) => {
  res.send({});
});

module.exports = IndexRouter;
