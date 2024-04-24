/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [[]];
    let set = new Set();
    nums.sort((a,b) => a-b);
    
    const Func = (prev, cur, word) => {
        for(let i=prev; i<nums.length; i++){
            if(set.has(word+nums[i])) continue;
            set.add(word+nums[i]);
            cur.push(nums[i]);
            res.push([...cur]);
            Func(i+1, cur, word+nums[i]);
            cur.pop();
        }
    }
    
    Func(0, [], '');
    return res;
};