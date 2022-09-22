/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const len = s.length;
    const a = s.substr(0, len/2);
    const b = s.substr(len/2, len/2)
    let sum = 0;
    for(const x of vowels){
        sum += a.split('').filter(el => el === x).length
        sum -= b.split('').filter(el => el === x).length
    }
    return !sum;
};