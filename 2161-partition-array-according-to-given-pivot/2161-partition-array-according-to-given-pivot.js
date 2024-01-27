/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const less = [], equal = [], great = [];
    for(const x of nums){
        if(x < pivot) less.push(x);
        if(x === pivot) equal.push(x);
        if(x > pivot) great.push(x);
    }
    return [...less, ...equal, ...great];
};