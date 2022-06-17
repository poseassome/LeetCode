/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // let answer = -1;
    // let sH = new Map();
    // s = s.split('');
    // for(let x of s){
    //     if(sH.has(x)) sH.set(x, sH.get(x)+1);
    //     else sH.set(x, 1)
    // }
    // for(let [key, val] of sH){
    //     if(val === 1){
    //         answer = s.indexOf(key);
    //         break;
    //     }
    // }
    // return answer;
    
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
};