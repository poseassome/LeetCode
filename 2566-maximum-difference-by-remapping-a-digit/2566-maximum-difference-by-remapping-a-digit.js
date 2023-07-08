/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    const minimum = num => {
        let i=0;
        while(num[i] === '0') i++;
        return +num.replaceAll(num[i], 0);
    }
    const maximum = num => {
        let i=0;
        while(num[i] === '9') i++;
        return +num.replaceAll(num[i], 9);
    }
    return maximum(num.toString()) - minimum(num.toString());
};