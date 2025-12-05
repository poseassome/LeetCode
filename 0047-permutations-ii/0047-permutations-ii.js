/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    nums.sort();
    let backtrack = (path, choices) => {
        if(path.length === nums.length) {
            res.push([...path]);
            return;
        }
        for(let i=0; i<choices.length; i++){
            if(i > 0 && choices[i] === choices[i-1]) continue;
            path.push(choices[i]);
            backtrack(path, [...choices.slice(0, i), ...choices.slice(i+1)]);
            path.pop();
        }
    }
    backtrack([], nums);
    return res;
};