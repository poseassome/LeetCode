/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let x = [], y = [], slope = [];
    for(let i=0; i<coordinates.length; i++){
        x.push(coordinates[i][0]);
        y.push(coordinates[i][1]);
    }
    for(let i=0; i<x.length; i++){
        for(let j=i+1; j<x.length; j++){
            slope.push(Math.abs((y[j]-y[i])/(x[j]-x[i])));
        }
    }
    if([...new Set(slope)].length === 1) return true;
    else return false;
};