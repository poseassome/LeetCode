/**
 * @param {string[][]} responses
 * @return {string}
 */
var findCommonResponse = function(responses) {
    let map = new Map();
    for(const x of responses){
        for(const a of new Set(x)){
            map.set(a, (map.get(a)||0) + 1);
        }
    }
    let res = "", max = 0;
    for(const [x, cnt] of map.entries()){
        if(cnt > max || (cnt === max && x < res)){
            res = x;
            max = cnt;
        }
    }
    return res;
};