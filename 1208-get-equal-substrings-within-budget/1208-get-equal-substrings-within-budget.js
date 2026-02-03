/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let len = s.length;
    let arr = new Array(len);

    let left = 0, right = 0;
    let cnt = 0, calc = 0;
    let res = 0;

    while(right < len){
        arr[right] = Math.abs(t[right].charCodeAt(0) - s[right].charCodeAt(0));
        cnt++;
        calc += arr[right];
        while(maxCost < calc){
            calc -= arr[left];
            cnt--;
            left++;
        }
        res = Math.max(res, cnt);
        right++;
    }
    return res;
};