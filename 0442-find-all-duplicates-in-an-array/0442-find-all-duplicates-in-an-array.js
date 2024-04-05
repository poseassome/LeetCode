/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let sH = new Map();
    let res = [];
    for(const x of nums){
        if(!sH.has(x)) sH.set(x, 1)
        else {
            sH.set(x, sH.get(x)+1);
            res.push(x);
        }
    }
    return res;
}; 