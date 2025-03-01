/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function(words) {
    const set = new Set();
    const transform = str => {
        const split = [...str];
        const even = split.filter((el, idx) => idx%2 === 0);
        const odd = split.filter((el, idx) => idx%2 === 1);
        even.sort();
        odd.sort();
        return `${even.join('')+odd.join('')}`;
    }
    for(const x of words){
        set.add(transform(x));
    }
    return set.size;
};