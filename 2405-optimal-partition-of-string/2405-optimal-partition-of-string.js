/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let set = new Set();
    let cnt = 1;
    for(const x of s){
        if(set.has(x)){
            set = new Set();
            cnt++;
        }
        set.add(x);
    }
    return cnt;
};