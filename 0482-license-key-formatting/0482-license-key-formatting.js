/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let cnt = 0;
    s = s.replace(/-/g, '').toUpperCase().split('');
    for(let i=s.length-1; i>0; i--){
        cnt++;
        if(cnt === k){
            s.splice(i, 0, '-');
            cnt = 0;
        }
    }
    return s.join('');
};