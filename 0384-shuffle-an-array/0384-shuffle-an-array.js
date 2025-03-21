/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const arr = [...this.nums];
    for(let i=0; i<arr.length; i++){
        const r = i + Math.floor(Math.random() * arr.length-i);
        const temp = arr[i];
        arr[i] = arr[r];
        arr[r] = temp;
    }
    return arr;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */