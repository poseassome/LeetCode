/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let res = [];
    const arith = arr => {
        arr.sort((a,b) => a-b);
        const diff = arr[1] - arr[0];
        for(let i=2; i<arr.length; i++){
            if(diff !== arr[i]-arr[i-1]) return false;
        }
        return true;
    }
    for(let i=0; i<l.length; i++){
        res.push(arith(nums.slice(l[i], r[i]+1)));
    }
    return res;
};