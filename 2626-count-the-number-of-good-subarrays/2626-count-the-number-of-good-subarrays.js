/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    let i=0;
    let cnt=0;
    let map = new Map();
    let res =0;

    for(let j=0; j<nums.length; j++){
        let c = map.get(nums[j]) || 0;
        cnt += c;
        map.set(nums[j],c+1);
        while(cnt >= k && i < nums.length){
            res += nums.length-j;
            let cur = map.get(nums[i]);
            map.set(nums[i],cur-1);
            cnt -= (cur-1);
            i++;
        }
    }
    return res;
};