const express = require('express');
const router = express.Router();
const elastic = require('../db/elastic');

const eventsRouter = function (provider) {
  //Create document
  router.post('/', function (req, res) {
    provider.addEvent(req.body).then(function (result) {
      res.json(result)
    }).catch((err) => {
      console.error(err);
      res.status(500);
      res.json({
        status: 500,
        error: err
      });
    });
  });

  //Get document by id
  router.get('/:id', function (req, res) {
    console.log("get by id route called")
    provider.getEvent(req.params.id).then(function (result) {
      res.json(result)
    }).catch((err) => {
      console.error(err);
      res.status(500);
      res.json({
        status: 500,
        error: err
      });
    });
  });

  //Get all events
  router.get('/', function (req, res) {
    provider.getAllEvents().then(function (result) {
      res.json(result)
    }).catch((err) => {
      console.error(err);
      res.status(500);
      res.json({
        status: 500,
        error: err
      });
    });
  });

  //Update event by id
  router.put('/:id', function (req, res) {
    console.log("put route called")
    console.log("req.body in put", req.body)
    provider.updateEvent(req.params.id, req.body).then(function (result) {
      res.json(result)
    }).catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        status: 500,
        error: err
      });
    });
  });

  //Delete event by id
  router.delete('/:id', function (req, res) {
    console.log(req.id)
    provider.deleteEventById(req.id).then(function (result) {
      if (!result) {
        return res.status(404).send({
          message: "Response: Unable to find event of id:" + req.id
        });
      }
      res.send({
        message: "Successfully deleted Event id:" + req.id
      });
      res.json(result);
    }).catch((err) => {
      console.log(err);
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