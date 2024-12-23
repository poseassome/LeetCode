/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const dead = new Set(deadends);
    const queue = [['0000', 0]];
    const seen = new Set(['0000']);
    for(const [cur, turns] of queue){
        if(cur === target) return turns;
        if(dead.has(cur)) continue;
        for(const next of getNext(cur)){
            if(seen.has(next)) continue;
            seen.add(next);
            queue.push([next, turns+1]);
        }
    }
    return -1;
};

function getNext(s) {
    let res = [];
    for(let i=0; i<s.length; i++){
        res.push(s.slice(0, i) + ((+s[i]+1)%10).toString() + s.slice(i+1));
        res.push(s.slice(0, i) + ((+s[i]+9)%10).toString() + s.slice(i+1));
    }
    return res;
}