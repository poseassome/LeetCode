/**
 * @param {string[]} words
 * @return {number[]}
 */
var lastVisitedIntegers = function(words) {
    let k=0, nums = [], arr = [];
    for(const x of words){
        if(x === 'prev'){
            k++;
            if(k>nums.length) arr.push(-1);
            else {
                const reverse = [...nums].reverse();
                arr.push(reverse[k-1]);
            }
        } else {
            k = 0;
            nums.push(x);
        }
    }
    return arr;
};