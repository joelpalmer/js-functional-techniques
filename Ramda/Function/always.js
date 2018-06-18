/* 
    a → (* → a)
    always AKA K combinator
*/

// implement always
import _curry1 from "ramda/src/internal/_curry1";
const always = _curry1(function always(val) {
    return function() {
        return val;
    };
});

const name = always("Joel");
const x = name();
x;