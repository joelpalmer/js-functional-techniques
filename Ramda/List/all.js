/* 
    all
    (a --> Boolean) --> [a] --> Boolean
*/

import _dispatchable from "ramda/src/internal/_dispatchable";
import _curry2 from "ramda/src/internal/_curry2";
import _xall from "ramda/src/internal/_xall";
import { equals } from "ramda";
/* 
    Ramda implements _dispatchable on all(). That is to say that if
    you apply it to an array-like object & that object has an any() method,
    that method will be used instead. I am looking for an example because
    every() is the equivalent in immutable.js and Array.prototype. Maybe there is
    a use case for that, maybe they're future proofing or maybe I am misunderstanding
    In any case, if you add an all() to Array.prototype, it should get used
*/
//todo: decide if I should dig in to transducers now or wait until R.transduce
//implement all()

// might be interesting to try dispatchable with ['every']
// Note: tried it with every and it appeared to work. So, tried it with
// others and it didn't break it. Needs further investigation 
const all = _curry2(_dispatchable(['all'], _xall, function all(fn, list) {
    let idx = 0;
    while (idx < list.length) {
        if (!fn(list[idx])) {
            return false;
        }
        idx += 1;
    }
    return true;
}));

//let's try this
const j = equals("Joel");
const x = all(j)(["Joel", "Joel", "Joel"]);
const y = all(j)(["Joe", "Joel", "Joel"]);
//But, can I do this...
const z = all(j, ["Joel", "Joel"]); //yep, it shouldn't and doesn't matter
x;
y;
z;






