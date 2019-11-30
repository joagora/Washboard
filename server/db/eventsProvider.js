const EventsProvider = function (elasticClient) {
  this.elasticClient = elasticClient;
  this.mapping = {
    index: "blog",
    type: "events",
    body: {
      properties: {
        title: {
          type: "text"
        },
        content: {
          type: "text"
        },
        date: {
          type: "date"
        },
      }
    }
  }
}

EventsProvider.prototype.addEvent = function (event) {
  return this.elasticClient.index({
    index: this.mapping.index,
    type: this.mapping.type,
    body: {
      properties: {
        title: event.title,
        content: event.content,
        date: event.date,
      }
    }
  });
}

EventsProvider.prototype.getEvent = function (id) {
  const response = this.elasticClient.get({
    index: this.mapping.index,
    type: this.mapping.type,
    id: id
  });
  console.log(response);
  
  return response;
}

EventsProvider.prototype.getAllEvents = function () {
  const response = this.elasticClient.search({
    index: this.mapping.index,
    type: this.mapping.type,
  });
  return response;
}

EventsProvider.prototype.updateEvent = function (id, event) {
  const response = this.elasticClient.update({
    index: this.mapping.index,
    type: this.mapping.type,
    id: id,
    body: {
      doc: {
        properties: {
          title: event.body.properties.title,
          content: event.body.properties.content,
          date: event.body.properties.date
        }
      }
    }
  });
  return response;
}

EventsProvider.prototype.deleteEventById = function (id) {
  const response = this.elasticClient.delete({
    index: this.mapping.index,
    type: this.mapping.type,
    id: id
  });
  return response;
}

module.exports = EventsProvider;
