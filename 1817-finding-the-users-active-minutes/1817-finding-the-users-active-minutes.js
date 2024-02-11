/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    let map = {};
    let res = new Array(k).fill(0);
    for(const [id, time] of logs){
        if(!map[id]) map[id] = new Set();
        map[id].add(time);
    }
    for(const id in map){
        res[map[id].size-1]++;
    }
    return res;
};