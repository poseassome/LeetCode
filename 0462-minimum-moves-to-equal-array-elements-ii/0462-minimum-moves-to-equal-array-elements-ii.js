/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    let moves = 0;
    nums.sort((a,b) => a-b);
    const mid = parseInt(nums.length/2);
    for(let i=0; i<nums.length; i++){
        moves += Math.abs(nums[i] - nums[mid]);
    }
    return moves;
};