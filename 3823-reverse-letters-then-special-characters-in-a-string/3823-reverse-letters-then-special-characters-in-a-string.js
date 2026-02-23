/**
 * @param {string} s
 * @return {string}
 */
var reverseByType = function(s) {
    const letters = [...s].filter(el => /^[a-z]$/.test(el));
    const specials = [...s].filter(el => !/^[a-z]$/.test(el));

    letters.reverse();
    specials.reverse();

    let letIdx = 0, specIdx = 0;
    
    return [...s].map(el => /^[a-z]$/.test(el) ? letters[letIdx++] : specials[specIdx++]).join('');
};