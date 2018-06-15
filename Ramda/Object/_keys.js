/* 
    {k: v} → [k]

    Returns an Array of the object's own properties

    λ
*/
const R = require('Ramda');

const roster = {
    '1b': "Bellinger",
    '2b': "Muncy",
    '3b': "Turner",
    //...
}

const rosterPropKeys = R.keys(roster);
rosterPropKeys;