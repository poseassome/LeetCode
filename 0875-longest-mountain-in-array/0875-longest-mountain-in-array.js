/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    const len = arr.length;
    let longest = 0;
    for(let i=1; i<len-1; i++){
        let left = i-1, right = i+1;
        if(arr[left] < arr[i] && arr[right] < arr[i]){
            while(left >= 0 && arr[left-1] < arr[left]) left--;
            while(right < len-1 && arr[right] > arr[right+1]) right++;
            longest = Math.max(longest, right-left+1);
        }
    }
    return longest;
};