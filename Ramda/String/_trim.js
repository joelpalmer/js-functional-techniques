/* 
    String → String

    Removes whitespace from ends of the string
*/

const R = require('ramda');

const myTeam = " Dodgers ";
const trimmedTeam = R.trim(myTeam);
trimmedTeam;
myTeam;

//split returns an [], map applies each element to trim, returns []
const NLWest = R.map(R.trim, R.split(',', 'Dodgers ,  Rockies, Dbacks  , Padres,   Giants'));
NLWest;
