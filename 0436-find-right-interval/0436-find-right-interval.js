/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
	const starts = intervals.map((item, index) => {
		return { value: item[0], index };
	});
	const search = (value, start = 0, end = starts.length - 1) => {
		let result;
		while (start <= end) {
			const mid = start + ((end - start) >> 1);
			if (starts[mid].value >= value) {
				end = mid - 1;
				result = mid;
			}
			else start = mid + 1;
		}
		return result ? starts[result].index : -1;
	};
	starts.sort((a, b) => a.value - b.value);
	return intervals.map(([start, end], index) => {
		if (start === end) return index;
		return search(end);
	});
};