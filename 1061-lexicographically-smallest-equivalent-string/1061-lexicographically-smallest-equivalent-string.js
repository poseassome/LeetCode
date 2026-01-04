/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    const union = new Map();
    const unionFind = (target) => {
        const value = union.get(target) || target;
        return value === target ? value : unionFind(value);
    };

    for(let i=0; i<s1.length; i++){
        const a = unionFind(s1[i]);
        const b = unionFind(s2[i]);
        a < b ? union.set(b, a) : union.set(a, b);
    }

    return [...baseStr].reduce((acc, cur) => acc + unionFind(cur), '');
};