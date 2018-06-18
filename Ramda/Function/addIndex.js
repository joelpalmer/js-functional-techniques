/* 
    implement Ramda's addIndex but update it to more es6y

*/

//import a couple of Ramda's internal functions
import _concat from "ramda/src/internal/_concat";
import _curry1 from "ramda/src/internal/_curry1";

import { curryN, map } from "ramda";

/*
    Creates a new list iteration function from an existing one by add two new
    parameters to its callback function: current index & entire list

*/

const addIndex = _curry1(function addIndex(fn) {
  return curryN(fn.length, function() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length
    let idx = 0;
    const origFn = arguments[0];  
    const list = arguments[arguments.length - 1];
    const args = Array.prototype.slice.call(arguments, 0);
    args[0] = function() {
      const result = origFn.apply(this, _concat(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});

// let's give it a go

const mapIndexed = addIndex(map);
const x = mapIndexed((val, idx) => idx + '-' + val, ['d','o','d', 'g', 'e', 'r', 's']);
x;
