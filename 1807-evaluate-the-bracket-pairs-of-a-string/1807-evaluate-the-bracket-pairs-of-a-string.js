/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    const knowledgeMap = knowledge.reduce((map, [key, value]) => {
        return map[key] = value, map;
    }, {});
    let res = key = '';
    let isStart = false;
    for(const x of s) {
        if(x === '(') isStart = true;
        else if(x === ')') {
            res += knowledgeMap[key] ?? '?';
            isStart = false;
            key = '';
        } else isStart ? key += x : res += x;
    }
    return res;
};