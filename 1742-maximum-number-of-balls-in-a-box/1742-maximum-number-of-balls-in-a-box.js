/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let arr = [], nums = [];
    for(let i=lowLimit; i<=highLimit; i++){
        const numbered = +String(i).split('').reduce((acc, cur) => +acc + +cur);
        if(arr.includes(numbered)) nums[arr.indexOf(numbered)] += 1;
        else {
            arr.push(numbered);
            nums.push(1);
        }
    }
    return Math.max(...nums);
};