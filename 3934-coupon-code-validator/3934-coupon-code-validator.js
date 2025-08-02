/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
    let keys = [];
    const categories = ["electronics", "grocery", "pharmacy", "restaurant"];
    for(let i=0; i<code.length; i++){
        if(/^[a-zA-Z0-9_]+$/.test(code[i]) && categories.includes(businessLine[i]) && isActive[i]){
            keys.push(i);
        }
    }
    return keys.sort((a, b) => businessLine[a].localeCompare(businessLine[b]) || (code[a] > code[b] ? 1 : (code[a] === code[b] ? 0 : -1))).map(el => code[el]);
};