/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
    let valid = 1;
    if(time[3] === '?') valid *= 6;
    if(time[4] === '?') valid *= 10;
    if(time[0] === '?'){
        if(time[1] === '?' || Number(time[1]) <= 3) valid *= 3;
        else valid *= 2;
    }
    if(time[1] === '?'){
        if(time[0] === '?') valid *= 8;
        else if(Number(time[0]) === 2) valid *= 4;
        else valid *= 10;
    }
    return valid;
};