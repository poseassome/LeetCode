/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    s = s.split(' ');
    let cnt = 1;
    let prev = s[0];
    while(cnt < s.length){
        if(s[cnt] > 0){
            let cur = Number(s[cnt]);
            if(cur <= prev) return false;
            prev = cur;
        }
        cnt++;
    }
    return true;
};