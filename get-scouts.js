const assert = require('assert');

const isInputValid = (input) => /[A-Za-z\w]/.test(input)

const getScouts = coreData => (req, res) => {
  const { db } = coreData;
  const {name: scoutName} = req.query;
  if (!isInputValid(scoutName)) {
    res.send([]);
    return;
  }

  console.log('searching', scoutName);

  const collection = db.collection('scouts').find({
    name: new RegExp(scoutName, "gi"),
  });
  // const collection = db.collection('scouts').find({
  //   $text: {
  //     $search: 'English League / WEST LONDON WHITE',
  //     $caseSensitive: false,
  //   }
  // });
  console.log(req.query);
  
  collection.toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    res.send(docs)
  });
}

module.exports = getScouts;
