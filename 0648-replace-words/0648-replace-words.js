/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const sen = sentence.split(" ");
    for(let i=0; i<sen.length; i++){
        for(let j=0; j<dictionary.length; j++){
            if(sen[i].startsWith(dictionary[j])) sen[i] = dictionary[j];
        }
    }
    return sen.join(" ");
};