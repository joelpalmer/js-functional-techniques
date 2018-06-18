/* 
    (a → a) → Number → [a] → [a]
*/

//adjust
//This is a great function, applies a function to the value at
//a given index and returns a new copy of the array with that element
//adjusted


import _concat from "ramda/src/internal/_concat";
import _curry3 from "ramda/src/internal/_curry3";
import {toUpper} from 'ramda';
// implement adjust

const adjust = _curry3(function adjust(fn, idx, list) {
    if (idx >= list.length || idx < -list.length) {
        return list;
    }

    const start = idx < 0 ? list.length : 0;
    const _idx = start + idx;
    const _list = _concat(list);
    _list[_idx] = fn(list[_idx]);
    return _list;
});

const x = adjust(toUpper, 1, ["Joel", "Dodgers", "Michelle"]);
x;


