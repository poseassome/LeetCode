/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestAbsent = function(nums) {
    let sum = 0, max = 0;
    for(const n of nums){
        sum += n;
        max = Math.max(n, max);
    }
    let avg = sum/nums.length;
    let res = 1;
    for(let i=1; i<=max+1; i++){
        if(!nums.includes(i) && i > avg){
            res = i;
            break;
        }
    }
    return res;
};