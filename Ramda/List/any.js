/* 
    (a → Boolean) → [a] → Boolean
*/

import _curry2 from "ramda/src/internal/_curry2";
import _dispatchable from "ramda/src/internal/_dispatchable";
import _xany from "ramda/src/internal/_xany";
import { lt, flip } from "ramda";

//implement any

const any = _curry2(_dispatchable(['any'], _xany, function any(fn, list) {
    let idx = 0;
    while (idx < list.length) {
        if (fn(list[idx])) {
            return true;
        }
        idx += 1;
    }
    return false;
}));

const lessThan4 = flip(lt)(4);
const x = any(lessThan4)([3]);
x;
