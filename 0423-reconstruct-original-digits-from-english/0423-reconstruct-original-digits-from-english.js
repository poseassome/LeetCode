/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    const cnt = new Array(10).fill(0);
    const charCount = new Array(26).fill(0);

    for (let i=0; i<s.length; i++){
        const charIndex = s.charCodeAt(i) - 'a'.charCodeAt(0);
        charCount[charIndex]++;
    }

    cnt[0] = charCount['z'.charCodeAt(0) - 'a'.charCodeAt(0)];
    cnt[2] = charCount['w'.charCodeAt(0) - 'a'.charCodeAt(0)];
    cnt[4] = charCount['u'.charCodeAt(0) - 'a'.charCodeAt(0)];
    cnt[6] = charCount['x'.charCodeAt(0) - 'a'.charCodeAt(0)];
    cnt[8] = charCount['g'.charCodeAt(0) - 'a'.charCodeAt(0)];
    cnt[3] = charCount['h'.charCodeAt(0) - 'a'.charCodeAt(0)] - cnt[8];
    cnt[5] = charCount['f'.charCodeAt(0) - 'a'.charCodeAt(0)] - cnt[4];
    cnt[7] = charCount['s'.charCodeAt(0) - 'a'.charCodeAt(0)] - cnt[6];
    cnt[9] = charCount['i'.charCodeAt(0) - 'a'.charCodeAt(0)] - cnt[5] - cnt[6] - cnt[8];
    cnt[1] = charCount['n'.charCodeAt(0) - 'a'.charCodeAt(0)] - cnt[7] - 2 * cnt[9];
    let res = '';
    for(let i=0; i<10; i++){
        res += String(i).repeat(cnt[i]);
    }
    return res;
};