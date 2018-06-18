/* 
    [(*... --> Boolean)] --> (*... --> Boolean)

    Takes a list of predicates & returns a predicate that returns true for a
    given list of args if every one of the provided predicates is satisfied
    by those args.
*/

import _curry1 from "ramda/src/internal/_curry1";
import { curryN, max, pluck, reduce, propEq } from "ramda";

// implement allPass

const allPass = _curry1(function allPass(preds) {
    return curryN(reduce(max, 0, pluck('length', preds)), function() {
        let idx = 0;
        const len = preds.length;
        while (idx < len) {
            if (!preds[idx].apply(this, arguments)) {
                return false;
            }
            idx += 1;
        }
        return true;
    });
});

//let's do this

const isDodger = propEq('lastChampionship', '1988');
const isRetired = propEq('status', 'retired');
const isRetiredDodger = allPass([isDodger, isRetired]);
const x = isRetiredDodger({lastChampionship: '1988', status: 'retired'});
const y = isRetiredDodger({lastChampionship: '1989', status: 'retired'});
x;
y;