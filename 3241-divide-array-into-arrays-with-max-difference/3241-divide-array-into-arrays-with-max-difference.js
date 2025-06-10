/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    let store = [...nums].sort((a,b) => b-a);
    const arrayCnt = store.length/3;
    const arr = [];
    const isValidDiff = (e1, e2) => Math.abs(e1 - e2) <= k;

    while(store.length > 0){
        const el1 = store.pop();
        let el2 = store.pop();
        let el3 = store.pop();
        if(isValidDiff(el1, el2) && isValidDiff(el1, el3) && isValidDiff(el2, el3)) arr.push([el1, el2, el3]);
        else break;
    }
    return arr.length < arrayCnt ? [] : arr;
};