/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minDeletion = function(s, k) {
    const map = new Map();
    for(const x of s){
        map.set(x, (map.get(x) || 0)+1);
    }
    const arr = Array.from(map.values());
    if(arr.length <= k) return 0;
    arr.sort((a,b) => a-b);
    let deletions = 0;
    let remove = arr.length-k;
    for(let i=0; i<remove; i++){
        deletions += arr[i];
    }
    return deletions;
};