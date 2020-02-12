// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  // console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, contents) => {
    // console.log("In readFile's Callback: it has the contents.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) {
      callback(contents);
    } else if (error) {
      callback(undefined);
    }
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

const printData = function(data) {
  console.log("Return Value: " + data);
  // return "return Value: " + data
;}


// // we try to get the return value
const bombay = breedDetailsFromFile('Bombay', printData);

module.exports = breedDetailsFromFile;