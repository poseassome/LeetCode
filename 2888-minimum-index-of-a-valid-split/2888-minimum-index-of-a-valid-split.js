/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
    const len = nums.length;
    let x = nums[0], cnt = 0;
    for(const n of nums){
        if(n !== x) cnt--;
        else cnt++;
        if(!cnt){
            x = n;
            cnt++;
        }
    }

    let xCnt = 0;
    for(i in nums){
        if(nums[i] === x) xCnt++;
    }

    let leftCnt = 0, rightCnt = xCnt;
    for(let i=0; i<len; i++){
        if(nums[i] === x){
            leftCnt++;
            rightCnt--;
        }
        if(leftCnt*2 > (i+1) && rightCnt*2 > (len-i-1)) return i;
    }
    return -1;
};