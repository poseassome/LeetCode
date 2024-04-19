/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const map = {};
    for(let i=0; i<numbers.length; i++){
        const num = target-numbers[i];
        if(num in map) return [map[num]+1, i+1];
        map[numbers[i]] = i;
    }
};