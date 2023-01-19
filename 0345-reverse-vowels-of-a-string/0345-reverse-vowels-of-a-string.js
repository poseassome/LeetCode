/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let arr = [];
    for(const x of s){
        if(vowels.includes(x.toLowerCase())) arr.push(x);
    }
    s = s.split('');
    for(let i=0; i<s.length; i++){
        if(vowels.includes(s[i].toLowerCase())){
            s.splice(i, 1, arr.pop());
        }
    }
    return s.join('');
};