/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.map = {};
    for(let i=0; i<nums.length; i++){
        if(!this.map[nums[i]]) this.map[nums[i]] = [];
        this.map[nums[i]].push(i);
    }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    let arr = this.map[target];
    let random = Math.floor(arr.length*Math.random());
    return arr[random];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */