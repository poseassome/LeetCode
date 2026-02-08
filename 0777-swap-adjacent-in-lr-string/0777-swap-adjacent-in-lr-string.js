/**
 * @param {string} start
 * @param {string} result
 * @return {boolean}
 */
var canTransform = function(start, result) {
    if (start.replace(/X/g, '') !== result.replace(/X/g, '')) return false;

    let i = 0, j = 0;
    const len = start.length;

    while(i < len && j < len){
        while(i < len && start[i] === 'X') i++;
        while(j < len && result[j] === 'X') j++;

        if(i === len && j === len) return true;
        if(i === len || j === len) return false;

        if(start[i] !== result[j]) return false;

        if(start[i] === 'L' && i < j) return false;
        if(start[i] === 'R' && i > j) return false;

        i++;
        j++;
    }

    return true;
};