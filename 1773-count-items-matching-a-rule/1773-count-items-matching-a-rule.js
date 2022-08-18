/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let cnt = 0;
    for(let i=0; i<items.length; ++i) {
        if(ruleKey === 'type') {
            if(ruleValue === items[i][0]) cnt++;
        }else if(ruleKey === 'color') {
            if(ruleValue === items[i][1]) cnt++;
        }else if(ruleValue === items[i][2]) cnt++;
    }
    return cnt;
};