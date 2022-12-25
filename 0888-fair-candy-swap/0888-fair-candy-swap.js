/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let aliceCandies = aliceSizes.reduce((acc, cur) => acc+cur);
    let bobCandies = bobSizes.reduce((acc, cur) => acc+cur);
    let gap = Math.floor((aliceCandies-bobCandies)/2);
    let bobSet = new Set(bobSizes);
    for(let i=0; i<aliceSizes.length; i++){
        if(bobSet.has(aliceSizes[i]-gap)) return [aliceSizes[i], aliceSizes[i]-gap];
    }
};