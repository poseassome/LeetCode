/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
    let map = {}, res = '';
    for(const x of s){
        map[x] = (map[x] || 0) + 1;
    }
    let sorted = Object.keys(map).sort((a,b) => b.charCodeAt(0) - a.charCodeAt(0));

    while(sorted.length){
        let char = sorted[0];
        let cnt = Math.min(map[char], repeatLimit);
        res += char.repeat(cnt);
        map[char] -= cnt;
        if(map[char] > 0){
            if(sorted.length > 1){
                let nextChar = sorted[1];
                res += nextChar;
                map[nextChar]--;
                if(map[nextChar] === 0) sorted.splice(1, 1);
            } else break;
        }
        if(map[char] === 0) sorted.shift();
    }
    return res;
};