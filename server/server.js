const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');

const router = require('./routes/events');
const publicPath = path.join(__dirname, 'dist');
const eventsRouter = require('./routes/events');
const elasticSearch = require('elasticsearch');

const Elastic = require('./db/elastic');
const EventsProvider = require('./db/eventsProvider.js');


app.use(express.static(publicPath));
app.use(parser.json());
app.use('api/events', eventsRouter);

const elasticClient = new elasticSearch.Client({
  host: 'localhost:9200',
  log: 'info'
});

const elastic = new Elastic(elasticClient);
const eventsProvider = new EventsProvider(elasticClient);


elastic.indexExists(eventsProvider.mapping.index)
.then(function (exists) {
    if (exists) {
        return elastic.deleteIndex(eventsProvider.mapping.index);
    }
}).then(function () {
    return elastic.initIndex(eventsProvider.mapping.index);
}).then(function() {
  elastic.initMapping(eventsProvider.mapping)
}).then(function(elasticClient) {
  const events = eventsRouter(eventsProvider);
  app.use('/api/events', events);
})
.catch(console.error);







app.listen(3000, function() {
  console.log(`server running on port ${ this.address().port }`);
})
