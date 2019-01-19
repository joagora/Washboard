const Elastic = function(elasticClient) {
  this.elasticClient = elasticClient;
}

Elastic.prototype.deleteIndex = function (indexName) {
  return this.elasticClient.indices.delete({
    index: indexName
  });
}

Elastic.prototype.initIndex = function (indexName) {
  return this.elasticClient.indices.create({
    index: indexName
  });
}

Elastic.prototype.indexExists = function(indexName) {
  return this.elasticClient.indices.exists({
    index: indexName
  });
}

Elastic.prototype.initMapping = function(mapping) {
  console.log("initMapping triggered");
  return this.elasticClient.indices.putMapping(mapping);
}

module.exports = Elastic;
