const express = require('express');
const router = express.Router();
const elastic = require('../db/elastic');

const eventsRouter = function(provider) {
  router.post('/', function (req, res, next) {
    provider.addDocument(req.body).then(function (result) { res.json(result) });
  });

  return router
}

module.exports = eventsRouter;
