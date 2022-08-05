/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const vowel = ["a", "e", "i", "o", "u"];
    const arr = sentence.split(" ");
    let answer = [];

    for(let i=0; i<arr.length; i++) {
        const word = arr[i];
        let ww = "";

        if (vowel.includes(word[0].toLowerCase())) ww = word + "ma";
        else ww = word.slice(1) + word[0] + "ma";

        ww += "a".repeat(i+1);
        answer.push(ww);
    }

    return answer.join(" ");
};