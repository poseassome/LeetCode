/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let set = new Set(friends)
    let res = [];
    for(const x of order) {
        if(set.has(x)) res.push(x);
    }
    return res;
};