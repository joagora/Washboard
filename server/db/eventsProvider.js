const EventsProvider = function(elasticClient) {
  this.elasticClient = elasticClient;
  this.mapping = {
    index: "blog",
    type: "events",
    body: {
      properties: {
        title: {type: "text"},
        content: {type: "text"},
        //date: {type: "date"},
      }
    }
  }
}

EventsProvider.prototype.addDocument = function (document) {
  return this.elasticClient.index({
    index: this.mapping.index,
    type: this.mapping.type,
    body: {
      title: document.title,
      content: document.content,
      //date: document.date,
    }
  });
}

module.exports = EventsProvider;
