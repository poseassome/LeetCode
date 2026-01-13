/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.arr = nums;
    this.sum = 0;
    for(const val of this.arr){ 
        this.sum += val ;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    this.sum = this.sum - this.arr[index] + val;
    this.arr[index] = val;
    return null;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let totalElementRequired = right - left + 1;

    if(this.arr.length === totalElementRequired) return this.sum;
    else {
        let s1 = 0;
        let s2 = 0;
        let total = 0;

        for(let i=0; i<left; i++){
            s1 += this.arr[i];
        }
        for(let j=right+1; j<this.arr.length; j++){
            s2 += this.arr[j];
        }
        total = this.sum - (s1+s2);
        return total;
    }
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */