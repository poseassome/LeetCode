/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let exist = [];
    let nonexist = [];
    for(const x of arr1) {
        if(arr2.indexOf(x) !== -1) exist.push(x);
        else nonexist.push(x);
    }
    exist.sort((a, b) => arr2.indexOf(a) - arr2.indexOf(b));
    nonexist.sort((a, b) => a - b);
    return exist.concat(nonexist);
};