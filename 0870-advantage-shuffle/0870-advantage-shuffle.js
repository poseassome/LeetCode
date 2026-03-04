/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
	const nums2Map = nums2.map((el, idx) => [el, idx]);
	const res = [];
	nums1.sort((a, b) => a - b);
	nums2Map.sort((a, b) => b[0] - a[0]);

	nums2Map.forEach(([el, idx]) => {
		res[idx] = nums1.at(-1) > el ? nums1.pop() : nums1.shift();
	});
	return res;
};