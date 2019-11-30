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
        address: {
        properties: {
          country: {
            type: "text"
          },
          city: {
            type: "text"
          },
          street: {
            type: "text"
          },
          venue: {
            type: "text",
          }
        }
      }
    },
      
      //TODO: add link to tickets
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
        address: {
          properties: {
            country: event.address.country,
            city: event.address.city,
            street: event.address.street,
            venue: event.address.venue
          }
        }
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
          title: event.title,
          content: event.content,
          date: event.date,
          address: {
            country: event.address.country,
            city: event.address.city,
            street: event.address.street,
            venue: event.address.venue
          }
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
