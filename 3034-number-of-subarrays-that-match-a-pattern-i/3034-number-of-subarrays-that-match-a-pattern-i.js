/**
 * @param {number[]} nums
 * @param {number[]} pattern
 * @return {number}
 */
var countMatchingSubarrays = function(nums, pattern) {
    let cnt = 0, len = pattern.length;
    for(let i=0; i<nums.length; i++){
        let tempArr = nums.slice(i, len+1+i);
        if(tempArr.length === len+1){
            let tempCnt = 0;
            for(let j=0; j<len; j++){
                if(pattern[j] === 1 && tempArr[0+j+1] > tempArr[0+j]) tempCnt++;
                else if(pattern[j] === 0 && tempArr[0+j+1] === tempArr[0+j]) tempCnt++;
                else if(pattern[j] === -1 && tempArr[0+j+1] < tempArr[0+j]) tempCnt++;
            }
            if(tempCnt === len) cnt++;
        }
    }
    return cnt;
};