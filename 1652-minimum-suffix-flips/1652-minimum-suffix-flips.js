/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
    let prev = '0';
    let flips = 0;
    for(let i=0; i<target.length; i++){
        if(target[i] !== prev){
            flips++;
            prev = target[i];
        }
    }
    return flips;
};