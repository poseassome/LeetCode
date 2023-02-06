/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    const answer = [];
    pref.forEach((el, idx) => answer.push(pref[idx]^pref[idx-1]));
    return answer;
};