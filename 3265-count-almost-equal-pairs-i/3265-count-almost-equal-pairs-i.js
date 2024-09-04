/**
 * @param {number[]} nums
 * @return {number}
 */
var countPairs = function(nums) {
    const almostEqual = (arr, match) => {
        const len = arr.length;
        for(let i=0; i<len; i++){
            for(let j=i; j<len; j++){
                [arr[i], arr[j]] = [arr[j], arr[i]];
                if(Number(arr.join('')) === match){
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    return true;
                }
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        return false;
    }
    
    let cnt = 0, len = nums.length;
    for(let i=0; i<len; i++){
        let arr1 = nums[i].toString().split('');
        for(let j=i+1; j<len; j++){
            let arr2 = nums[j].toString().split('');
            if(almostEqual(arr1, nums[j]) || almostEqual(arr2, nums[i])) cnt++;
        }
    }
    return cnt;
};