const express = require('express');
const router = express.Router();

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

  //Get all events
  router.get('/', function (res) {
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
    provider.updateEvent(req.params.id, req.body).then(function (result) {
      res.json(result)
    }).catch((err) => {
      res.status(500);
      res.json({
        status: 500,
        error: err
      });
    });
  });

  //Delete event by id
  router.delete('/:id', function (req, res) {
    provider.deleteEventById(req.params.id).then(function (result) {
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