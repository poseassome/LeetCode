/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if(s.length !== goal.length) return false;
    let [diff, str] = [[], new Set(s)];
    for(i in s){
        if(s[i] !== goal[i]) diff.push([s[i], goal[i]]);
    }
    return diff.length === 2 && diff[0].join() === diff[1].reverse().join() || (diff.length === 0 && str.size !== s.length);
};