/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    for(let i=1; i<=nums.length; i++){
        let cnt = 0;
        for(const x of nums){
            if(x >= i) cnt++;
        }
        if(cnt === i) return cnt;
    }
    return -1;
};