const express = require('express');
const NasaNeoApi = require('../apis/nasaNeoApi');
const NeoService = require('../services/neoService');

let NeoRouter = express.Router();

/* GET neo listing. */
NeoRouter.post('/', (req, res, next) => {
  let neoNames = {};

  NasaNeoApi.findNeos(req.body.startDate, req.body.endDate).then((neoData) => {
    neoNames = NeoService.findCloseNeos(neoData.near_earth_objects, req.body.within.value);
    res.send(neoNames);
  }).catch((e) => {
    res.send(e);
  });
});

module.exports = NeoRouter;
