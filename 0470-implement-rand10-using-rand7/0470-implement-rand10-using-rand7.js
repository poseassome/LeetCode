/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const i = Math.trunc(Math.random()*digits.length);
    return digits[i];
};