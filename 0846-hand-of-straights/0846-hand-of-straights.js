/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if(groupSize === 1) return true;
    let queue = [];
    hand.sort((a,b) => a-b);
    for(const x of hand){
        if(!queue.length) queue.push([x]);
        else {
            const cur = queue[0];
            if(cur[cur.length-1]+1 !== x) queue.push([x]);
            else {
                const add = queue.shift();
                if(add.length+1 !== groupSize){
                    add.push(x);
                    queue.push(add);
                }
            }
        }
    }
    return queue.length === 0;
};