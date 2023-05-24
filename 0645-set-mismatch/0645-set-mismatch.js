/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const sH = new Map();
    for(const x of nums){
        sH.set(x, (sH.get(x) || 0) + 1);
    }
    let arr = Array(2);
    for(let i=1; i<=nums.length; i++){
        if(sH.get(i) === 2) arr[0] = i;
        if(!sH.get(i)) arr[1] = i;
    }
    return arr;
};