/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function(p, q) {
    while(p%2 === 0 && q%2 === 0){
        p = p/2;
        q = q/2;
    }
    if(p%2 === 0) return 2;
    else if(q%2 === 0) return 0;
    else return 1;
};