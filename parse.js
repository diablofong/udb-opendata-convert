import fs from 'fs';
import parsecsv from 'fast-csv';

function * gen() {
  console.log('start');
  yield 'called';
};

var g = gen();
var v = g.next();
console.log(123);
console.log(v.value);