var myEach = require('./myEach');
var myMap = require('./myEach');
var myReduce = require('./myEach');
/* *********************************************************************
  You can edit this file
  It will make use of your code in myEach.js, myMap.js and myReduce.js
  To run it on the console do: `node index.js`
***********************************************************************/

var numArray = [0,1,10,100,1000];


/* myEach */

function myEach(arr, callback) {
  console.log('myEach');
  for (var i=0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

/* myMap */


function myMap(arr, callback) {
  var outputArray = [];
  for (var i=0; i<arr.length; i++) {
    outputArray.push(callback(arr[i], i, arr));
  }
  return outputArray;
}

/* myReduce */

function myReduce(arr, callback) {
  previousValue = arr[0];

  for(var i=1; i< arr.length; i++) {
    previousValue = callback(previousValue, arr[i], i, arr);
  }
  return previousValue;
}

console.log("the end");
