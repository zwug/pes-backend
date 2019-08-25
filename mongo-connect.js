const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


const connect = (cb) => {
  // Connection URL
  const url = 'mongodb://localhost:27017';

  // Database Name
  const dbName = 'pes';

  // Create a new MongoClient
  const client = new MongoClient(url);

  // Use connect method to connect to the Server
  client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    cb(db, client);

    //client.close();
  });
}

module.exports = connect;