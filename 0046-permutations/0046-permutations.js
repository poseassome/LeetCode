/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    const func = (nums, arr) => {
        if(!nums.length){
            res.push([...arr]);
            return;
        }
        for(const x of nums){
            arr.push(x);
            const val = nums.filter(el => el !== x);
            func(val, arr);
            arr.pop();
        }
    }
    func([...nums], []);
    return res;
};