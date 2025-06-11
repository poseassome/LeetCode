/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const map = new Map();
    let newArr = [];
    for(const x of arr){
        map.set(x, (map.get(x)||0) +1);
    }
    for(const [key, val] of map){
        newArr.push(val);
    }
    newArr.sort((a,b) => b-a);
    let tmp = 0, cnt = 0;
    for(let i=0; i<newArr.length; i++){
        tmp += newArr[i];
        cnt++;
        if(tmp >= arr.length/2) return cnt;
    }
};