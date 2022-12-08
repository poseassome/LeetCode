/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let count = 0;
    let arr = [];

    for(let i=0; i<nums.length; i++){
        if(arr[arr.length - 1] !== nums[i]) arr.push(nums[i]);
    }
    for(let i=1; i<arr.length-1; i++){
        let j = arr[i - 1];
        let k = arr[i + 1];
        if(arr[i] !== j && arr[i] !== k){
            if((arr[i]>j && arr[i]>k) || (arr[i]<j && arr[i]<k)) count++;
        }
    }
    return count;
};