/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function(s, k) {
    let idx = 0, res = '';
    while(idx < s.length){
        let val = 0;
        for(let i=0; i<k; i++){
            val += (s.charCodeAt(idx) - 'a'.charCodeAt(0));
            idx++;
        }
        val = val%26;
        res += String.fromCharCode('a'.charCodeAt(0)+val);
    }
    return res;
};