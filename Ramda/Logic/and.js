/* 
    a → b → a | b
*/

import _curry2 from "ramda/src/internal/_curry2";

// implement and

const and = _curry2(function and(a, b) {
    return a && b;
});

const x = and(1===1, 9===9);
const y = and(1===2, 9===9);
x;
y;