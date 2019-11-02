const express = require('express');
const NasaNeoApi = require('../apis/nasaNeoApi');
const NeoService = require('../services/neoService');

let NeoRouter = express.Router();

/* GET neo listing. */
NeoRouter.post('/', (req, res, next) => {
  let neoNames = [];

  NasaNeoApi.findNeos(req.body.dateStart, req.body.dateEnd).then((neoData) => {
    neoNames = NeoService.findCloseNeos(neoData.near_earth_objects, req.body.within.value);
    res.send({ "asteroids": neoNames });
  }).catch((e) => {
    res.send({ "error": true });
  });
});

module.exports = NeoRouter;
