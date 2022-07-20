/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const counts = { b: 0, a: 0, l: 0, o: 0, n: 0 };
    for (let i=0; i<text.length; i++) {
        if (text[i] in counts) counts[text[i]]++;
    }

    return Math.min(counts.b, counts.a, Math.floor(counts.l/2), Math.floor(counts.o/2), counts.n);
};