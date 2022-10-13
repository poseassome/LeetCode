/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let str = '';
    for(let x of s){
        str += x.charCodeAt(0) - 96;
    }
    while(k && str.length > 1){
        let sum = 0;
        for(let i=0; i<str.length; i++) {
            sum += +str[i];
        }
        str = sum + '';
        k--;
    }
    return str;  
};