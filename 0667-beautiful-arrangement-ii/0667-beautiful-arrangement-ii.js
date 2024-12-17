/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
    let res = [], left = 1, right = n;
    for(let i=0; i<n; i++){
        if(k === 1){
            res.push(left++);
            continue;
        }
        const num = k&1 ? left++ : right--;
        res.push(num);
        k--;
    }
    return res;
};