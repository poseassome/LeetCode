/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function(nums, left, right) {
	let start = end = -1;

	return nums.reduce((result, num, idx) => {
		if(num > right) {
			start = end = idx;
			return result;
		}
		if(num >= left) end = idx;
		return result + end - start;
	}, 0);
};