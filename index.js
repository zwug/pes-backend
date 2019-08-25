const express = require('express')

const connectMongo = require('./mongo-connect');
const getScouts = require('./get-scouts');

const app = express()
const port = 3000
let coreData = {
  db: null,
}

app.get('/scouts', getScouts(coreData))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
  connectMongo((dataBase) => {
    coreData.db = dataBase;    
  });
})