/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    start = start.toString(2);
    goal = goal.toString(2);
    if(start.length !== goal.length){
        if(start.length > goal.length) goal = goal.toString().padStart(start.length, '0')
        else start = start.toString().padStart(goal.length, '0')
    }

    let cnt = 0;
    for (let i=0; i<start.length; i++) {
        if (start[i] !== goal[i]) cnt++;
    }
    return cnt;
};