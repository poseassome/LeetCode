/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestEqualSubarray = function(nums, k) {
  const map = new Map()
  for(let i = 0; i < nums.length; i++) {
    if(map.has(nums[i])) map.get(nums[i]).push(i);
    else map.set(nums[i], [i]);
  }
  let res = 1;
  for(const [key, values] of map) {
    let left = 0, right = 0, cnt = 0;
    while(left <= right && right < values.length) {
      if(cnt <= k) {
        res = Math.max(res, values[right] - values[left] + 1 - cnt);
        right++;
        cnt += (values[right] - values[right - 1] - 1);
      } else {
        left++;
        cnt -= (values[left] - values[left - 1] - 1);
      }
    }
  }
  return res;
};