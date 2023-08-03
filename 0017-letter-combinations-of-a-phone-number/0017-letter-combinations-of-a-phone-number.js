/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };
    let letters = [];
    if(!digits.length) return [];
    const combinate = (str, idx) => {
        if(idx === digits.length) {
            letters.push(str);
            return;
        }
        for(const x of map[digits[idx]]) combinate(str+x, idx+1);
    }
    combinate('', 0);
    return letters;
};