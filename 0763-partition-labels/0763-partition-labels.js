/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let map = new Map();
    for(let i=0; i<s.length; i++){
        map.set(s[i], i);
    }
    let start = 0, end = 0, i = 0, res = [];
    while(i<s.length){
        if(map.get(s[i]) > end) end = map.get(s[i]);
        if(i === end){
            res.push((end+1) - start);
            start = end + 1;
        }
        i++;
    }
    return res;
};