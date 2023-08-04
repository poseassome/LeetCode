/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    let charCode = 97;
    s = s.split('');
    s.forEach((el, idx) => {
        if(el === '?'){
            while(String.fromCharCode(charCode) === s[idx-1] || String.fromCharCode(charCode) === s[idx+1]){
                charCode++;
            }
            s[idx] = String.fromCharCode(charCode);
            charCode = 97;
        };
    });
    return s.join('');
};