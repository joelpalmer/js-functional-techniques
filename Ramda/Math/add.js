/* 
    Number --> Number --> Number
*/

const R = require('ramda');

const add2 = R.add(2);
const sum = add2(3);
sum;

//note the partial application