/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let max = s.length;
    let min = 0;
    let arr = [];
    for(const x of s){
        if (x === 'D'){
            arr.push(max);
            max--;
        } else {
            arr.push(min);
            min++;
        }
    }
    arr.push(max);
    return arr;
};