/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let res = [];
    queries.forEach((el) => {
        const val = el[0], idx = el[1];
        const newVal = val + nums[idx];
        nums[idx] = newVal;
        let sum = 0;
        for(let i=0; i<nums.length; i++){
            if(nums[i]%2 === 0) sum += nums[i];
        }
        res.push(sum);
    })
    return res;
};