/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    const GCD = (a, b) => b>0 ? GCD(b, a%b) : a;
    const sH = new Map();
    let res = 0;
    deck.forEach(el => sH.set(el, (sH.get(el) || 0)+1));
    sH.forEach(el => res = GCD(el, res));
    return res > 1;
};