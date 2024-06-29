/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function(s) {
    let h1 = s[0], h2 = s[1], m1 = s[3], m2 = s[4];
    h1 = h1 === '?' ? (h2 === '?' || +h2 < 2 ? '1' : '0') : h1;
    h2 = h2 === '?' ? (h1 === '0' ? '9' : '1') : h2;
    m1 = m1 === '?' ? '5' : m1;
    m2 = m2 === '?' ? '9' : m2;
    return h1+h2+':'+m1+m2;
};