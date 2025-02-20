/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function(coordinate1, coordinate2) {
    const isL1Odd = isLetterOdd(coordinate1);
    const isL2Odd = isLetterOdd(coordinate2);
    const isN1Odd = isNumberOdd(coordinate1);
    const isN2Odd = isNumberOdd(coordinate2);

    return (isL1Odd === isL2Odd && isN1Odd === isN2Odd) || (isL1Odd !== isL2Odd && isN1Odd !== isN2Odd)
};

function isLetterOdd(coordinate) {
    const letter = coordinate.charAt(0);
    return letter === 'a' || letter === 'c' || letter === 'e' || letter === 'g';
}

function isNumberOdd(coordinate) {
    const number = Number(coordinate.charAt(1));
    return number % 2 !== 0;
}