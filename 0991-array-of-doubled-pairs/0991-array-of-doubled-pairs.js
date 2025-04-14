/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
    const map = {};
    let total = 0;
    arr.sort((a,b) => a-b);
    for(let i=0; i<arr.length; i++){
        const num = arr[i];
        if(map[num/2]){
            map[num/2]--;
            total++;
        } else if(map[num*2]){
            map[num*2]--;
            total++;
        } else if(map[num]){
            map[num]++;
        } else map[num] = 1;
    }
    return total >= arr.length/2;
};