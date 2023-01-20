/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    while(!set.has(n)){
        set.add(n);
        let str = n.toString();
        n = 0;
        for(let i=0; i<str.length; i++){
            n += Math.pow(+str[i], 2);
        }
        if(n === 1) return true;
    }
    return false;
};