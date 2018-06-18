/* 
    [(*... → Boolean)] → (*... Boolean)
*/

import _curry1 from "ramda/src/internal/_curry1";
import {curryN, max, pluck, reduce, propEq} from 'ramda';

// implement anyPass

const anyPass = _curry1(function anyPass(preds) {
    return curryN(reduce(max, 0, pluck('length', preds)), function() {
        let idx = 0;
        const len = preds.length;
        while (idx < len) {
            if (preds[idx].apply(this, arguments)) {
                return true;
            }
            idx += 1;
        }
        return false;
    });
});

// let's try it

const isDodger = propEq('lastChampionship', '1988');
const isRetired = propEq('status', 'active');
const isRetiredOrDodger = anyPass([isDodger, isRetired]);
const x = isRetiredOrDodger({lastChampionship: '1988', status: 'active'});
const y = isRetiredOrDodger({lastChampionship: '1989', status: 'retired'});
x;
y;

