/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    const flip = (left, right) => {
        while(left < right){
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    const res = [];
    for(let i=arr.length-1; i>=0; i--){
        const idx = arr.findIndex(el => el === i+1);
        if(idx === i) continue;
        if(idx > 0){
            res.push(idx+1);
            flip(0, idx);
        }
        res.push(i+1);
        flip(0, i);
    }
    return res;
};