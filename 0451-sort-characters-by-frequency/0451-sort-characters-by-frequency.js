/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = {};
    for(const x of s){
        if(!map[x]) map[x] = 1;
        else map[x]++;
    }
    const arr = Object.entries(map).sort((a,b) => b[1]-a[1]);
    let str = '';
    for(const [key, val] of arr){
        for(let i=0; i<val; i++){
            str += key;
        }
    }
    return str;
};