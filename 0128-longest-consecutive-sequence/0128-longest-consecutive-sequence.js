/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set([...nums]);
    let max = 0;
    for(let x of set){
        if(!set.has(x-1)){
            let cnt = 0;
            while(set.has(x++)) cnt++;
            max = Math.max(cnt, max);
        }
    }
    return max;
};