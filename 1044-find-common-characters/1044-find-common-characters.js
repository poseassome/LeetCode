/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let res = [];
    for(let x of words[0]){
        if(words.every((el) => el.includes(x))){
            res.push(x)
            words = words.map((el) => el.replace(x, ""));
        }
    }
    return res
};