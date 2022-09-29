/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let sH = new Map();
    for(const x of nums){
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x, 1);
    }
    return nums.sort((a, b) => {
        if(sH.get(a) === sH.get(b)) return b-a;
        else return sH.get(a) - sH.get(b);
    })  
};