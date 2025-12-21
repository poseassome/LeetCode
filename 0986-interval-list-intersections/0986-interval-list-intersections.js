/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let res = [];
    if(!secondList.length || !firstList.length) return res;

    for(const arr of secondList){
        const [key, value] = arr;
        for(const arr1 of firstList){
            const [key1, value1] = arr1;
            const start = Math.max(key1, key);
            const end = Math.min(value1, value);
            if(start <= end) res.push([start, end]);
        }
    }
    return res;
};