/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    /*
        filter(Boolean)
        :    Boolean을 iterator 로 사용하여 false, 0, -0, 0n, "", null, undefined, NaN를 제거
    */
    return words.join(separator).split(separator).filter(Boolean);
};