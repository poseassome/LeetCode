/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {
    return words.reduce((result, word) => {
		if(word.length > s.length) return result;
		let pointer = 0;
		for (let i=0; i<s.length; i++){
			if(word[pointer] === s[i]) pointer++;
			else if(s[i] === s[i+1] && s[i] === s[i-1]) i++;
			else if(!(s[i] === s[i-1] && s[i] === s[i-2])) return result;
		}
		return result + (pointer === word.length ? 1 : 0);
	}, 0);
};