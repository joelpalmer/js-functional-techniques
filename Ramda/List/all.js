/* 
    all
    (a --> Boolean) --> [a] --> Boolean
*/

import _dispatchable from "ramda/src/internal/_dispatchable";
import _curry2 from "ramda/src/internal/_curry2";
import _xall from "ramda/src/internal/_xall";
import {toUpper, all} from 'ramda';

/* 
    Ramda implements _dispatchable on all(). That is to say that if
    you apply it to an array-like object & that object has an any() method,
    that method will be used instead. I am looking for an example because
    every() is the equivalent in immutable.js and Array.prototype. Maybe there is
    a use case for that, maybe they're future proofing or maybe I am misunderstanding
    In any case, if you add an all() to Array.prototype, it should get used
*/







