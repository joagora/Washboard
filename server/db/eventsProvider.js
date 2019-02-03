const EventsProvider = function (elasticClient) {
  this.elasticClient = elasticClient;
  this.mapping = {
    index: "events",
    type: "events",
    body: {
      properties: {
        title: {
          type: "text"
        },
        content: {
          type: "text"
        },
        //date: {type: "date"},
      }
    }
  }
}

EventsProvider.prototype.addEvent = function (event) {
  return this.elasticClient.index({
    index: this.mapping.index,
    type: this.mapping.type,
    body: {
      title: event.title,
      content: event.content,
      //date: event.date,
    }
  });
}

EventsProvider.prototype.getEvent = function (id) {
  const response = this.elasticClient.get({
    index: 'events',
    type: 'events',
    id: id
  });
  return response;
}
module.exports = EventsProvider;
