const express = require('express');
const router = express.Router();
const elastic = require('../db/elastic');

const eventsRouter = function (provider) {
  router.post('/', function (req, res) {
    provider.addEvent(req.body).then(function (result) {
      res.json(result)
    }).catch((err) => {
      res.status(500);
      res.json({
        status: 500,
        error: err
      });
    });
  });

  //Get document by id
  router.get('/:id', function (req, res) {
    provider.getEvent(req.params.id).then(function (result) {
      res.json(result)
    }).catch((err) => {
      res.status(500);
      res.json({
        status: 500,
        error: err
      });
    });
  });

  return router
}

module.exports = eventsRouter;
