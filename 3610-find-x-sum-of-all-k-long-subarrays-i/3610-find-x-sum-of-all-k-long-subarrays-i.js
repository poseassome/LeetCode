/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    let res = [], map = {}, i = 0;
    for(const n of nums){
        map[n] = (map[n] || 0) + 1;
        if(i >= k){
            const el = nums[i-k];
            map[el] = (map[el] || 0) - 1;
        }
        if(i >= k-1){
            const sum = Object.entries(map)
                .sort((a,b) => b[1]-a[1] || +b[0] - +a[0])
                .slice(0, x)
                .reduce((acc, cur) => acc + +cur[0] * +cur[1], 0);
            res.push(sum);
        }
        i++;
    }
    return res;
};